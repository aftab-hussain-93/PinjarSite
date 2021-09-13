import Router, { useRouter } from 'next/router'
import useSWR from 'swr'
// Styles
import '../styles/globals.css'
import "react-datetime/css/react-datetime.css";
// Components
import Layout from '../components/Layouts/Layout'
import AdminLayout from '../components/admin/AdminLayout'
// Config
import { apiUrl } from '../config/api.config';
import { fetcher } from '../utils/apiFetcher'

const App = (values) => {
  const { Component, pageProps } = values
  const router = useRouter()
  const serverUrl = `${apiUrl}/auth/profile`
  const { data, error } = useSWR(serverUrl, fetcher)
  const loggedInUser = data ? (data.user) : undefined
  const hasErroredOut = error || data?.error
  
  if (['/login'].includes(router.pathname)) {
    if (loggedInUser) {
      return Router.push('/admin/dashboard')
    } else {
      return (<Component {...pageProps} />)
    }
  } else if (router.pathname.startsWith('/admin')) {    
    if (loggedInUser) {
      return (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>)
    }
    if (hasErroredOut) {
      return Router.push('/')
    }
    return <div>loading...</div>
   }
  else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>)
  }

}

export default App
