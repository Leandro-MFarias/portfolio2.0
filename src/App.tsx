import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { MenuProvider } from "./context/menuContext";

export function App() {
  return (
    <MenuProvider>
      <div className="space-y-32">
        <Hero />
        <About />
      </div>
    </MenuProvider>
  );
}
