import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <div className='space-y-10 py-4'>
        <div className='flex max-lg:flex-col items-center lg:even:flex-row-reverse gap-4 group justify-center'>
          <div className='flex flex-col justify-center gap-2'>
            <div className='w-full max-w-[600px] relative'>
              <h2 className='text-3xl font-semibold text-gray-900'>
                About Probuild Trading PLC
              </h2>
              <p className='text-md inline-block w-full max-w-[600px] pt-2'>
                Probuild Trading PLC has established itself as a leading
                provider of construction chemicals and waterproofing solutions
                in Ethiopia. Our commitment to excellence and innovation has
                enabled us to deliver high-quality products and services that
                meet the diverse needs of our clients.
              </p>
            </div>
          </div>
          <div className='w-full max-w-[600px]'>
            <Image
              src='/bg-two.jpg'
              alt='what we do'
              width={200}
              height={400}
              className='max-w-[600px] w-full h-[400px] rounded-lg object-cover'
            />
          </div>
        </div>

        <div className='flex max-lg:flex-col items-center lg:even:flex-row-reverse gap-4 group justify-center'>
          <div className='flex flex-col justify-center gap-2'>
            <div className='w-full max-w-[600px] relative'>
              <h2 className='text-3xl font-semibold text-gray-900'>
                Our Expertise
              </h2>
              <p className='text-md inline-block w-full max-w-[600px] pt-2'>
                With a team of experienced professionals, we offer a wide range
                of construction chemicals and waterproofing solutions tailored
                to meet the specific needs of each project. Our expertise
                ensures that our clients receive the best possible advice and
                support for their construction challenges.
              </p>
            </div>
          </div>
          <div className='w-full max-w-[600px]'>
            <Image
              src='/Images/expertise.jpeg'
              alt='our expertise'
              width={200}
              height={400}
              className='max-w-[600px] w-full h-[400px] rounded-lg object-cover'
            />
          </div>
        </div>
        <div className='flex max-lg:flex-col items-center lg:even:flex-row-reverse gap-4 group justify-center'>
          <div className='flex flex-col justify-center gap-2'>
            <div className='w-full max-w-[600px] relative'>
              <h2 className='text-3xl font-semibold text-gray-900'>
                Meet Our Team
              </h2>
              <p className='text-md inline-block w-full max-w-[600px] pt-2'>
                Our team of dedicated professionals is passionate about
                delivering innovative solutions and exceptional service. We work
                closely with our clients to understand their needs and provide
                customized solutions that help them achieve their construction
                goals.
              </p>
            </div>
          </div>
          <div className='w-full max-w-[600px]'>
            <Image
              src='/Images/pro-build-trading.jpeg'
              alt='our team'
              width={300}
              height={500}
              className='max-w-[600px] w-full h-[400px] rounded-lg object-cover'
            />
          </div>
        </div>
      </div>
      <section className='max-w-7xl mx-auto mt-10'>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-5 md:gap-4'>
          <a
            href='#'
            className='group relative flex h-[22rem] items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 md:h-[464px] border-[1px] border-gray-300'
          >
            <Image
              priority
              src='/Images/bonding.jpeg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 max-md:h-[22rem]'
            />

            {/* <div className='pointer-events-none absolute bottom-0 left-1/2 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-50'></div> */}

            <span className='relative px-2 m-2 inline-block text-sm text-white md:text-lg p-2 bg-black/60 backdrop-blur-md border-gray-300 rounded-md border-2'>
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
            className='group relative flex h-[22rem] items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[464px] md:col-span-2'
          >
            <Image
              priority
              src='/Images/Aquamat.jpeg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 max-md:h-[22rem]'
            />

            {/* <div className='pointer-events-none absolute bottom-0 left-1/2 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-50'></div> */}

            <span className='relative px-2 m-2 inline-block text-sm text-white md:text-lg p-2 bg-black/60 backdrop-blur-md border-gray-300 rounded-md border-2'>
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
            className='group relative flex h-[22rem] items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[464px] md:col-span-2'
          >
            <Image
              priority
              src='/Images/cementitious.jpeg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 max-md:h-[22rem]'
            />

            {/* <div className='pointer-events-none absolute bottom-0 left-1/2 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-50'></div> */}

            <span className='relative px-2 m-2 inline-block text-sm text-white md:text-lg p-2 bg-black/60 backdrop-blur-md border-gray-300 rounded-md border-2'>
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
            className='group relative flex h-[22rem] items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 md:h-[464px] border-[1px] border-gray-300'
          >
            <Image
              priority
              src='/Images/acrylic.jpeg'
              alt='image one'
              width={100}
              height={200}
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 max-md:h-[22rem]'
            />

            {/* <div className='pointer-events-none absolute bottom-0 left-1/2 translate-x-1/2 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-200 opacity-50'></div> */}

            <span className='relative m-2 inline-block text-sm text-white md:text-lg p-2 bg-gray-900 border-[1px] border-gray-300 rounded'>
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
          className='border-[1px] border-gray-300 group mt-4 relative flex h-[22rem] items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 md:h-[464px]'
        >
          <Image
            priority
            src='/Images/all-products.jpeg'
            alt='image one'
            width={100}
            height={200}
            className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
          />

          {/* <div className='pointer-events-none absolute bottom-0 left-1/2 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-50'></div> */}

          <span className='relative px-2 m-2 inline-block text-sm text-white md:text-lg p-2 bg-black/60 backdrop-blur-md border-gray-300 rounded-md border-2'>
            UV Resistance for All Products
            <p className='text-sm max-w-[500px] pt-2'>
              All our products are formulated to resist UV radiation, ensuring
              long-term performance and protection in outdoor applications.
              Which prolongs the lifespan of materials
            </p>
          </span>
        </a>
      </section>
    </>
  );
};

export default AboutUs;
