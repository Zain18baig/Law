import { Helmet, HelmetProvider } from "react-helmet-async";
import AboutAndServices from "./components/AboutAndServices";
import BlogSection from "./components/Blog";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import { MeetOurTeam } from "./components/Team";
import WhyChooseUs from "./components/WhyChoose";

function App() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          {/* Primary Meta Tags */}
          <title>Law Firm - Expert Legal Solutions</title>
          <meta
            name="description"
            content="Get expert legal advice from our top-rated law firm. Specialized in family, corporate, and criminal law."
          />
          <meta
            name="keywords"
            content="law firm, legal services, attorney, lawyer, legal advice"
          />
          <meta name="author" content="Hameed Law Associates" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph Meta Tags (for Facebook & LinkedIn) */}
          <meta
            property="og:title"
            content="Law Firm - Expert Legal Solutions"
          />
          <meta
            property="og:description"
            content="Providing expert legal advice and representation."
          />
          <meta
            property="og:image"
            content="https://hameedlawassociates.com/og-image.jpg"
          />
          <meta property="og:url" content="https://hameedlawassociates.com/" />
          <meta property="og:type" content="website" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Law Firm - Expert Legal Solutions"
          />
          <meta
            name="twitter:description"
            content="Providing expert legal advice and representation."
          />
          <meta
            name="twitter:image"
            content="https://hameedlawassociates.com/twitter-image.jpg"
          />

          {/* Canonical URL */}
          <link rel="canonical" href="https://hameedlawassociates.com/" />
        </Helmet>

        <Navbar />
        <Home id="Home" />
        <AboutAndServices id="about-and-services" />
        <BlogSection id="blog-section" />
        <WhyChooseUs id="why-choose-us" />
        <MeetOurTeam />
        <Footer />
      </>
    </HelmetProvider>
  );
}

export default App;
