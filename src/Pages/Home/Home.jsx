import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
    return (
        <section>
            <div className='mt-6 d-flex'>
         <div className='w-25 m-auto p-auto'>
           <h3 className='text-gray' style={{margin: '40px'}}>I’m Jenn Segal</h3>
           <p className='text-gray'style={{margin: '40px'}}>Once upon a time, I was a chef – tall hat, white coat, checked pants, the works!  I left the restaurant business in 2003 when my first child was born. Now, I’m cooking for my family and sharing all my tested and perfected recipes with you here. The recipes on this site reflect what my life is about; as a mom, I need easy meals the whole family will enjoy but the chef in me needs to eat too!</p>
           <button className='btn btn-warning' style={{margin: '40px'}}>Book now</button>
         </div>
         <div className='w-75 m-auto p-auto'>
         <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* <SwiperSlide><img src="https://img.freepik.com/free-photo/male-cook-standing-kitchen-presenting-delicious-dish_23-2147863798.jpg?size=626&ext=jpg&ga=GA1.1.1735352543.1673870524&semt=sph" style={{height: '350px'}} alt="" /></SwiperSlide> */}
      <SwiperSlide><img src="https://img.freepik.com/free-photo/shot-professional-old-chef-dressed-uniform-holding-kitchen-spatula-tongs_613910-17564.jpg?size=626&ext=jpg&ga=GA1.2.1735352543.1673870524&semt=sph" style={{height: '350px'}} alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://img.freepik.com/premium-photo/portrait-smiling-male-chef-standing-kitchen_23-2147863765.jpg?size=626&ext=jpg&ga=GA1.2.1735352543.1673870524&semt=sph" style={{height: '350px',marginRight: '20px'}} alt=""/></SwiperSlide>
      <SwiperSlide><img src="https://img.freepik.com/free-photo/chef-with-thumb-up-white-background_1368-2842.jpg?size=626&ext=jpg&ga=GA1.2.1735352543.1673870524&semt=sph" style={{height: '350px'}} alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://img.freepik.com/free-photo/male-cook-standing-kitchen-presenting-delicious-dish_23-2147863798.jpg?size=626&ext=jpg&ga=GA1.1.1735352543.1673870524&semt=sph" style={{height: '350px'}} alt="" /></SwiperSlide>
      ...
    </Swiper>
        </div>
        </div>

        </section>
    );
};

export default Home;