"use client";
import Image from "next/image";
import heroImage from "../../assets/images/hero1.jpg";
import { HandHeart } from "lucide-react";
import GroupCard, { Cell } from "@/components/GroupCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CellsInfo from "@/helpers/cells-ipc.json";
import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/lib/useIsVisible";
import FadeInImage from "@/components/FadeInImage";

const images = [
  {
    id: 2,
    src: heroImage,
    alt: "Image 1",
    className:
      "rounded-lg absolute left-5 top-32 w-[120px] md:w-[180px] md:left-[90px]  md:top-[120px]",
  },
  {
    id: 1,
    src: heroImage,
    alt: "Image 1",
    className:
      "hidden md:flex absolute rounded-lg w-[160px] rounded-lg left-[180px] top-[270px]",
  },
  {
    id: 5,
    src: heroImage,
    alt: "Image 2",
    className:
      "rounded-lg absolute right-6 top-52 w-[120px] md:w-[150px] md:right-[60px] md:top-[120px]",
  },
  {
    id: 3,
    src: heroImage,
    alt: "Image 3",
    className:
      "rounded-lg absolute md:z-[12] right-14 top-28 w-[120px] md:w-[160px] md:right-[230px]",
  },
  {
    id: 4,
    src: heroImage,
    alt: "Image 3",
    className:
      "hidden md:flex rounded-lg absolute w-[160px] right-[135px] top-[280px]",
  },
];

export default function Groups() {
  const [visibleImages, setVisibleImages] = useState([]);
  const MansCells: Cell[] = CellsInfo.filter(
    (cell) => cell.category === "Masculino"
  );
  const WomansCells: Cell[] = CellsInfo.filter(
    (cell) => cell.category === "Feminino"
  );

  const ref1 = useRef<HTMLElement | null>(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef<any>(null);
  const isVisible2 = useIsVisible(ref2);

  return (
    <main className="flex flex-col w-full min-h-screen mt-[100px]">
      <section
        id="hero-section"
        className="flex flex-col items-center w-full mt-8"
      >
        <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-gradient-to-r from-[#ff857e] to-[#c79cff]">
          <HandHeart color="#333" size={32} />
        </div>

        <div id="title" className="flex flex-col items-center mt-8">
          <span className="text-white text-h2 font-bold">Células</span>
          <span className="bg-gradient-to-r from-[#FD8582] to-[#C89CFD] text-transparent bg-clip-text text-large text-center mb-16">
            Encontre o seu grupo, faça parte da comunidade.
          </span>
        </div>
      </section>
      <section
        ref={ref1}
        className={`transition-opacity ease-in duration-700 flex flex-col justify-center items-center w-full py-8 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Tabs defaultValue="Masculino" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black-80">
            <TabsTrigger value="Masculino">Masculino</TabsTrigger>
            <TabsTrigger value="Feminino">Feminino</TabsTrigger>
          </TabsList>
          <TabsContent value="Masculino" className="flex flex-col gap-8">
            {MansCells.map((cell, index) => (
              <GroupCard key={`${cell.leader}${index}`} cell={cell} />
            ))}
          </TabsContent>
          <TabsContent value="Feminino" className="flex flex-col gap-8">
            {WomansCells.map((cell, index) => (
              <GroupCard key={`${cell.leader}${index}`} cell={cell} />
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
