import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import sliderImg1 from '../../assets/banner-img-1.jpg';
import sliderImg2 from '../../assets/banner-img-2.jpg';
import sliderImg3 from '../../assets/banner-img-3.jpg';

const Banner = () => {
    return (
        <Swiper
        modules={[Navigation]}
        
        spaceBetween={50}
        slidesPerView={1}
        navigation
        
      >
        <SwiperSlide>
          <div className=' relative text-center text-white'>
            <img src={sliderImg1} alt="" className='rounded-xl'/> 
            <div className='absolute top-48 left-72'>
               <h1 className='text-4xl font-bold mb-4'>Your dream home is our priority.</h1>
               <p className='mb-4'>This houes has four bed room and beautiful facilities.</p>
               <button className="btn btn-warning text-white">Explore More</button>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className=' relative text-center text-white'>
            <img src={sliderImg2} alt="" className='rounded-xl'/> 
            <div className='absolute top-48 left-72'>
               <h1 className='text-4xl font-bold mb-4'>Your dream home is our priority.</h1>
               <p className='mb-4'>This houes has four bed room and beautiful facilities.</p>
               <button className="btn btn-warning text-white">Explore More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' relative text-center text-white'>
            <img src={sliderImg3} alt="" className='rounded-xl'/> 
            <div className='absolute top-48 left-72'>
               <h1 className='text-4xl font-bold mb-4'>Your dream home is our priority.</h1>
               <p className='mb-4'>This houes has four bed room and beautiful facilities.</p>
               <button className="btn btn-warning text-white">Explore More</button>
            </div>
          </div>
        </SwiperSlide>
       
       
      </Swiper>
    );
};

export default Banner;