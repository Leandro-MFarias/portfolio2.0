import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import planet from "../../assets/quantum-moon.png";
import astronaut from "../../assets/astronaut.png";

import cinevault from "../../assets/cinevault-macbook.png";
import ecommerce from "../../assets/e-commerce-macbook.png";
import portfolio from "../../assets/portfolio-macbook.png";
import searchAPI from "../../assets/searchAPI-macbook.png";
import todoList from "../../assets/todoList-macbook.png";
import weather from "../../assets/weatherApp-macbook.png";

export function Projects() {
  const slides = [
    {
      title: "Projetos",
      description: "Aqui estão alguns dos meus projetos passados",
      site: "https://cinevault-opal.vercel.app/",
      img: cinevault,
    },
    {
      title: "Projetos",
      description: "Aqui estão alguns dos meus projetos passados",
      site: "https://e-commerce-facul.vercel.app/",
      img: ecommerce,
    },
    {
      title: "Projetos",
      description: "Aqui estão alguns dos meus projetos passados",
      site: "https://weather-app-blond-nine-29.vercel.app/",
      img: weather,
    },
    {
      title: "Projetos",
      description: "Aqui estão alguns dos meus projetos passados",
      site: "https://to-do-list-zeta-roan.vercel.app/",
      img: todoList,
    },
    {
      title: "Projetos",
      description: "Aqui estão alguns dos meus projetos passados",
      site: "https://leandro-portfolio-topaz.vercel.app/",
      img: portfolio,
    },
    {
      title: "Projetos",
      description: "Aqui estão alguns dos meus projetos passados",
      site: "https://leandro-mfarias.github.io/search-github-api/",
      img: searchAPI,
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
          <SwiperSlide>
            <div className="flex justify-center space-x-52">
              <div className="">
                <h2>Meus Projetos</h2>
                <p>Eu construi alguns projetos</p>
                <p>..........</p>
              </div>
              <motion.img
                animate={{ y: [0, 8, 0] }}
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
            <img
              src={planet}
              alt=""
              className="hidden lg:block w-28 absolute top-0 right-60 rounded-full brightness-75"
            />
          </SwiperSlide>

          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center space-x-52">
                <div className="">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                <a href={slide.site} target="_blank">
                  <motion.img src={slide.img} alt="" className="w-[640px]" />
                </a>
              </div>
              <img
                src={planet}
                alt=""
                className="hidden lg:block w-28 absolute -top-20 left-[800px] rounded-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
