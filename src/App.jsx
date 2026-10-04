import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import ScrollProgress from "./components/ui/ScrollProgress";

import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Sports from "./sections/Sports";
import Facilities from "./sections/Facilities";
import Achievements from "./sections/Achievements";
import Personalities from "./sections/Personalities";
import Testimonials from "./sections/Testimonials";
import VirtualTour from "./sections/VirtualTour";
import Admissions from "./sections/Admissions";

function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Sports />
        <Facilities />
        <Achievements />
        <Personalities />
        <Testimonials />
        <VirtualTour />
        <Admissions />
      </main>

      <Footer />
    </>
  );
}

export default App;
