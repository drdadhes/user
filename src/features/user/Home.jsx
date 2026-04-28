import React from "react";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Marquee from "./components/Marquee";
import AnimatedTestimonials from "./components/AnimatedTestimonials";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Treatments from "./components/Treatements";
import Philosophy from "./components/Philosophy";
import Timeline from "./components/Timeline";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Treatments />
      {/* <Carousel /> */}
      <Marquee />
      <Timeline/>
      <AnimatedTestimonials />
      <Philosophy/>
      <Contact />
    </>
  );
};

export default Home;
