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
            <div key={productIndex} className='max-sm:w-full'>
              <Image
                src={`/Images/${product.image}`}
                width={200}
                height={200}
                alt={`product image ${productIndex}`}
                className='size-[20rem] object-cover rounded-md hover:scale-[1.02] transition border-[1px] border-gray-300 max-sm:w-full'
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurProducts;
