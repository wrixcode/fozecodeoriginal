import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";


const Page = () => {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <About/>
      <Services/>
     
 <Projects/>

      <Contact/>
    </main>
  );
};

export default Page;
