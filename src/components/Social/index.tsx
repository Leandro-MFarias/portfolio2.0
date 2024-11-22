import { useState } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export function Social() {
  const [ hasCopied, setHasCopied ] = useState(false)

  const socials = [
    { name: <FaGithubAlt />, link: "https://github.com/Leandro-MFarias" },
    { name: <FaLinkedinIn />, link: "https://www.linkedin.com/in/leandro-farias-dev/" },
  ];

  const email = 'Leandrorf1606@gmail.com'

  return (
    <div className="flex items-center pr-20 space-x-8 text-3xl">
      {socials.map((social, index) => (
        <a
          href={social.link}
          key={index}
          target="_blank"
          className="shadow-social p-3 rounded-xl hover:scale-125 transition duration-300 ease-in-out"
        >
          {social.name}
        </a>
      ))}
      <a
        href=""
        className="shadow-social p-3 rounded-xl hover:scale-125 transition duration-200 ease-in-out"
      >
        <MdOutlineEmail />
      </a>
    </div>
  );
}
