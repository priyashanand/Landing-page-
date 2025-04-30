import backgroundImage from "/assets/background.png";

import Header from "./components/Header";
import Hero from "./components/Description";
import Dashboard from "./components/Sample";
import FeaturesDash from "./components/DescriptionFeatures";
import FeaturesV2Dash from "./components/DesriptionFeaturesV2";
import Pricing from "./components/PricingSection";
import Features from "./components/Features";
import Tabs from "./components/Tabs";
import FeaturesV2 from "./components/FeaturesV2";
import FAQSection from "./components/FAQSection";
import ContactUsSection from "./components/ContactUsSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative w-full">
      {/* Background image behind top content */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute top-0 left-0  md:w-full md:h-auto object-cover -z-10"
      />

      {/* Main content */}
      <div className="relative z-0">
        <Header />
        <Hero />
        <Dashboard />
        <FeaturesDash />
        <Features />
        <Tabs />
        <FeaturesV2Dash />
        <FeaturesV2 />
        <Pricing />
        <FAQSection />
        <ContactUsSection />
        <CallToActionSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
