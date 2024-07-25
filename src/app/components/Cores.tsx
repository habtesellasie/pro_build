const Cores = () => {
  return (
    <section className='bg-gray-100 py-16' id='our-vision'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='pb-10'>
          <span className='text-center text-primary mb-2 block text-lg font-semibold'>
            Company details
          </span>
          <h2 className='text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px] text-center'>
            Our Vision
          </h2>
          <p className='text-body-color text-base dark:text-dark-6 max-w-[510px] mx-auto text-center'>
            Be the most trusted and preferred partner for construction chemicals
            and waterproofing solutions in Ethiopia, known for our reliability,
            innovation, and commitment to quality.
          </p>
        </div>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-end'>
          <div className='shadow-2 shadow-lg px-4 py-4 rounded-lg'>
            <div className='flex items-center justify-center h-12 w-12 rounded-md bg-black text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'
                />
              </svg>
            </div>
            <div className='mt-5'>
              <h3 className='text-lg font-medium text-gray-900'>Mission</h3>
              <p className='mt-2 text-base text-gray-500'>
                Provide superior construction chemicals and waterproofing
                solutions that enhance the durability and integrity of
                structures, while delivering exceptional customer service and
                support.
              </p>
            </div>
          </div>
          <div className='shadow-2 shadow-lg px-4 py-4 rounded-lg'>
            <div className='flex items-center justify-center h-12 w-12 rounded-md bg-black text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </div>
            <div className='mt-5'>
              <h3 className='text-lg font-medium text-gray-900'>Vision</h3>
              <p className='mt-2 text-base text-gray-500'>
                Provide superior construction chemicals and waterproofing
                solutions that enhance the durability and integrity of
                structures, ensuring long-lasting performance and protection.
                Our products are designed to meet the highest standards of
                quality and reliability, giving you peace of mind.
              </p>
            </div>
          </div>
          <div className='shadow-2 shadow-lg px-4 py-2 rounded-lg'>
            <div className='flex items-center justify-center h-12 w-12 rounded-md bg-black text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                />
              </svg>
            </div>
            <div className='mt-5'>
              <h3 className='text-lg font-medium text-gray-900'>Values</h3>
              <p className='mt-2 text-base text-gray-500'>
                <span className='block'>
                  <strong>Quality: </strong>
                  We prioritize the highest standards in all our products and
                  services.
                </span>
                <span className='block py-2'>
                  <strong>Integrity: </strong>
                  We conduct our business with honesty and transparency.
                  Innovation: We continuously seek new and improved solutions to
                  meet our client needs.
                </span>
                <span className='block py-2'>
                  <strong>Customer Focus: </strong>
                  We are dedicated to understanding and fulfilling our client
                  requirements.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cores;
