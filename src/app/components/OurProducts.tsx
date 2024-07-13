import Image from 'next/image';
import React from 'react';

const OurProducts = () => {
  return (
    <section className='w-full mx-auto py-10'>
      <div className='w-full px-4'>
        <div className='mx-auto mb-12 max-w-[510px] text-center lg:mb-20'>
          <span className='text-primary mb-2 block text-lg font-semibold'>
            What Products we have
          </span>
          <h2 className='text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]'>
            Our Products
          </h2>
          <p className='text-body-color text-base dark:text-dark-6'>
            We offer a wide range of products designed to meet the diverse needs
            of the construction industry.
          </p>
        </div>
      </div>
      <section className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-5 md:gap-4'>
          <a
            href='#'
            className='group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 md:h-[464px]'
          >
            <Image
              priority
              src='/logo-one.jpg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <span className='relative px-2 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              Bonding
              <p className='text-sm max-w-[500px] pt-2'>
                High-performance bonding materials for various construction
                applications, ensuring strong adhesion and durability. Suitable
                for bonding concrete, masonry, and other construction materials.
              </p>
            </span>
          </a>
          <a
            href='#'
            className='group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[464px] md:col-span-2'
          >
            <Image
              priority
              src='/logo-two.jpg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <span className='relative px-2 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              Aquamats
              <p className='text-sm max-w-[400px] pt-2'>
                Advanced aquamats designed to provide superior waterproofing and
                protection in both indoor and outdoor environments. Ideal for
                foundation waterproofing, retaining walls, and below-grade
                structures.
              </p>
            </span>
          </a>

          <a
            href='#'
            className='group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[464px] md:col-span-2'
          >
            <Image
              priority
              src='/logo-three.jpg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <span className='relative px-2 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              Cementitious
              <p className='text-sm max-w-[400px] pt-2'>
                Reliable cementitious products for waterproofing and structural
                integrity, suitable for a wide range of applications. Suitable
                for basements, water tanks, and other high-moisture areas.
              </p>
            </span>
          </a>
          <a
            href='#'
            className='group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 md:h-[464px]'
          >
            <Image
              priority
              src='/logo-four.jpg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <span className='relative px-2 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              Acrylic
              <p className='text-sm max-w-[500px] pt-2'>
                Versatile acrylic products offering excellent waterproofing and
                UV resistance for enhanced durability. Ideal for roof coatings,
                external walls, and other exposed surfaces.
              </p>
            </span>
          </a>
        </div>

        <a
          href='#'
          className='group mt-4 relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 md:h-[464px]'
        >
          <Image
            priority
            src='/logo-four.jpg'
            alt='image one'
            width={100}
            height={200}
            className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
          />

          <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

          <span className='relative px-2 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
            UV Resistance for All Products
            <p className='text-sm max-w-[500px] pt-2'>
              All our products are formulated to resist UV radiation, ensuring
              long-term performance and protection in outdoor applications.
              Which prolongs the lifespan of materials
            </p>
          </span>
        </a>
      </section>
    </section>
  );
};

export default OurProducts;
