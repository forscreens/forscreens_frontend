import React from 'react';
import Header from '../components/Header';
import CarouselComponent from '../components/CarouselComponent'; 
import PostJob from '../components/PostJob';
import FeaturedJobs from '../components/FeaturedJobs';

const Home = () => {
  console.log('Rendering Home.js');
  return (
    <div>
      <Header />
      <CarouselComponent />
      <PostJob/>
      <FeaturedJobs/>
   
    </div>
  );
}

export default Home;
