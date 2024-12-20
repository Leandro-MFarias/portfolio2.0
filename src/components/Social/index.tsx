import { tv } from "tailwind-variants";
import { motion, useInView } from "motion/react";

import { FaGithubAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

const links = tv({
  variants: {
    types: {
      about: "shadow-social p-3 rounded-xl text-3xl",
      footer:
        "rounded-full border-2 border-white text-sm sm:text-base xl:text-xl font-light px-6 xl:px-10 py-3",
    },
  },
});

type SocialProps = {
  types: "about" | "footer";
};

export function Social({ types }: SocialProps) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "0px 0px -100px 0px",
    once: true,
  });

  const items = [
    {
      name: "Github",
      icon: <FaGithubAlt />,
      link: "https://github.com/Leandro-MFarias",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/leandro-farias-dev/",
    },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://w.app/ledev" },
  ];

  return (
    <div
      className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-8"
      ref={ref}
    >
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          className={links({ types })}
          animate={{
            y: inView ? 0 : "80%",
            opacity: inView ? [0, 0.1, 1] : 0,
          }}
          transition={{
            duration: 0.2,
            ease: "linear",
            delay: 0.4 + index * 0.4,
          }}
          whileHover={{
            scale: 1.25,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
        >
          {types === "about" ? item.icon : item.name}
        </motion.a>
      ))}
    </div>
  );
}
