import { Social } from "../Social";
import { FaArrowUp } from "react-icons/fa6";

import eye from "../../assets/eye.png";
import { ButtonEmail } from "../ButtonEmail";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, {
    margin: '0px 0px -100px 0px',

  })

  return (
    <footer
      className="relative h-[60vh] sm:h-[50vh] bg-black flex flex-col justify-center pl-4 xl:pl-32 space-y-12 sm:space-y-6 md:space-y-10 pb-20 md:pb-0"
      id="contact"
      ref={ref}
    >
      <motion.div 
        className="absolute flex items-center top-20 right-8 xl:right-32"
        animate={{
          x: inView ? 0 : '30%',
          opacity: inView ? 1 : 0
        }}
        transition={{
          duration: 0.6,
          ease: 'linear'
        }}
      >
        <p>Voltar ao topo</p>
        <a href="#hero">
          <FaArrowUp className="text-black bg-zinc-50 text-4xl p-[10px] rounded-full cursor-pointer hover:scale-125 transition duration-200 ease-in-out ml-2" />
        </a>
      </motion.div>

      <div className="flex flex-col">
        <motion.p 
          className="pl-1.5 text-white leading-none"
          animate={{
            x: inView ? 0 : '-40%',
            opacity: inView ? 1 : 0
          }}
          transition={{
            duration: 0.6,
            ease: 'linear'
          }}
        >
          Tem um projeto em mente?
        </motion.p>
        <motion.h2 
          className="text-7xl md:text-8xl lg:text-9xl text-neutral-400 font-bold tracking-wider"
          animate={{
            x: inView ? 0 : '-40%',
            opacity: inView ? 1 : 0
          }}
          transition={{
            duration: 0.6,
            ease: 'linear',
            delay: 0.6
          }}
        >
          Fale Comigo
        </motion.h2>
      </div>

      <div className="flex space-x-2 sm:space-x-8 sm:pl-4">
        <Social types={"footer"} />
        <ButtonEmail types="footer" typesCopy="footerFalse">Email</ButtonEmail>
      </div>

      <motion.img
        src={eye}
        alt=""
        className="absolute right-36 sl1:right-48 sm:right-4 xl:right-28 bottom-0 sm:bottom-6 w-[180px] object-cover"
        animate={{
          x: inView ? 0 : '120%',
          opacity: inView ? 1 : 0
        }}
        transition={{
          duration: 0.4,
          ease: 'linear',
          delay: 0.6
        }}
      />
    </footer>
  );
}
