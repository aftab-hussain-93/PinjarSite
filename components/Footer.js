import styles from '../styles/Footer.module.css'
import Image from 'next/image'
const Footer = () => {
    return (
        <>
            <footer className="footer-1 bg-gray-900 py-8 sm:py-12 text-gray-200">
                <div className="container mx-auto px-4">
                    <div className="sm:flex sm:flex-wrap sm:justify-around sm:-mx-4 md:py-4">
                        <div className="px-4">
                            <h5 className="text-2xl font-semibold mb-6">KRNPS</h5>
                            <ul className="list-none">
                                <li className="mb-2">
                                    <a href="/members" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Organization</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/contact" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Contact Us</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/reports" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Reports</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/events" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Events</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4  mt-8 sm:mt-0">
                            <h5 className="text-2xl font-semibold mb-6">Information</h5>
                            <ul className="list-none">
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Gallery</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/about" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">About Us</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/personalities" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Personalities</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Privacy Policy</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="px-4  mt-8 md:mt-0">
                            <h5 className="text-2xl font-semibold mb-6">About</h5>
                            <ul className="list-none">
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Team</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Locations</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Privacy</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Terms</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4  mt-8 md:mt-0">
                            <h5 className="text-2xl font-semibold mb-6">Help</h5>
                            <ul className="list-none">
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Support</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Help Center</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Contact Us</a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="px-4  mt-8 md:mt-0">
                            <h5 className="text-2xl font-semibold mb-6">Address</h5>
                            <address className="not-italic mb-4 text-sm">
                                Bangalore<br />
                                Karnataka, India
                            </address>
                            <h5 className="text-2xl font-semibold mb-6">Phone Number</h5>
                            <p className="not-italic mb-4 text-sm">
                                +91-1234567890
                            </p>
                        </div>
                    </div>

                    {/* <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
                        <div className="px-4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">Address</h6>
                            <address className="not-italic mb-4 text-sm">
                                Bangalore<br />
                                Karnataka, India
                            </address>
                        </div>
                        <div className="px-4 mt-4 md:mt-0">
                            <h6 className="font-bold mb-2">Phone Number</h6>
                            <p className="not-italic mb-4 text-sm">
                                +91-1234567890
                            </p>
                        </div>
                    </div> */}
                </div>
            </footer>
        </>
    )
}

export default Footer
