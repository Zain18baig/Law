import AboutAndServices from "./components/AboutAndServices";
import BlogSection from "./components/Blog";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MeetOurTeam from "./components/MeetOurteam";
import { Navbar } from "./components/Navbar";
import WhyChooseUs from "./components/WhyChoose";

function App() {
  return (
    <>
      <Navbar />
      <Home id="Home" />
      <AboutAndServices id="about-and-services" />
      <BlogSection id="blog-section" />
      <WhyChooseUs id="why-choose-us" />
      <MeetOurTeam id="meetourteam" />
      <Footer />
    </>
  );
}

export default App;
