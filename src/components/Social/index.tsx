import { FaGithubAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { ButtonEmail } from "../ButtonEmail";
import { MdOutlineEmail } from "react-icons/md";

export function Social() {
  const socials = [
    { name: <FaGithubAlt />, link: "https://github.com/Leandro-MFarias" },
    {
      name: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/leandro-farias-dev/",
    },
    {
      name: <FaWhatsapp />,
      link: "https://www.linkedin.com/in/leandro-farias-dev/",
    },
  ];

  return (
    <div className="flex items-center justify-center lg:justify-start pr-20 space-x-8">
      {socials.map((social, index) => (
        <a
          href={social.link}
          key={index}
          target="_blank"
          className="shadow-social p-3 rounded-xl hover:scale-125 transition duration-300 ease-in-out text-3xl"
        >
          {social.name}
        </a>
      ))}
      <ButtonEmail>
        <MdOutlineEmail />
      </ButtonEmail>
    </div>
  );
}
