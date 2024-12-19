import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import planet from "../../assets/quantum-moon.png";
import astronaut from "../../assets/astronaut.png";
import { slides } from "./projectList";

export function Projects() {
  return (
    <section className="h-[68vh] py-20" id="projects">
      <div>
        <Swiper
          modules={[Pagination, EffectCoverflow]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          effect={"coverflow"}
          loop={true}
          speed={1000}
          coverflowEffect={{
            rotate: 10,
            modifier: 4,
            depth: 150,
            stretch: 0,
            slideShadows: false,
          }}
          style={
            {
              "--swiper-pagination-color": "#f8fafc",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-inactive-color": " #64748b ",
              "--swiper-pagination-bullet-horizontal-gap": "8px",
            } as React.CSSProperties
          }
        >
          <SwiperSlide>
            <div className="flex flex-col sm:flex-row justify-center items-center md:items-start lg:space-x-28">
              <div className="space-y-10 mt-10 sm:pl-6 xl:p-0">
                <h2 className="sm:p-2 xl2:p-0 pl-10 md:pl-2 text-5xl font-bold">Meus Projetos</h2>
                <p className="hidden sm:block max-w-2xl md:text-xl md:max-w-xl md:bg-black xl2:bg-transparent rounded-2xl p-2 xl2:p-0 pl-10 md:pl-2 md:leading-loose">
                  Aqui você encontrará alguns dos meus principais projetos,
                  criados para demonstrar minhas habilidades como desenvolvedor frontend, com foco em soluções inovadoras e funcionais.
                </p>
              </div>
              <motion.img
                animate={{ y: [0, 30, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                src={astronaut}
                alt=""
                className="w-[360px] h-[510px] md:w-[430px] md:h-[530px] brightness-50 object-contain"
              />
            </div>
            <motion.img
              animate={{ x: [30, 0, 30] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src={planet}
              alt=""
              className="hidden lg:block w-28 absolute top-0 right-[450px] rounded-full brightness-75"
            />
          </SwiperSlide>

          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex items-center">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center xxl:space-x-20 py-20 space-y-4 md:space-y-0">
                <div className="space-y-6 pl-6 xl:p-0">
                  <h2 className="text-4xl md:text-5xl font-semibold">{slide.title}</h2>
                  <p className="hidden md:block max-w-xl md:leading-loose md:text-lg bg-black xl2:bg-transparent rounded-2xl p-2 xl2:p-0">{slide.description}</p>
                  <p className="hidden md:block md:text-xl font-light"><span className="font-bold">Tecnologias Utilizadas</span>: {slide.tecnologias}</p>
                </div>
                <a target="_blank">
                  <motion.img src={slide.img} alt="" className="md:w-[630px] xl2:w-[740px]" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
