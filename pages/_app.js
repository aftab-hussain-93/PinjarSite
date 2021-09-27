import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router'
// Styles
import '../styles/globals.css'
import "react-datetime/css/react-datetime.css";
// Components
import Layout from '../components/Layouts/Layout'
import AdminLayout from '../components/Layouts/AdminLayout'
import FullPageLoader from '../components/Loaders/FullPageLoader';

// SWR Hooks
import { useProfile } from '../utils/auth';

// Auth Providers
// import { AuthProvider } from '../components/context/AuthContext';

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const [pageLoading, setPageLoading] = useState(false);
  const { user: loginUser, isLoading, isError } = useProfile()
  
  let isDestinationLogin, isDestinationAdmin, result;
  
  useEffect(() => { // Hook to show loader between page redirection
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };
    
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);
  
  const loginPage = <Component {...pageProps} />
  const adminPage = (<AdminLayout><Component {...pageProps} /></AdminLayout>)
  const regularLayout = (<Layout><Component {...pageProps} /></Layout>)
  const loaderComponent = <FullPageLoader />
  
  
  if (pageLoading) return loaderComponent;
  
  if (['/login'].includes(router.pathname)) {
    isDestinationLogin = true
    // result = (<AuthProvider>{loginPage}</AuthProvider>)
    result = loginPage
  } else if (router.pathname.startsWith('/admin')) {
    isDestinationAdmin = true
    // result = (<AuthProvider>{adminPage}</AuthProvider>)
    result = adminPage
  } else {
    result = regularLayout
  }
  
  if (isDestinationAdmin || isDestinationLogin) {
    // Conditional rendering based on whether the user is logged in
    if (isLoading || pageLoading) return loaderComponent;
    
    if (isError && isDestinationAdmin) {
      Router.push('/')
      // document.
    }
    if (!loginUser && isDestinationAdmin) {
      Router.push('/')
    }
    if (loginUser && isDestinationLogin) {
      Router.push('/admin/events')
    }
  }
  return result;
}

export default App
