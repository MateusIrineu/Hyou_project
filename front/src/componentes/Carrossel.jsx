"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, } from "swiper/modules";

function Carrossel() {
  const data = [
    {
      id: "1",
      image:
        "https://4kwallpapers.com/images/wallpapers/fire-force-season-3-3840x2160-21927.jpg",
      text: "Destaque",
      text2: "FIRE\nFORCE",
      text3:
        "Shinra e seus companheiros estão prontos para entrar para a Brigada de Incêndio para impedir que os demônios flamejantes, chamados de Infernais, incendeiem toda a cidade!",
    },
    {
      id: "2",
      image:
        "https://4kwallpapers.com/images/wallpapers/attack-on-titan-1920x1080-21064.jpg",
      text: "Destaque",
      text2: "ATTACK\nON TITAN",
      text3:
        "Em um mundo dominado por Titãs devoradores de humanos, Eren Yeager jura eliminar essas criaturas após presenciar uma tragédia. Ao lado de seus amigos Mikasa e Armin, ele se junta à Tropa de Exploração.",
    },
    {
      id: "3",
      image:
        "https://4kwallpapers.com/images/wallpapers/solo-leveling-8k-2880x1800-14662.jpg",
      text: "Destaque",
      text2: "SOLO\nLEVELING",
      text3:
        "Sung Jinwoo, um caçador inicialmente fraco que, após um incidente traumático em uma masmorra, ganha a habilidade de se tornar mais forte e poderoso, A trama explora sua jornada e os perigos que se formam no seu caminho.",
    },
    {
      id: "4",
      image:
        "https://4kwallpapers.com/images/wallpapers/jujutsu-kaisen-1920x1080-19746.jpg",
      text: "Destaque",
      text2: "JUJUTSU\nKAISEN",
      text3:
        "A história segue Yuji Itadori, um estudante do ensino médio que se envolve no mundo oculto dos feiticeiros e maldições após se tornar o hospedeiro de uma poderosa maldição chamada Sukuna.",
    },
  ];

  return (
    <div className="w-full  text-black">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        speed={900}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[1000px]">
              <img
                src={item.image}
                alt="slider"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-17 flex justify-end">
                <p
                  className="text-white bg-black/20 rounded-lg p-2 h-12 text-3xl font-bold shadow-2xl"
                >
                  {item.text}
                </p>
              </div>
              <div className="absolute left-20 inset-80 flex justify-start ">
                <div className="bg-black/25 shadow-2xl shadow-black w-180 p-4 rounded-lg ">
                  <p
                    className="text-white text-center text-7xl whitespace-pre-line font-bold drop-shadow-2xl"
                    style={{
                      WebkitTextStroke: "3px black",
                      textStroke: "10px black",
                    }}
                  >
                    {item.text2}
                  </p>
                  <div className="absolute left-0 p-4 inset-40 flex justify-start ">
                    <p className="text-white text-justify w-160 text-1xl font-bold stroke-3 stroke-black drop-shadow-lg">
                      {item.text3}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-1xl absolute left-25 inset-145 flex justify-start mt-5">
                <div>
                  <p className="flex items-center justify-center cursor-pointer font-bold text-white bg-[#191d29] rounded-md p-2 w-30 h-11.5 hover:bg-[#9aa5bb] hover:text-black shadow-2xl transition-all duration-200">
                    Começar
                  </p>
                </div>
              </div>
              <div className="text-1xl absolute left-56 inset-145 flex justify-start mt-5">
                <div className="flex justify-center items-center  cursor-pointer font-bold text-white bg-[#191d29] rounded-md p-2 w-15 h-11.5 hover:bg-[#9aa5bb] hover:text-black shadow-2xl shadow-black transition-all hover:shadow-2xl duration-200 ">
                  <FaRegStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrossel;