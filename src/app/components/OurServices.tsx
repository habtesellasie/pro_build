import React from 'react';

const OurServices = () => {
  return (
    <section className='pt-10 pb-10 lg:pt-[120px] lg:pb-[90px]'>
      <div className='container mx-auto'>
        <div className='mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-12 max-w-[510px] text-center lg:mb-20'>
              <span className='text-primary mb-2 block text-lg font-semibold'>
                Our Services
              </span>
              <h2 className='text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]'>
                What We Offer
              </h2>
              <p className='text-body-color text-base dark:text-dark-6'>
                At Probuild Trading PLC, we offer a comprehensive range of
                services to cater to various waterproofing and construction
                needs:
              </p>
            </div>
          </div>
        </div>
        <div className='mx-2 flex flex-wrap items-end'>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-9 rounded-[20px] p-10 shadow-2 shadow-lg md:px-7 xl:px-10'>
              <div className='mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl'>
                <svg
                  viewBox='0 0 512 512'
                  xmlns='http://www.w3.org/2000/svg'
                  // fill='#000000'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    <path
                      // fill='#000000'
                      d='M160 25c-14.5 0-38 3.89-56.7 11.36-9.29 3.73-17.41 8.37-22.69 13.25A29.895 29.895 0 0 0 75.99 55H244c-1.2-1.77-2.6-3.55-4.6-5.39-5.3-4.88-13.4-9.52-22.7-13.25C198 28.89 174.5 25 160 25zM89 73v129.9l71 42.6 71-42.6V73H89zm167 78v18h23v14h-30v18h51.3l29.3 29.4 12.8-12.8-34.7-34.6H297v-14h23v-18h-64zM84.65 221.3L39.12 494.5l17.76 3L74.3 393h171.4l17.4 104.5 17.8-3-45.5-273.2-16.7 10 13.7 81.8-72.4 26.4-72.38-26.3 13.68-81.9-16.65-10zm263.15 22.4s-10.2 49.6 5.2 59.7c9.8 6.4 28.8-2.9 31-15.4 3.8-19.6-36.2-44.3-36.2-44.3zM377 329s-13.4 29.1-5.8 38.5c4.9 5.9 17.4 3.7 20.6-3.6C397 352.3 377 329 377 329zm-292.41 2.3l48.91 17.8-55.22 20.1 6.31-37.9zm150.81 0l6.3 37.9-55.2-20.1 48.9-17.8zm179 7.5s1.4 32.1 12.4 36.9c7.2 3 17.2-4.7 16.8-12.7-.8-12.6-29.2-24.2-29.2-24.2zM160 358.7l44.8 16.3h-89.6l44.8-16.3zm251.7 40.5s-3.4 21.5 3.4 26.2c4.3 2.9 12.1-1 12.8-6.3 1.3-8.6-16.2-19.9-16.2-19.9z'
                    ></path>
                  </g>
                </svg>
              </div>
              <span className='text-primary mb-2 block text-md font-semibold'>
                Supply & Installation of Cementitious Waterproofing Material
              </span>
              <h4 className='text-dark mb-[14px] text-2xl font-semibold'>
                Outdoor Water Tanker Placing Slabs and Other Outdoor Areas
              </h4>
              <p className='text-body-color dark:text-dark-6'>
                Our crystallizing waterproofing materials are ideal for outdoor
                applications, including water tanker placing slabs and other
                exposed areas. These materials penetrate the concrete, creating
                a permanent waterproof barrier that withstands harsh weather
                conditions.
              </p>
              <p className='mt-2'>
                <span className='font-bold'>Benefits: </span>Durable,
                cost-effective, and suitable for high-moisture environments.
              </p>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-9 rounded-[20px] p-10 shadow-2 shadow-lg md:px-7 xl:px-10'>
              <div className='dark:border-2 dark:border-white mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl'>
                <svg
                  fill='#000000'
                  viewBox='0 0 64 64'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {' '}
                    <g id='a'></g>{' '}
                    <g id='b'>
                      {' '}
                      <path d='M46.5869,13.3867c-1.5309-2.4371-4.054-2.3994-4.2942-2.3867H19.5c-.1895,0-.3623,.1074-.4473,.2764-5.9639,11.9277-10.9951,40.8477-11.0454,41.1387-.0249,.1455,.0151,.2939,.1104,.4072,.0947,.1123,.2349,.1777,.3823,.1777h9.3262c.1836,0,.3525-.1006,.4399-.2627l1.5542-2.8789h14.2441l2.001,2.9238c.0938,.1367,.248,.2178,.4131,.2178h7.5c.1338,0,.2617-.0537,.3555-.1484s.1465-.2236,.1445-.3574l-.0314-2.6074h2.1534l1.5693,2.8545c.0879,.1592,.2559,.2588,.4385,.2588h6.8477c.1514,0,.2939-.0684,.3887-.1855,.0947-.1182,.1318-.2715,.1006-.4199-.8066-3.751-7.9189-36.7178-9.3584-39.0078Zm-9.8447,38.6133l-2.001-2.9238c-.0938-.1367-.248-.2178-.4131-.2178h-14.8062c-.1836,0-.3525,.1006-.4399,.2627l-1.5542,2.8789H9.0962c.7407-4.1318,5.3428-28.9932,10.7144-40h22.3789c.793,.3818,.832,.9326,.832,2.5059l.4512,37.4941h-6.7305Zm-8.8237-25.9219c-.0908-.1494-.2529-.2412-.4277-.2412s-.3369,.0918-.4277,.2412l-11,18.1631c-.0933,.1543-.0967,.3467-.0078,.5039,.0884,.1572,.2549,.2549,.4355,.2549h21.9995c.1807,0,.3467-.0977,.4355-.2549s.0859-.3496-.0078-.5039l-10.9995-18.1631Zm.0815,15.4219c0,.2764-.2236,.5-.5,.5s-.5-.2236-.5-.5v-1c0-.2764,.2236-.5,.5-.5s.5,.2236,.5,.5v1Zm0-3c0,.2764-.2236,.5-.5,.5s-.5-.2236-.5-.5v-6c0-.2764,.2236-.5,.5-.5s.5,.2236,.5,.5v6Zm11-21c0,.2764-.2236,.5-.5,.5H22.5c-.2764,0-.5-.2236-.5-.5s.2236-.5,.5-.5h16c.2764,0,.5,.2236,.5,.5Z'></path>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </div>
              <span className='text-primary mb-2 block text-md font-semibold'>
                Supply & Installation of Crystallizing Waterproofing Material
              </span>
              <h4 className='text-dark mb-[14px] text-2xl font-semibold'>
                Indoor Toilets and Wet Areas
              </h4>
              <p className='text-body-color dark:text-dark-6'>
                We provide high-quality cementitious waterproofing materials
                designed specifically for indoor toilets and wet areas. Our
                expert team ensures seamless installation, guaranteeing
                long-lasting protection against water damage.
              </p>
              <p className='mt-2'>
                <span className='font-bold'>Benefits: </span>Long-lasting
                protection, enhances structural integrity, and resists
                environmental damage.
              </p>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-9 rounded-[20px] p-10 shadow-2 shadow-lg md:px-7 xl:px-10'>
              <div className='dark:border-2 dark:border-white mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {' '}
                    <g id='Menu / More_Horizontal'>
                      {' '}
                      <g id='Vector'>
                        {' '}
                        <path
                          d='M17 12C17 12.5523 17.4477 13 18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12Z'
                          stroke='#000000'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>{' '}
                        <path
                          d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                          stroke='#000000'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>{' '}
                        <path
                          d='M5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12Z'
                          stroke='#000000'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </div>
              <h4 className='text-dark mb-[14px] text-2xl font-semibold'>
                And Many More
              </h4>
              <p className='text-body-color dark:text-dark-6'></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
