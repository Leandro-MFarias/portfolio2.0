import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { MenuProvider } from "./context/menuContext";

export function App() {
  return (
    <MenuProvider>
      <div className="space-y-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </div>
    </MenuProvider>
  );
}
