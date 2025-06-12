import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <main>
          <section id="features" className="scroll-mt-[70px] ">
            <HeroSection />
            <FeatureSection />
          </section>
          <section id="workflow" className="scroll-mt-[70px] ">
            <Workflow />
          </section>
          <section id="pricing" className="scroll-mt-[70px] ">
            <Pricing />
          </section>
          <section id="testimonials" className="scroll-mt-[70px]">
            <Testimonials />
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
