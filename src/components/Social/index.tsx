import { tv } from "tailwind-variants";

import { FaGithubAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const links = tv({
  base: 'transition duration-300 ease-in-out', 
  variants: {
    types: {
      about:
        "hover:scale-125 shadow-social p-3 rounded-xl text-3xl",
      footer:
        "hover:scale-110 rounded-full border-2 border-white text-xl font-light px-10 py-3",
    },
  },
});

type SocialProps = {
  types: "about" | "footer";
};

export function Social({ types }: SocialProps) {
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
    <div className="flex items-center justify-center lg:justify-start space-x-8">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className={links({ types })}
        >
          {types === "about" ? item.icon : item.name}
        </a>
      ))}
    </div>
  );
}
