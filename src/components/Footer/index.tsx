import { Social } from "../Social";
import { FaArrowUp } from "react-icons/fa6";

import eye from "../../assets/eye.png";
import { ButtonEmail } from "../ButtonEmail";

export function Footer() {
  return (
    <footer
      className="relative h-[50vh] bg-black flex flex-col justify-center pl-32 space-y-4"
      id="contact"
    >
      <a href="hero" className="absolute flex items-center top-20 right-32">
        Voltar ao topo
        <FaArrowUp className="text-black bg-zinc-50 text-4xl p-[10px] rounded-full cursor-pointer hover:scale-125 transition duration-200 ease-in-out ml-2" />
      </a>

      <p className="absolute top-20 ">&copy; Leandro Marinaci 2024</p>

      <div className="flex flex-col">
        <p className="pl-1.5 text-white leading-none">
          Tem um projeto em mente?
        </p>
        <h2 className="text-9xl text-neutral-400 font-bold tracking-wider">
          Fale Comigo
        </h2>
      </div>

      <div className="flex space-x-8">
        <Social types={"footer"} />
        <ButtonEmail types="footer">Email</ButtonEmail>
      </div>

      <img
        src={eye}
        alt=""
        className="absolute right-32 bottom-6 w-[180px] object-cover"
      />
    </footer>
  );
}
