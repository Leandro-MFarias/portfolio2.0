import { Hero } from "./components/Hero";
import { MenuProvider } from "./context/menuContext";

export function App() {
  return (
    <MenuProvider>
      <Hero />
    </MenuProvider>
  );
}
