
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonSecondary from '../../../components/ButtonSecondary/ButtonSecondary';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav >
            <div className="my-container">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link >
                                <h3 className="font-bold text-3xl text-blue-500">
                                    RoboSync
                                </h3>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex space-x-4 font-medium uppercase">
                            <Link className="hover:text-primary duration-300  ">
                                Home
                            </Link>
                            <Link className="hover:text-primary duration-300  ">
                                About Us
                            </Link>
                            <Link className="hover:text-primary duration-300  ">
                                Services
                            </Link>
                            <Link className="hover:text-primary duration-300  ">
                                Blog
                            </Link>
                            <Link className="hover:text-primary duration-300  ">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Link className="">
                            <ButtonSecondary>Log In</ButtonSecondary>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="hover:text-primary focus:outline-none focus:text-primary">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? ' translate-x-0' : ' translate-x-full'} fixed top-0 right-0 h-full bg-primary w-64 transform transition-all duration-500 ease-in-out font-medium uppercase`}>
                <div className="px-4 py-8 text-center">
                    <button onClick={toggleMenu} className="text-black hover:text-white focus:outline-none focus:text-white absolute top-4 right-4">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <Link onClick={toggleMenu} className="block text-gray-300 hover:bg-white hover:text-black duration-300 py-2 mt-10">
                        Home
                    </Link>
                    <Link onClick={toggleMenu} className="block text-gray-300 hover:bg-white hover:text-black duration-300 py-2">
                        About Us
                    </Link>
                    <Link onClick={toggleMenu} className="block text-gray-300 hover:bg-white hover:text-black duration-300 py-2">
                        Services
                    </Link>
                    <Link onClick={toggleMenu} className="block text-gray-300 hover:bg-white hover:text-black duration-300 py-2">
                        Blog
                    </Link>
                    <Link onClick={toggleMenu} className="block text-gray-300 hover:bg-white hover:text-black duration-300 py-2">
                        Contact
                    </Link>
                    <Link onClick={toggleMenu} className="block text-gray-300 hover:bg-white hover:text-black duration-300 py-2">
                        Log In
                    </Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;