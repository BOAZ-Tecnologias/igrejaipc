import { CalendarDays, MapPinIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import heroImage from "../../assets/images/hero1.jpg";
import Button from "@/components/HomePage/Button";
import Image from "next/image";

export type Cell = {
  leader: string;
  whatsapp?: string;
  weekday: string;
  hour?: string;
  address: string;
  category: string;
  subCategory: string;
  active: boolean;
};

type GroupCardProps = {
  cell: Cell;
};

const GroupCard: React.FC<GroupCardProps> = ({ cell }) => {
  const title =
    cell.category === "Masculino"
      ? `Célula do ${cell.leader}`
      : `Célula da ${cell.leader}`;
  return (
    <div
      id="card"
      className="flex flex-col w-full h-full bg-noise-pattern rounded-2xl border-t-[0.5px] border-[hsla(0, 0%, 68%, 0.51)] py-4"
    >
      <div className="flex flex-row px-8 py-6 gap-4">
        <Avatar className="w-[74px] h-[74px] mt-4">
          <AvatarImage asChild>
            <Image
              width={20}
              height={20}
              src={cell.avatar}
              alt="Cell leader selfie"
            />
          </AvatarImage>
          <AvatarFallback className="text-black font-bold">
            {cell.leader[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <span className="text-md font-semibold">{title}</span>
          <Button content="Registrar" variant="ghost" to="#" />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <div className="flex flex-row items-center px-2 gap-2">
          <MapPinIcon />
          <span className="max-w-[90%] text-left">{cell.address}</span>
        </div>
        <div className="flex flex-row px-2 gap-2">
          <CalendarDays />
          <span>
            Toda {cell.weekday} {cell.hour ? `, às ${cell.hour}hrs` : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
