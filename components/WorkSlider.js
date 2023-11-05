// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/todo-list image1.png',
          link: 'https://musical-pavlova-50cf08.netlify.app/',
        },
        {
          title: 'title',
          path: '/todo-list image2.png',
          link: 'https://musical-pavlova-50cf08.netlify.app/',
        },
        {
          title: 'title',
          path: '/todo-list imag3.png',
          link: 'https://musical-pavlova-50cf08.netlify.app/',
        },
        {
          title: 'title',
          path: '/todo-list imag4.png',
          link: 'https://musical-pavlova-50cf08.netlify.app/',
        },

      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/quiz-app image 1.png',
          link: 'https://musical-meerkat-a32c16.netlify.app/',
        },
        {
          title: 'title',
          path: '/quiz-app image 2.png',
          link: 'https://musical-meerkat-a32c16.netlify.app/',
        },
        {
          title: 'title',
          path: '/quiz-app image 3.png',
          link: 'https://musical-meerkat-a32c16.netlify.app/',
        },
        {
          title: 'title',
          path: '/quiz-app image 4.png',
          link: 'https://musical-meerkat-a32c16.netlify.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/weather-app image 1.png',
          link: 'https://serene-eclair-fb204e.netlify.app/',
        },
        {
          title: 'title',
          path: '/weather-app image 2.png',
          link: 'https://serene-eclair-fb204e.netlify.app/',
        },
        {
          title: 'title',
          path: '/weather-app image 3.png',
          link: 'https://serene-eclair-fb204e.netlify.app/',
        },
        {
          title: 'title',
          path: '/weather-app image 4.png',
          link: 'https://serene-eclair-fb204e.netlify.app/',
        },
      ],
    },
  ],
};


//import swiper reaact components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required mocules
import { Pagination } from 'swiper';

//icons
import { BsArrowRight } from 'react-icons/bs'

//next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => {
              return (
                <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                  <div className='flex items-center justify-center relative overflow-hidden group'>
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt='' />
                    {/* overlay gradient */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] opacity-0 group-hover:opacity-80 transition-all duration-700' onClick={() => { window.open(image.link, '_blank') }}
                      target='_blank'>
                    </div>
                    {/* title */}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        {/* title part 1 */}
                        <div className='delay-100' >LIVE</div>
                        {/* title part 2 */}
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                          PROJECT
                        </div>
                        {/* icon */}
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default WorkSlider;

