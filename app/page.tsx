import TestErrorBanner, { SHOW_TEST_ERROR } from "@/components/TestErrorBanner"; // TEMP: remove later
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Areas from "@/components/Areas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  // TEMP: while the test error is on, show ONLY the error and hide the whole site. Remove later.
  if (SHOW_TEST_ERROR) return <TestErrorBanner />;

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Areas />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
