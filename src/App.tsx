import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { MenuProvider } from "./context/menuContext";

export function App() {
  return (
    <MenuProvider>
      <div className="space-y-28">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </MenuProvider>
  );
}
