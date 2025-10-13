import React from 'react'
import {Link, NavLink} from 'react-router-dom'


export default function Header() {

const logo=`${import.meta.env.BASE_URL}logo.jpg`;

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className=" text-semibold  border-0 mr-4  px-5 lg:px-3 shadow-pink-400 shadow-2xl  py-1">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className='ml-2 flex flex-wrap justify-between items-center'>
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-4 h-20 rounded-full"
                            alt="Logo"
                        />
                    </Link>
                    
                    </div>
                    
                    <div
                        className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">


            
                            {/* <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700": "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li> */}
                            
                             <li>
                                <NavLink
                                to="/"
                                   className={({ isActive }) =>
                                            `block px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                                               isActive
                                        ? "bg-orange-600 text-white shadow-md"
                                                    : "text-black text-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:scale-105 hover:shadow-lg"
                                                                   }`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({ isActive }) =>
                                            `block px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                                               isActive
                                        ? "bg-orange-600 text-white shadow-md"
                                                    : "text-black text-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:scale-105 hover:shadow-lg"
                                                                   }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({ isActive }) =>
                                            `block px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                                               isActive
                                        ? "bg-orange-600 text-white shadow-md"
                                                    : "text-black text-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:scale-105 hover:shadow-lg"
                                                                   }`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/resume"
                                    className={({ isActive }) =>
                                            `block px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                                               isActive
                                        ? "bg-orange-600 text-white shadow-md"
                                                    : "text-black text-semibold hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:scale-105 hover:shadow-lg"
                                                                   }`
                                    }
                                >
                                    Resume
                                </NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



