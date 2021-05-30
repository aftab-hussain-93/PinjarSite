import Layout from '../components/Layout'
import '../styles/globals.css'
import { useRouter } from 'next/router'

const MyApp = (values) => {
  const { Component, pageProps } = values
  const router = useRouter()
  if (router.pathname == '/login') {
    return (<Component {...pageProps} />)
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>)
  }

}

export default MyApp
