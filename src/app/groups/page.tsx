"use client";
import Image from "next/image";
import heroImage from "../../assets/images/hero1.jpg";
import { HandHeart } from "lucide-react";
import GroupCard, { Cell } from "@/components/GroupCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CellsInfo from "@/helpers/cells-ipc.json";
import { useRef } from "react";
import { useIsVisible } from "@/lib/useIsVisible";

export default function Groups() {
  const MansCells: Cell[] = CellsInfo.filter(
    (cell) => cell.category === "Masculino"
  );
  const WomansCells: Cell[] = CellsInfo.filter(
    (cell) => cell.category === "Feminino"
  );

  const ref1 = useRef<HTMLElement | null>(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <main className="flex flex-col w-full min-h-screen mt-[100px]">
      <section id="hero-section" className="flex flex-col items-center w-full">
        <div className="flex flex-row w-full h-[240px]">
          <Image
            src={heroImage}
            width={100}
            height={120}
            alt=""
            className="rounded-lg absolute left-5 top-32 animate-fade"
          />
          <Image
            src={heroImage}
            width={100}
            height={120}
            alt=""
            className="rounded-lg absolute right-6 top-52 animate-fade3s"
          />
          <Image
            src={heroImage}
            width={100}
            height={120}
            alt=""
            className="rounded-lg absolute right-14 top-28 animate-fade3s"
          />
        </div>
        <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-gradient-to-r from-[#ff857e] to-[#c79cff]">
          <HandHeart color="#00000090" size={32} />
        </div>

        <div id="title" className="flex flex-col items-center mt-8">
          <span className="text-white text-h2 font-bold">Células</span>
          <span className="bg-gradient-to-r from-[#FD8582] to-[#C89CFD] text-transparent bg-clip-text text-large text-center mb-16">
            Encontre o seu grupo, faça parte da comunidade.
          </span>
          <div className="flex flex-row gap-2 justify-center w-full h-full">
            <Image
              src={heroImage}
              width={100}
              height={120}
              alt=""
              className="rounded-lg h-[140px] w-[120px] animate-fade"
            />
            <Image
              src={heroImage}
              width={100}
              height={120}
              alt=""
              className="rounded-lg mt-8 h-[140px] w-[120px] animate-fade3s"
            />
          </div>
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

        {/* <GroupCard /> */}
      </section>
    </main>
  );
}
