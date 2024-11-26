import { motion } from "motion/react";
import { useEffect, useState } from "react";

const principalText = "Hey, I'm Leandro Farias";
const secondaryText = ["FrontEnd Developer", "React Developer"];

const letterDelay = 0.05;
const boxFadeDuration = 0.125;

const fadeDelay = 5;
const mainFadeDuration = 0.25;

const swapDelay = 3000;

export function TypingText() {
  const [secondary, setSecodary] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecodary((prev) => (prev + 1) % secondaryText.length);
    }, swapDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      <p className="text-4xl sm:text-5xl md:text-6xl font-semibold md:mr-20">
        {principalText.split("").map((letter, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * letterDelay,
              duration: 0,
            }}
            key={index}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: index * letterDelay,
                duration: 0,
              }}
            >
              {letter}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: index * letterDelay,
                times: [0, 0.1, 1],
                duration: boxFadeDuration,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-sky-400"
            />
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: index * letterDelay,
                times: [0, 0.1, 1],
                duration: boxFadeDuration,
                ease: "easeInOut",
              }}
              className="absolute h-14 w-[2px] bg-zinc-50 "
            />
          </motion.span>
        ))}
      </p>
      <p className="flex items-center text-4xl md:text-5xl self-end">
        {secondaryText[secondary].split("").map((letter, index) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: fadeDelay,
              duration: mainFadeDuration,
              ease: "easeInOut",
            }}
            key={`${secondary}-${index}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: index * letterDelay,
                duration: 0,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: index * letterDelay,
                times: [0, 0.1, 1],
                duration: boxFadeDuration,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-sky-400"
            />
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: index * letterDelay,
                times: [0, 0.1, 1],
                duration: boxFadeDuration,
                ease: "easeInOut",
              }}
              className="absolute h-10 w-[2px] bg-zinc-50 "
            />
          </motion.span>
        ))}
      </p>
    </div>
  );
}
