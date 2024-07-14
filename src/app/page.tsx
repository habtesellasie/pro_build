import Image from 'next/image';
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
      <header>
        <NavBar />
        <div
          className='grid max-w-screen-xl px-4 py-8 mx-auto gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'
          id='top'
        >
          <div className='place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl lg:text-left text-center'>
              Welcome to Probuild Trading PLC
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl  lg:text-left text-center pt-2 text-pretty'>
              Probuild Trading PLC has established itself as a leading provider
              of construction chemicals and waterproofing solutions in Ethiopia.
              Our commitment to excellence and innovation has enabled us to
              deliver high-quality products and services that meet the diverse
              needs of our clients.
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
                href='tel:0974319143'
                className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 '
              >
                Speak to Sales
              </a>
            </div>
          </div>
          <div className='lg:mt-0 lg:col-span-5'>
            <Image
              priority
              src='/pro-build-hero-img.png'
              alt='hero image'
              width={200}
              height={200}
              className='mx-auto rounded-full size-[40rem] max-lg:w-[25rem] max-lg:h-[25rem] object-cover object-center transition duration-200 group-hover:scale-110 hover:scale-[1.01]'
            />
          </div>
        </div>
      </header>

      <main>
        <Cores />
        <OurServices />
        <div className='mx-4'>
          <AboutUs />
          <OurProducts />
          <ContactUs />
        </div>
      </main>

      <footer className='container border-t-gray-500 border-t-[1px] mt-4 w-full py-4 mx-auto'>
        <div className='flex container justify-between'>
          <span>
            &copy;
            <span className='text-[15px]'>{new Date().getFullYear()}</span>{' '}
            Allright reserved
          </span>
          <Link
            href='#top'
            className='bg-gray-400 hover:bg-gray-600 text-white flex items-center justify-center py-2 px-2 rounded'
          >
            <FaArrowUp />
          </Link>
        </div>
      </footer>
    </>
  );
}
