import room from "../../assets/room-left.jpg";

export function About() {
  return (
    <section id="about" className="pb-10">
      <div className="flex items-center justify-center space-x-8">
        <p className="max-w-2xl text-xl ">
          Sou Desenvolvedor Frontend com foco em tecnologias como React.js,
          JavaScript, TypeScript, CSS3 e TailwindCSS. Desde meu primeiro contato
          com tecnologia em 2022, venho aprimorando minhas habilidades para
          criar interfaces web funcionais e otimizadas, sempre buscando boas
          práticas de desenvolvimento. Tenho experiência na criação de
          componentes reutilizáveis e no desenvolvimento de aplicações web que
          priorizam performance, acessibilidade e uma experiência de usuário
          responsiva. Meu objetivo é contribuir para projetos inovadores,
          garantindo soluções ecientes e escaláveis.
        </p>
        <img 
          src={room} 
          alt="Image a man on Computer"
          className="w-[640px] rounded-xl" 
        />
      </div>
    </section>
  );
}
