import Header from "./components/Header";
import Hero from "./components/Description";
import Dashboard from "./components/Sample";
import FeaturesDash from "./components/DescriptionFeatures"
import FeaturesV2Dash from "./components/DesriptionFeaturesV2"
import Pricing from "./components/PricingSection"
import Features from "./components/Features"
import Tabs from "./components/Tabs"
import FeaturesV2 from "./components/FeaturesV2";
import FAQSection from "./components/FAQSection";
import ContactUsSection from "./components/ContactUsSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Backgrousrc/assets/nd Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2" />      
      {/* Content */}
      <Header />
      <Hero />
      <Dashboard />
      <FeaturesDash/>
      <Features/>
      <Tabs/>
      <FeaturesV2Dash/>
      <FeaturesV2/>
      <Pricing/>
      <FAQSection/>
      <ContactUsSection/>
      <CallToActionSection/>
      <Footer/>        
    </div>
  );
}

export default App;
