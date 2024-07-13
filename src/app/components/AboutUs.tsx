import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='space-y-10'>
      <div className='flex max-lg:flex-col items-center lg:even:flex-row-reverse gap-4 group justify-center'>
        <div className='flex flex-col justify-center gap-2'>
          <div className='w-full max-w-[600px] relative'>
            <h2 className='text-3xl font-semibold text-gray-900'>
              About Probuild Trading PLC
            </h2>
            <p className='text-md inline-block w-full max-w-[600px] pt-2'>
              Probuild Trading PLC has established itself as a leading provider
              of construction chemicals and waterproofing solutions in Ethiopia.
              Our commitment to excellence and innovation has enabled us to
              deliver high-quality products and services that meet the diverse
              needs of our clients.
            </p>
          </div>
        </div>
        <div className='w-full max-w-[600px]'>
          <Image
            src='/product-images/image-one.jpg'
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
              With a team of experienced professionals, we offer a wide range of
              construction chemicals and waterproofing solutions tailored to
              meet the specific needs of each project. Our expertise ensures
              that our clients receive the best possible advice and support for
              their construction challenges.
            </p>
          </div>
        </div>
        <div className='w-full max-w-[600px]'>
          <Image
            src='/product-images/image-one.jpg'
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
              Our team of dedicated professionals is passionate about delivering
              innovative solutions and exceptional service. We work closely with
              our clients to understand their needs and provide customized
              solutions that help them achieve their construction goals.
            </p>
          </div>
        </div>
        <div className='w-full max-w-[600px]'>
          <Image
            src='/product-images/image-one.jpg'
            alt='our team'
            width={300}
            height={500}
            className='max-w-[600px] w-full h-[400px] rounded-lg object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
