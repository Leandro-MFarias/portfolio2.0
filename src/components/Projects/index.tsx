import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import astronaut from "../../assets/astronaut.png";
import cord from "../../assets/cordenadas.png";
import eye from "../../assets/eye.png";

export function Projects() {
  const slides = [
    {
      title: "Projetos",
      description: "Aqui estão alguns dos meus projetos passados",
      img: astronaut,
    },
    {
      title: "Projetos",
      description: "Aqui estão alguns dos meus projetos passados",
      img: cord,
    },
    {
      title: "Projetos",
      description: "Aqui estão alguns dos meus projetos passados",
      img: eye,
    },
  ];

  return (
    <section className="h-[60vh]">
      <div className="">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center space-x-52">
                <div className="">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                <motion.img
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  src={slide.img}
                  alt=""
                  className="w-[430px] h-[530px] brightness-50 object-contain"
                />
              </div>
              {/* <img
            src={planet}
            alt=""
            className="hidden lg:block w-28 absolute -top-20 left-[800px] rounded-full"
          /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
