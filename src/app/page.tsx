'use client';

import OurServices from './components/OurServices';
import Cores from './components/Cores';
import AboutUs from './components/AboutUs';
import OurProducts from './components/OurProducts';
import Link from 'next/link';
import ContactUs from './components/ContactUs';
import { FaArrowUp } from 'react-icons/fa6';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <>
      <header
        className={`lg:h-[100dvh] md:h-[80dvh] min-h-[50dvh] bg-cover bg-center bg-[url('/bg-one.jpeg')]`}
        // className={`lg:h-[100dvh] md:h-[80dvh] min-h-[50dvh]  bg-cover bg-center bg-[url('/bg-two.jpg')]`}
      >
        <div className='flex h-full lg:bg-gradient-to-r bg-gradient-to-b from-white/90 via-white/70 to-transparent'>
          <NavBar />
          <div
            className='grid max-w-screen-xl px-4 py-8 mx-auto gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'
            id='top'
          >
            <div className='place-self-center lg:col-span-7'>
              <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl lg:text-left text-center'>
                Welcome to Probuild Trading PLC
              </h1>
              <p className='max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl  lg:text-left text-center pt-2 text-pretty'>
                Probuild Trading PLC has established itself as a leading
                provider of construction chemicals and waterproofing solutions
                in Ethiopia. Our commitment to excellence and innovation has
                enabled us to deliver high-quality products and services that
                meet the diverse needs of clients.
              </p>
              <div className='flex lg:justify-start justify-center'>
                <a
                  href='#our-products'
                  className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg 700 bg-black hover:bg-gray-300 hover:text-black transition focus:ring-4 focus:ring-primary-300'
                >
                  Our Products
                  <svg
                    className='w-5 h-5 ml-2 -mr-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </a>
                <a
                  href='tel:0911507710'
                  className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 '
                >
                  Speak to Sales
                </a>
              </div>
            </div>
            <div className='lg:mt-0 lg:col-span-5'>
              {/* <Image
              priority
              src='/pro-build-hero-img.png'
              alt='hero image'
              width={200}
              height={200}
              className='mx-auto rounded-full size-[40rem] max-lg:w-[25rem] max-lg:h-[25rem] object-cover object-center transition duration-200 group-hover:scale-110 hover:scale-[1.01]'
            /> */}
            </div>
          </div>
        </div>
      </header>

      <main>
        <Cores />
        <OurServices />
        <div className='mx-4'>
          <div className='mx-4 flex flex-wrap'>
            <div className='w-full px-4' id='more-about-us'>
              <div className='mx-auto mb-12 max-w-[510px] text-center lg:mb-20'>
                <span className='text-primary mb-2 block text-lg font-semibold'>
                  Who We Are
                </span>
                <h2 className='text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]'>
                  More About Us
                </h2>
                <p className='text-body-color text-base dark:text-dark-6'>
                  We are dedicated to providing top-notch construction chemicals
                  and waterproofing solutions. Our commitment to quality and
                  innovation has made us a trusted name in the industry.
                </p>
              </div>
            </div>
          </div>
          <AboutUs />
          <OurProducts />
          <ContactUs />
        </div>
      </main>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1240.405107967694!2d38.77381526962171!3d9.01228932398923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnNDQuMiJOIDM4wrA0NicyOC4xIkU!5e1!3m2!1sen!2set!4v1721281665337!5m2!1sen!2set'
        width='100%'
        height='550'
        style={{ border: 0 }}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>

      <footer
        className={`w-full py-10 sm:px-0 mt-12 px-4 h-[65dvh] bg-cover bg-center bg-[url('/bg-footer.avif')] bg-fixed`}
      >
        <div className='container mx-auto flex flex-col h-full'>
          <div className='mx-4'>
            <h3 className='text-2xl font-bold'>Office hours</h3>
            <p className='text-white text-lg'>
              Monday to Saturday 8:30 am to 6:00 pm
            </p>

            <div className='pt-8'>
              <p className='font-bold'>Quick links</p>

              <ul className='flex flex-col gap-4 mt-4'>
                <li>
                  <Link
                    href='#top'
                    className='px-4 py-2 rounded-full bg-white hover:ring-2 ring-white hover:bg-gray-200 transition'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='#our-vision'
                    className='px-4 py-2 rounded-full bg-white hover:ring-2 ring-white hover:bg-gray-200 transition'
                  >
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link
                    href='#our-services'
                    className='px-4 py-2 rounded-full bg-white hover:ring-2 ring-white hover:bg-gray-200 transition'
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href='#more-about-us'
                    className='px-4 py-2 rounded-full bg-white hover:ring-2 ring-white hover:bg-gray-200 transition'
                  >
                    More About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='#our-products'
                    className='px-4 py-2 rounded-full bg-white hover:ring-2 ring-white hover:bg-gray-200 transition'
                  >
                    Our Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex container justify-between items-center rounded-full mt-auto py-2 sm:px-6 px-2 sm:mx-0 bg-gray-100'>
            <span className='sm:px-0 px-2'>
              &copy;
              <span className='text-[15px]'>
                {new Date().getFullYear()}
              </span>{' '}
              Allright reserved
            </span>
            <Link
              href='#top'
              className='transition bg-gray-400 hover:bg-gray-600 text-white flex items-center justify-center py-2 px-2 rounded-full'
            >
              <FaArrowUp />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
