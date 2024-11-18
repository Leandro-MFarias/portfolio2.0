import { motion, useCycle, AnimatePresence, MotionConfig } from "motion/react";

import coordination from "../../assets/cordenadas.png";
import eye from "../../assets/eye.png";

export function Mobile() {
  // Basicamente igual um useState onde ele deixa o toggle como false depois true
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="top-0 h-16">
      <div className="bg-black/60 md:bg-black/0 mx-auto h-full p-10 flex items-center justify-between">
        <div className="block md:hidden relative z-10">
          <motion.button
            onClick={() => toggleMobileNav()}
            animate={mobileNav ? "open" : "close"}
            className="flex flex-col space-y-1"
          >
            <motion.span
              variants={{
                close: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 9 },
              }}
              className="w-7 h-[3px] bg-white block rounded-sm"
            ></motion.span>

            <motion.span
              variants={{ close: { opacity: 1 }, open: { opacity: 0 } }}
              className="w-7 h-[3px] bg-white block rounded-sm"
            ></motion.span>

            <motion.span
              variants={{
                close: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-7 h-[3px] bg-white block rounded-sm"
            ></motion.span>
          </motion.button>
        </div>
        <motion.img
          src={eye}
          alt="eye"
          className="block md:hidden w-32 h-32 z-10 mt-24"
          animate={mobileNav ? "open" : "close"}
          variants={{ close: { opacity: 0 }, open: { opacity: 1 } }}
        />
      </div>

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "-100%", // translateX(-100%)
                  transition: {
                    type: "spring",
                    bounce: 0,
                    when: "afterChildren",
                  },
                },
              }} // Estamos apenas definando como parte do componente.
              initial="closed" // Iniciando como fechado CHAMANDO
              animate="open" // ABRINDO QUANDO CLICAR CHAMANDO
              exit="closed" // Chama a animação quando fechar dnv
              className="md:hidden fixed inset-0 bg-zinc-950 space-y-10 p-6 mx-auto flex flex-col justify-center"
            >
              <motion.div
                variants={{
                  open: { y: "0%", opacity: 1 },
                  closed: { y: "25%", opacity: 0 },
                }}
              >
                <ul className="space-y-10">
                  {menuItems.map((li) => (
                    <motion.li key={li.label}>
                      <a href={li.href} className="pl-6 inline-block text-4xl font-bold hover:scale-125 transition-all duration-300 ease-in-out">
                        {li.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="w-full bg-white h-[2px]"
                variants={{
                  open: { y: "0%", opacity: 1 },
                  closed: { y: "25%", opacity: 0 },
                }}
              ></motion.div>

              <motion.div
                className="flex justify-center"
                variants={{
                  open: { y: "0%", opacity: 1 },
                  closed: { y: "25%", opacity: 0 },
                }}
              >
                <img src={coordination} alt="" className="w-56" />
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
}
