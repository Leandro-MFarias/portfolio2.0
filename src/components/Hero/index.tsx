import bedRoom from "../../assets/bed-room.gif";
import { Header } from "../Header";

export function Hero() {
  return (
    <section className="relative h-screen">
      <img src={bedRoom} alt="Pixel art gif" className="absolute w-full h-full object-cover object-center left-0 top-0 -z-50" />
      
      <Header />

      {/* <div>
        <div>
          <p>Hey, I'm Leandro Farias</p>
          <p>FrontEnd Developer</p>
        </div>

        <a href="#about">
          ARROW
        </a>
      </div> */}

    </section>
  );
}
