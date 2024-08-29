import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

// The App component serves as the main component that brings together various sections of the application.
// It renders the header, main sections, and footer, and also includes a gradient button at the bottom.

const App = () => {
  return (
    <>
      {/* Container for the main sections of the application */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />     {/* Renders the header section */}
        <Hero />       {/* Renders the hero section */}
        <Benefits />   {/* Renders the benefits section */}
        <Collaboration /> {/* Renders the collaboration section */}
        <Services />   {/* Renders the services section */}
        <Pricing />    {/* Renders the pricing section */}
        <Roadmap />    {/* Renders the roadmap section */}
        <Footer />     {/* Renders the footer section */}
      </div>

      {/* Renders a gradient button component */}
      <ButtonGradient />
    </>
  );
};

export default App;
