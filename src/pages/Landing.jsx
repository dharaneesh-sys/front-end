import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Landing({ onGetStarted }) {
  return (
    <>
      <Navbar onGetStarted={onGetStarted} />
      <Hero />
      <Services />
      <Footer />
    </>
  );
}

