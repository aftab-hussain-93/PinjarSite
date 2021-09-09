import "react-datetime/css/react-datetime.css";
import Router, { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../components/Layouts/Layout'
import AdminLayout from '../components/admin/AdminLayout'
import '../styles/globals.css'

const App = (values) => {
  const { Component, pageProps } = values
  const router = useRouter()
  if (['/login'].includes(router.pathname)) {

      return (<Component {...pageProps} />)  

  } else if (router.pathname.startsWith('/admin')) {
    const fetcher = url => fetch(url, { credentials: "include" }).then(res => res.json())
    const serverUrl = 'http://localhost:3000/api/v1/auth/profile'
    const { data, error } = useSWR(serverUrl, fetcher)
    if (data?.user) {
      return (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>)
    }
    if (data?.error) {
      Router.push('/')
    }
    if (error) {
      return <div>Failed to load. Please refresh and try again later...</div>
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
