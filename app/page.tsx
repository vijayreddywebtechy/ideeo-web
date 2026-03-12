import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <Hero />
        <ClientsMarquee />
        <About />
        <Services />
        <Solutions />
        <Projects />
        <TechStack />
        <Testimonials />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
