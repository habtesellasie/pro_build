import Link from 'next/link';
import { BsTiktok } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const ContactUs = () => {
  return (
    <>
      <section className='w-full mx-auto py-10' id='contact-us'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-12 max-w-[510px] text-center lg:mb-20'>
            <span className='text-primary mb-2 block text-lg font-semibold'>
              Get in touch with us
            </span>
            <h2 className='text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]'>
              Contact Us
            </h2>
            <p className='text-body-color text-base dark:text-dark-6'></p>
          </div>
        </div>

        <div className='flex flex-wrap gap-4 justify-center'>
          <Link
            href='tel:+251911507710'
            className='flex items-center gap-3 hover:scale-[1.005] hover:text-blue-500 transition'
          >
            <FaPhone /> +251911507710
          </Link>
          <Link
            href='tel:+25191424290'
            className='flex items-center gap-3 hover:scale-[1.005] hover:text-blue-500 transition'
          >
            <FaPhone /> +25191424290
          </Link>
          <Link
            target='_blank'
            href='https://www.tiktok.com/@probuildconchemicals?is_from_webapp=1&sender_device=pc'
            className='flex items-center gap-3 hover:scale-[1.005] hover:text-blue-500 transition'
          >
            <BsTiktok size={20} /> @probuildconchemicals
          </Link>
          <Link
            href='mailto:probuildtrading11@gmail.com'
            className='flex items-center gap-3 hover:scale-[1.005] hover:text-blue-500 transition'
          >
            <MdEmail size={20} /> probuildtrading11@gmail.com
          </Link>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
