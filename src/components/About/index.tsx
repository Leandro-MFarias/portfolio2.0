import room from "../../assets/about-ia.jpg";
import planet from "../../assets/quantum-moon.png";
import { Social } from "../Social";

export function About() {


  return (
    <section id="about" className="h-[80vh] relative pb-10 px-6">
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-8 space-y-6 tablet:space-y-0">
        <div className="space-y-10 xl:space-y-14">
          <h2 className="text-5xl font-bold">Sobre mim</h2>
          <p className="max-w-3xl text-lg xl:text-xl leading-loose tracking-wider">
            Sou Desenvolvedor Frontend com foco em tecnologias como React.js,
            JavaScript, TypeScript, CSS3 e TailwindCSS. Desde meu primeiro
            contato com tecnologia em 2022, venho aprimorando minhas habilidades
            para criar interfaces web funcionais e otimizadas, sempre buscando
            boas práticas de desenvolvimento. Tenho experiência na criação de
            componentes reutilizáveis e no desenvolvimento de aplicações web que
            priorizam performance, acessibilidade e uma experiência de usuário
            responsiva.
          </p>

          <Social />

        </div>
        <img
          src={room}
          alt="Image a man on Computer"
          className="pr-4 w-[430px] sm:w-[640px] sm:h-[500px] lg:w-[560px] lg:h-[560px] rounded-[40px] md:rounded-tr-[40%] md:rounded-tl-[0px] md:rounded-bl-[40%] md:rounded-br-[0] object-cover lg:object-fill"
        />
      </div>

      <img
        src={planet}
        alt=""
        className="hidden lg:block w-24 absolute -top-20 left-20 brightness-75"
      />
    </section>
  );
}
// rounded-tr-[30%] rounded-bl-[30%] rounded-tl-xl rounded-br-xl