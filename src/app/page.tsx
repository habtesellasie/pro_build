import Image from 'next/image';
import OurServices from './components/OurServices';
import Cores from './components/Cores';

export default function Home() {
  return (
    <>
      <header>
        <nav></nav>
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl lg:text-left text-center'>
              Welcome to Probuld Trading PLC
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl  lg:text-left text-center pt-2 text-pretty'>
              Probuld Trading PLC has established itself as a leading provider
              of construction chemicals and waterproofing solutions in Ethiopia.
              Our commitment to excellence and innovation has enabled us to
              deliver high-quality products and services that meet the diverse
              needs of our clients.
            </p>
            <div className='flex lg:justify-start justify-center'>
              <a
                href='#'
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
              src='/logo-five.jpg'
              alt='hero image'
              width={100}
              height={200}
              className='lg:rounded-[5rem_5rem_5rem_5rem] rounded-lg size-[40rem] max-lg:w-full max-lg:h-[25rem] object-cover object-center transition duration-200 group-hover:scale-110 hover:scale-[1.01]'
            />
          </div>
        </div>
      </header>

      <Cores />
      <OurServices />
      <main className='mx-4'>
        <section className='grid grid-cols-2 gap-2 sm:grid-cols-5 md:gap-4 max-w-7xl mx-auto'>
          <a
            href='#'
            className='group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 md:h-[464px]'
          >
            <Image
              priority
              src='/product-images/image-one.jpg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              Tech
            </span>
          </a>
          <a
            href='#'
            className='group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[464px] md:col-span-2'
          >
            <Image
              priority
              src='/product-images/image-one.jpg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              VR
            </span>
          </a>

          <a
            href='#'
            className='group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[464px] md:col-span-2'
          >
            <Image
              priority
              src='/product-images/image-one.jpg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              Retro
            </span>
          </a>
          <a
            href='#'
            className='group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 md:h-[464px]'
          >
            <Image
              priority
              src='/product-images/image-one.jpg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              Dev
            </span>
          </a>
        </section>
      </main>
    </>
  );
}
