import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// import "./output.css";

// using tailwind css 
const HorizontalScroll = () => {

  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-white">
        Gallery View 📽 | &nbsp;
        </span>
        <br/>
        <span className="font-semibold uppercase text-neutral-500">
         [Scroll down] 
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
         [Scroll up]  
        </span>
      </div>
    </div>
  );
};


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
      <motion.div style={{ x }} className="flex gap-4">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
        </motion.div>
      </div>
    </section>
  );
};


const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          // backgroundImage: `url(${"./asset/movie.jpg"})`,
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      >
        <img src={card.img} 
        alt={card.title} 
        width={500}
        className="hidden"/>
      </div>
      <div className="absolute inset-0 z-10 grid place-content-center"
           onClick={() => popup(card)}
      >
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {/* {card.title} */}
        </p>
      </div>
    </div>
  );
};


const popup = (card) => {
    alert("Great shot during " + card.title + " 📽.");
}

export default HorizontalScroll;


const cards = [
  {
    img: "/asset/photo/Display/2024/241224-1.png",
    title: "24 Dec",
    id: 1,
  },
  {
    img: "/asset/photo/Display/2024/241224-2.png",
    title: "24 Dec",
    id: 2,
  },
  {
    img: "/asset/photo/Display/2024/241224-3.png",
    title: "24 Dec",
    id: 3,
  },
  {
    img: "/asset/photo/Display/2023/231106.png",
    title: "Nov during Supo",
    id: 4,
  },
  {
    img: "/asset/photo/Display/2023/230925.png",
    title: "Sep New Dorm",
    id: 5,
  },
  {
    img: "/asset/photo/Display/2023/230709.png",
    title: "July",
    id: 6,
  },
  {
    img: "/asset/photo/Display/2023/230702.png",
    title: "July",
    id: 7,
  },
  {
    img: "/asset/photo/Display/2023/230700.png",
    title: "July",
    id: 8,
  },
  {
    img: "/asset/photo/Display/2023/230619.png",
    title: "June",
    id: 9,
  }
];


