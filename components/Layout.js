import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <main className="bg-gray-100 m-0 p-0 border-0 text-gray-500">
            <Nav />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
