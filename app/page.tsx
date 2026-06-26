import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Process from "@/components/Process";
import Posts from "@/components/Posts";
import Contact from "@/components/Contact";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <main id="main-content" style={{ position: "relative", zIndex: 2 }}>
        <Nav />
        <Hero />
        <Work />
        <About />
        <Process />
        <Posts />
        <Contact />
      </main>
    </>
  );
}
