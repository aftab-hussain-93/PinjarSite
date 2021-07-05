import "react-datetime/css/react-datetime.css";
import Router, { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../components/Layouts/Layout'
import AdminLayout from '../components/admin/AdminLayout'
import '../styles/globals.css'

const MyApp = (values) => {
  const { Component, pageProps } = values
  const router = useRouter()
  if (['/login'].includes(router.pathname)) {

    return (<Component {...pageProps} />)

  } else if (router.pathname.startsWith('/admin')) {

    const { data, error } = useSWR('/api/user', (url) => fetch(url).then(r => r.json()))

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
      return <div>Failed to load....</div>
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

export default MyApp
