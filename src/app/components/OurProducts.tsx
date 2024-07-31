import Image from 'next/image';
import React from 'react';
import { products } from '../../../config/site';

const OurProducts = () => {
  return (
    <section className='w-full mx-auto pt-32 pb-16' id='our-products'>
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

      <div className='flex flex-wrap justify-center gap-4 mx-auto'>
        {products.map((product, productIndex) => {
          return (
            <div key={productIndex} className='flex flex-col items-center'>
              <div className='max-sm:w-full relative hover:scale-[1.02]'>
                <Image
                  src={`/${product.image}`}
                  width={200}
                  height={200}
                  alt={`product image ${productIndex}`}
                  className='size-[25rem] object-cover rounded-md transition border-[1px] border-gray-300 max-sm:w-full'
                />
                <div className='w-full flex flex-col items-center justify-center'>
                  {product?.name && (
                    <span className='bottom-0 text-white p-2 text-sm text-center left-1/2  bg-black/60 backdrop-blur-sm'>
                      {product?.name}
                    </span>
                  )}
                  {product?.name && (
                    <p className='w-full max-w-lg py-2 text-sm text-center shadow inline-block p-12'>
                      {product?.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurProducts;
