import room from "../../assets/about-ia.jpg";
import planet from "../../assets/quantum-moon.png";


export function About() {
  return (
    <section id="about" className="h-[80vh] relative pb-10">

      <div className="flex items-center justify-center space-x-8">
        <div className="space-y-10">
          <h2 className="text-5xl font-bold">Sobre mim</h2>
          <p className="max-w-3xl text-xl leading-loose tracking-wider">
            Sou Desenvolvedor Frontend com foco em tecnologias como React.js,
            JavaScript, TypeScript, CSS3 e TailwindCSS. Desde meu primeiro
            contato com tecnologia em 2022, venho aprimorando minhas habilidades
            para criar interfaces web funcionais e otimizadas, sempre buscando
            boas práticas de desenvolvimento. Tenho experiência na criação de
            componentes reutilizáveis e no desenvolvimento de aplicações web que
            priorizam performance, acessibilidade e uma experiência de usuário
            responsiva.
          </p>
        </div>
        <img
          src={room}
          alt="Image a man on Computer"
          className="w-[560px] rounded-tr-[40%] rounded-bl-[40%]"
        />
      </div>

      <img src={planet} alt="" className="w-44 absolute -top-20 left-[760px] brightness-50"/>
    </section>
  );
}
