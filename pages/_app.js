import Layout from '../components/Layout'
import AdminLayout from '../components/admin/AdminLayout'
import '../styles/globals.css'
import { useRouter } from 'next/router'

const MyApp = (values) => {
  const { Component, pageProps } = values
  const router = useRouter()
  if (['/login'].includes(router.pathname)) {
    return (<Component {...pageProps} />)
  } else if (router.pathname.startsWith('/admin')) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>)
   }
  else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>)
  }

}

export default MyApp
