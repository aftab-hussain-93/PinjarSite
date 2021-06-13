import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <main class="bg-gray-100 m-0 p-0 border-0">
            <Nav />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
