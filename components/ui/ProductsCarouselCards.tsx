"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/app/utils/store";
import { translations } from "@/config/site";
import ImageCarousel from "./ImageCarousel";

interface Product {
  id?: number;
  imageUrl: string;
  title: string;
  name: string;
}

const productsData: Product[] = [
  {
    id: 1,
    imageUrl: "/imgs/product-1.jpg",
    title: "Thep Prasit",
    name: "Inhaler",
  },
  {
    id: 2,
    imageUrl: "/imgs/shop-2.jpg",
    title: "Petch Mongkol",
    name: "Inhaler",
  },
  {
    id: 3,
    imageUrl: "/imgs/shop-3.jpg",
    title: "Thep Prasit",
    name: "Work Day Oil",
  },
  {
    id: 4,
    imageUrl: "/imgs/shop-4.jpg",
    title: "Petch Mongkol",
    name: "Work Day Oil",
  },
  {
    id: 5,
    imageUrl: "/imgs/shop-5.jpg",
    title: "Thep Prasit",
    name: "Essential Oil Drop",
  },
  {
    id: 6,
    imageUrl: "/imgs/shop-6.jpg",
    title: "Petch Mongkol",
    name: "Essential Oil Drop",
  },
];

const StoryCard = ({ story }: { story: Product }) => {
  return (
    <motion.div
      className="relative w-72 h-96 flex-shrink-0 rounded-lg overflow-hidden shadow-xl group"
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
    >
      <img
        src={story.imageUrl}
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white uppercase">
        <p className=" text-md tracking-wide">{story.name}</p>
        <h3 className="font-bold text-2xl tracking-wide">{story.title}</h3>
      </div>
    </motion.div>
  );
};

export default function ProductsCarouselCards() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragConstraint, setDragConstraint] = useState(0);

  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  useEffect(() => {
    const calculateConstraints = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        setDragConstraint(containerWidth - trackWidth);
      }
    };

    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);

    return () => window.removeEventListener("resize", calculateConstraints);
  }, []);

  return (
    <div className="font-sans w-full py-12 md:py-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        <header className="text-center mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-[#CDBE9E] ">
            {t.products.title}
          </h1>
          <p className="mt-4 text-lg text-gray-400">{t.products.subtitle}</p>
        </header>

        <motion.div
          ref={containerRef}
          className="overflow-hidden cursor-grab md:hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            ref={trackRef}
            className="flex space-x-6 pb-6 px-4"
            drag="x"
            dragConstraints={{
              right: 0,
              left: dragConstraint - 32,
            }}
            dragElastic={0.15}
          >
            {productsData.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </motion.div>
        </motion.div>
        <div className="hidden md:block">
          <ImageCarousel persons={productsData} />
        </div>
      </div>
    </div>
  );
}
