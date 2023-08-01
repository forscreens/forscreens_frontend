import React from 'react';
import Header from '../components/Header';
import CarouselComponent from '../components/CarouselComponent'; 
import PostJob from '../components/PostJob';
import FeaturedJobs from '../components/FeaturedJobs';

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