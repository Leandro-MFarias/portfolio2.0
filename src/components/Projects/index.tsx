import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import planet from "../../assets/quantum-moon.png";
import astronaut from "../../assets/astronaut.png";
import { slides } from "./projectList";

export function Projects() {
  return (
    <section className="h-[60vh] pt-20" id="projects">
      <div className="">
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
            <div className="flex justify-center space-x-28">
              <div className="space-y-10 mt-10">
                <h2 className="text-5xl font-bold">Meus Projetos</h2>
                <p className="text-xl max-w-xl leading-8">
                  Aqui você encontrará alguns dos meus principais projetos,
                  criados para demonstrar minhas habilidades como desenvolvedor frontend, com foco em soluções inovadoras e funcionais.
                </p>
                <p></p>
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
                className="w-[430px] h-[530px] brightness-50 object-contain"
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
            <SwiperSlide key={index} className="pb-10">
              <div className="flex justify-center space-x-40 py-20">
                <div className="space-y-6">
                  <h2 className="text-5xl font-semibold">{slide.title}</h2>
                  <p className="max-w-lg leading-7 text-lg">{slide.description}</p>
                  <p className="text-xl font-light">Tecnologias Utilizadas: {slide.tecnologias}</p>
                </div>
                <a target="_blank">
                  <motion.img src={slide.img} alt="" className="w-[740px]" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
