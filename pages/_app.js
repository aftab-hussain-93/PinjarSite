import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router'
// Styles
import '../styles/globals.css'
import "react-datetime/css/react-datetime.css";
// Components
import Layout from '../components/Layouts/Layout'
import AdminLayout from '../components/admin/AdminLayout'
import FullPageLoader from '../components/Loaders/FullPageLoader';
// SWR Hooks
import { useProfile } from '../utils/auth';

const App = (values) => {
  const [pageLoading, setPageLoading] = useState(false);
  const { Component, pageProps } = values
  const router = useRouter()

  const loginPage = <Component {...pageProps} />
  const adminLayoutPage = (<AdminLayout><Component {...pageProps} /></AdminLayout>)
  const regularLayout = (<Layout><Component {...pageProps} /></Layout>)
  const loaderComponent = <FullPageLoader />

  useEffect(() => { // Hook to show loader between page redirection
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  const { user, isLoading, isError } = useProfile()

  if (pageLoading || isLoading) return loaderComponent;

  if (['/login'].includes(router.pathname)) {
    // Login Path
    if (user) Router.push('/admin/dashboard');
    else return loginPage;

  } else if (router.pathname.startsWith('/admin')) {
    // Admin Login
    if (user) return adminLayoutPage;
    else if(isError) Router.push('/')
  }
  return regularLayout;
}

export default App
