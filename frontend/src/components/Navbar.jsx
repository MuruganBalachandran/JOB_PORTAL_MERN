import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: "/", title: "Start a search" },
        { path: "/my-job", title: "My jobs" },
        { path: "/salary", title: "Salary" },
        { path: "/post-job", title: "Post a job" },
    ];

    return (
        <header className='bg-white shadow'>
            <nav className='container mx-auto flex justify-between items-center py-4'>
                <Link to='/' className='flex items-center gap-2 text-2xl text-black font-bold'>Job portal</Link>
                <div className='hidden md:flex flex-grow justify-center'>
                    <ul className='flex gap-12'>
                        {
                            navItems.map(({ path, title }) => (
                                <li key={path} className='text-base text-primary'>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600")}
                                    >
                                        {title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='hidden md:flex space-x-4'>
                    <Link to="/login" className='py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition'>Login</Link>
                    <Link to="/signup" className='py-2 px-4 border border-blue-600 rounded bg-blue-600 text-white hover:bg-blue-700 transition'>Signup</Link>
                </div>
                {/* Mobile menu button */}
                <button onClick={handleMenuToggle} className='mx-2 md:hidden text-black'>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </nav>
            {isMenuOpen && (
                <div className='md:hidden bg-white shadow-lg p-4'>
                    <ul className='flex flex-col space-y-2'>
                        {
                            navItems.map(({ path, title }) => (
                                <li key={path}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600")}
                                    >
                                        {title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='flex flex-col space-y-2 mt-4'>
                        <Link to="/login" className='text-center py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition'>Login</Link>
                        <Link to="/signup" className='text-center py-2 px-4 border border-blue-600 rounded bg-blue-600 text-white hover:bg-blue-700 transition'>Signup</Link>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
