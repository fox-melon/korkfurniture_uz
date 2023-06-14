import About from "@/components/UI/About";
import Catalog from "@/components/UI/Catalog";
import Client from "@/components/UI/Client";
import Contact from "@/components/UI/Contact";
import Header from "@/components/UI/Header";
import Projects from "@/components/UI/Projects";

export function Main() {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Catalog />
      <Client />
      <Contact />
    </main>
  );
}
