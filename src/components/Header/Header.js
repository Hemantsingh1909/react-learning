import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { CustomButton } from '../CustomButton/CustomButton';
function Header() {
  return (
    <header className="shadow sticky z-50 top-0 font-sans">
    <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img
                    src={Logo}
                    className="mr-3 h-20"
                    alt="Logo"
                />
            </Link>
            <div className="flex items-center flex-around lg:order-2">
                <Link
                    to="#"
                    className="text-white hover:bg-gray-50 hover:text-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-4 lg:px-5 py-2 lg:py-2.5 mr-3 focus:outline-none"
                >
                    Log in
                </Link>
                <Link to="./about">
                <CustomButton variant="contained" label='Buy Pre-made Setup' />
                </Link>
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium text-3xl lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                        to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/about"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Buy Trades
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/contact"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/blog"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header;
