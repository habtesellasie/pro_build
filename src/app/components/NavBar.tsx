'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <button
        className='fixed z-50 top-2 left-2 md:hidden px-4 py-2 rounded-lg bg-gray-300 text-black hover:bg-gray-300 hover:ring-2 ring-blue-400 transition'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoClose size={20} /> : <IoMdMenu size={20} />}
      </button>

      {/* Mobile Menu */}
      <ul
        className={`fixed z-50 top-14 left-2 flex flex-col gap-4 border-2 border-gray-600/80 dark:border-gray-500 px-4 py-4 rounded-lg bg-black/40 backdrop-blur-md ${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden`}
      >
        <li>
          <Link
            href='#top'
            className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href='#our-vision'
            className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
          >
            Our Vision
          </Link>
        </li>
        <li>
          <Link
            href='#our-services'
            className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
          >
            Our Services
          </Link>
        </li>
        <li>
          <Link
            href='#more-about-us'
            className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
          >
            More About Us
          </Link>
        </li>
        <li>
          <Link
            href='#our-products'
            className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
          >
            Our Products
          </Link>
        </li>
        <li>
          <Link
            href='#contact-us'
            className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Desktop Menu */}
      <div className='fixed top-2 right-1/2 translate-x-1/2 z-50'>
        <ul className='hidden md:flex gap-2 border-2 border-gray-600/80 dark:border-gray-500 px-4 py-3 rounded-full bg-black/40 backdrop-blur-md'>
          <li>
            <Link
              href='#top'
              className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='#our-vision'
              className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
            >
              Our Vision
            </Link>
          </li>
          <li>
            <Link
              href='#our-services'
              className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              href='#more-about-us'
              className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
            >
              More About Us
            </Link>
          </li>
          <li>
            <Link
              href='#our-products'
              className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
            >
              Our Products
            </Link>
          </li>
          <li>
            <Link
              href='#contact-us'
              className='px-4 py-2 rounded-full bg-gray-300/20 text-white hover:bg-gray-300/30 hover:text-black dark:hover:text-white hover:ring-2 ring-white dark:ring-gray-300/70 transition text-nowrap'
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
