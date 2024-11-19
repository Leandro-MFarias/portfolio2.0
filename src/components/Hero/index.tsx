import bedRoom from "../../assets/bedroom2.0.gif";
import { useMenu } from "../../context/menuContext";
import { Header } from "../Header";

import { IoIosArrowDown } from "react-icons/io";

export function Hero() {
  const { isMenuOpen } = useMenu();

  return (
    <section className="relative h-screen">
      <img
        src={bedRoom}
        alt="Pixel art gif"
        className="absolute w-full h-full object-cover object-center left-0 top-0 -z-50 brightness-50"
      />

      <Header />

      <div>
        <div className="flex flex-col items-center justify-center h-[55vh]">
          <div className="flex flex-col space-y-4">
            <p className="text-6xl font-semibold">Hey, I'm Leandro Farias</p>
            <p className="text-5xl self-end">FrontEnd Developer</p>
          </div>
        </div>

        {!isMenuOpen && (
          <a href="#about" className="absolute left-[48%] bottom-12">
            <IoIosArrowDown className="text-5xl" />
          </a>
        )}
      </div>
    </section>
  );
}
