import React from 'react';
import Header from '../../components/header/Header';
import CarouselComponent from '../../components/carousel/CarouselComponent'; 
import PostJob from '../job/PostJob';
import FeaturedJobs from '../job/FeaturedJobs';

const Home = () => {
  try {
    console.log('Rendering Home.js');
    return (
      <div>
        <Header />
        <CarouselComponent />
        <PostJob/>
        <FeaturedJobs/>
      </div>
    );
  } catch (error) {
    console.error('Error in Header component:', error);
    return <div>Error in Home component</div>;
  }
};


export default Home;
