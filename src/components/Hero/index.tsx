import bedRoom from "../../assets/bedroom2.0.gif";

import { useMenu } from "../../context/menuContext";
import { Header } from "../Header";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "motion/react";
import { TypingText } from "../TypingText";

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
        <div className="flex flex-col items-center justify-center h-[50vh] px-4">
          <TypingText />
        </div>

        {!isMenuOpen && (
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute left-[48%] bottom-12"
          >
            <IoIosArrowDown className="text-4xl" />
          </motion.a>
        )}
      </div>
    </section>
  );
}
