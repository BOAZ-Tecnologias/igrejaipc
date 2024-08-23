"use client";
import { CalendarDays, MapPinIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "./ui/button";

export type Cell = {
  leader: string;
  whatsapp?: string;
  weekday: string;
  hour?: string;
  address: string;
  category: string;
  subCategory: string;
  active: boolean;
  avatar?: string;
};

type GroupCardProps = {
  cell: Cell;
};

const GroupCard: React.FC<GroupCardProps> = ({ cell }) => {
  const title =
    cell.category === "Masculino"
      ? `Célula do ${cell.leader}`
      : `Célula da ${cell.leader}`;

  const handleButtonClick = () => {
    try {
      const phoneNumber = cell.whatsapp ? cell.whatsapp : "+5511936187180";

      const parsedText = `Olá, gostaria de participar da ${title}.`;
      window.open(`https://wa.me/${phoneNumber}?text=${parsedText}`, "_blank");
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <div
      id="card"
      className="flex flex-col w-full h-full bg-noise-pattern rounded-2xl border-t-[0.5px] border-[hsla(0, 0%, 68%, 0.51)] py-8 px-4"
    >
      <div className="flex flex-row px-2 mb-3 gap-4">
        <Avatar className="w-[74px] h-[74px] mt-4">
          <AvatarImage asChild>
            <Image
              width={20}
              height={20}
              src={cell.avatar || ""}
              alt="Cell leader selfie"
            />
          </AvatarImage>
          <AvatarFallback className="text-black font-bold">
            {cell.leader[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <span className="text-md font-semibold">{title}</span>
          <Button
            type="button"
            className="w-[145px] rounded-2xl"
            variant={"outline"}
            onClick={handleButtonClick}
          >
            Participar
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start px-2">
        <div className="flex flex-row items-center px-2 gap-2">
          <div className="flex items-center justify-center bg-gradient-to-r from-[#ff857e] to-[#c79cff] rounded-full p-[4px]">
            <MapPinIcon color="#00000090" />
          </div>
          <span className="max-w-[90%] text-left">{cell.address}</span>
        </div>
        <div className="flex flex-row px-2 gap-2 items-center">
          <div className="flex items-center justify-center bg-gradient-to-r from-[#ff857e] to-[#c79cff] rounded-full p-[4px]">
            <CalendarDays color="#00000090" />
          </div>
          <span>
            Toda {cell.weekday} {cell.hour ? `, às ${cell.hour}hrs` : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
