import { motion } from "motion/react";

import astronaut from "../../assets/astronaut.png";



export function Projects() {
  return (
    <section>
      <div className="flex justify-center h-[80vh] space-x-10">
        <div className="">
          <h2>Projetos </h2>
          <p>Aqui está alguns dos projetos que eu criei</p>
        </div>
        <motion.img
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          src={astronaut}
          alt=""
          className="w-[430px] h-[530px] brightness-50"
        />
      </div>
    </section>
  );
}
