import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AddStartForm from '../features/AddStartForm';
function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      < AddStartForm/> 
      <Footer />
    </>
  );
}

export default Home;
