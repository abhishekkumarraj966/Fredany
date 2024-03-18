import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#7d3c1356] p-4">
            <div className="max-w-7xl mx-auto flex  lg:justify-between items-center">
                <div className={`text-[#000000] ml-[21px] lg:ml-[64px] text-[15px] lg:text-[32px]   font-bold ${isOpen ? "hidden" : "block"}`}>FRED</div>
                <div className=" lg:hidden">
                    <button
                        className="text-white focus:outline-none absolute right-2 top-2"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        </svg>
                    </button>
                </div>
                <ul className={`lg:flex  space-x-[50px] ${isOpen ? 'block' : 'hidden'}`}>
                    <li className='flex gap-2 items-baseline ml-[50px] justify-center'>
                        <a href="#" className="text-white lg:text-[24px] font-normal hover:text-gray-300">
                            Home
                        </a>
                        <img src='/assets/Vector 21.png' className='w-[10px] h-[10px] ml-1' />
                    </li>
                    <li className='flex gap-2 items-baseline'>
                        <a href="#" className="text-white lg:text-[24px] font-normal hover:text-gray-300">
                            Shop            </a>
                        <img src='/assets/Vector 21.png' className='w-[10px] h-[10px] ml-1' />
                    </li>
                    <li className='flex gap-2 items-baseline'>
                        <a href="#" className="text-white lg:text-[24px] font-normal hover:text-gray-300">
                            Blog            </a>
                        <img src='/assets/Vector 21.png' className='w-[10px] h-[10px] ml-1' />
                    </li>

                    <li>
                        <a href="#" className="text-white hover:text-gray-300 lg:text-[24px] font-normal">
                            About Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
