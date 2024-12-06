import { useEffect, useRef, useState } from "react";
import { FaGithubAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { copyToClipboard } from "../../helpers/copyToClipboard";

export function Social() {
  const [hasCopied, setHasCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const email = "leandrorf1606@gmail.com"
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
  
  useEffect(() => {
    timeoutRef.current = setTimeout(setHasCopied, 4000, false);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      } 
      
    };
  }, [hasCopied]);

  function handleCopy() {
    copyToClipboard(email)?.then(() => setHasCopied(true))
  }

  const copied = hasCopied ? "Copied!" : "copy";

  return (
    <div className="flex items-center justify-center lg:justify-start pr-20 space-x-8 text-3xl pl-6">
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
      <button
        onClick={handleCopy}
        className="relative shadow-social p-3 rounded-xl hover:scale-125 transition duration-200 ease-in-out group"
      >
        <span
          className={`absolute text-sm -top-6 font-semibold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 ${
            hasCopied ? "left-0" : "left-[11px]"
          }`}
        >
          {copied}
        </span>
        <MdOutlineEmail />
      </button>
    </div>
  );
}
