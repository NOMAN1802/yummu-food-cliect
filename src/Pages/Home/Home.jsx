import React, { useEffect, useState } from 'react';
import './Home.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/chefData')
      .then(response => response.json())
      .then(data => {
        // Process the fetched data here
        setChefData(data);
      })
      .catch(error => {
        // Handle any errors during the fetch request
        console.log('Error:', error);
      });

  }, [])
  
  // console.log(chefData);
  const handleDetails = (id)=>{
    console.log('Clicked chef id:', id);
  }
  return (
   <div className='container'>
     <section>
      <div className='row mt-6'>

        <div className='col-12 col-md-4 col-lg-4'>
          <h3 className='text-gray' style={{ margin: '40px' }}>I’m Jenn Segal</h3>
          <p className='text-gray' style={{ margin: '40px' }}>Once upon a time, I was a chef – tall hat, white coat, checked pants, the works!  I left the restaurant business in 2003 when my first child was born. Now, I’m cooking for my family and sharing all my tested and perfected recipes with you here. The recipes on this site reflect what my life is about; as a mom, I need easy meals the whole family will enjoy but the chef in me needs to eat too!</p>
          <button className='btn btn-warning' style={{ margin: '40px' }}>Are You Hungry!!!</button>
        </div>
        <div className='col-12 col-md-4 col-lg-8'>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                425: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >

            <SwiperSlide><img src="https://img.freepik.com/free-photo/shot-professional-old-chef-dressed-uniform-holding-kitchen-spatula-tongs_613910-17564.jpg?size=626&ext=jpg&ga=GA1.2.1735352543.1673870524&semt=sph" style={{ height: '350px' }} alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://img.freepik.com/premium-photo/portrait-smiling-male-chef-standing-kitchen_23-2147863765.jpg?size=626&ext=jpg&ga=GA1.2.1735352543.1673870524&semt=sph" style={{ height: '350px', marginRight: '20px' }} alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://img.freepik.com/free-photo/chef-with-thumb-up-white-background_1368-2842.jpg?size=626&ext=jpg&ga=GA1.2.1735352543.1673870524&semt=sph" style={{ height: '350px' }} alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://img.freepik.com/free-photo/male-cook-standing-kitchen-presenting-delicious-dish_23-2147863798.jpg?size=626&ext=jpg&ga=GA1.1.1735352543.1673870524&semt=sph" style={{ height: '350px' }} alt="" /></SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>

      <div>
        <h3 className='fw-bolder text-center'>Top <span className='text-secondary'>American</span> <span className='text-primary'>Chefs</span></h3>
        <div className='container'>
        <div className='row'>
  {chefData?.map(cd => { console.log(cd.id)
    return (
      <div className='col-sm-12 col-md-4 col-lg-4 py-4' key={cd.id} >
        <Card>
          <Card.Img variant="top" className='card_img' src={cd.chef_picture} />
          <Card.Body>
            <Card.Title>{cd?.chef_name}</Card.Title>
            <Card.Text>
              <p className='text-secondary'>Experience: {cd.years_of_experience} Years</p>
              <p className='text-secondary'>Number of recipes: {cd.number_of_recipes}</p>
              <p className='text-secondary'>Likes: {cd.likes}</p>
            </Card.Text>
            <Link to={`/chefData/${cd.id}`}>
              <Button onClick={() => handleDetails(cd.id)} className='btn-secondary' variant="secondary">
                View Recipes
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  })}
</div>

        
         
         
        </div>

      </div>

    </section>
   </div>
  );
};

export default Home;