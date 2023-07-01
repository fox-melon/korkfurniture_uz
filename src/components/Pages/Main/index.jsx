import About from "@/components/UI/About";
import Catalog from "@/components/UI/Catalog";
import Client from "@/components/UI/Client";
import Contact from "@/components/UI/Contact";
import Header from "@/components/UI/Header";
import Projects from "@/components/UI/Projects";
import Purpose from "@/components/UI/Purpose";

export function Main({ projects }) {
  return (
    <main>
      <Header />
      <About />
      <Purpose />
      <Projects projects={projects} />
      <Catalog />
      <Client />
      <Contact />
    </main>
  );
}
