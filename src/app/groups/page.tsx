import Image from "next/image";
import heroImage from "../../assets/images/hero1.jpg";
import { CalendarDays, HandHeart, MapPinIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/HomePage/Button";

export default function Groups() {
  return (
    <main className="flex flex-col w-full min-h-screen mt-[100px]">
      <section
        id="hero-section"
        className="flex flex-col items-center w-full animate-fade"
      >
        <div className="flex flex-row w-full h-[240px]">
          <Image
            src={heroImage}
            width={100}
            height={120}
            alt=""
            className="rounded-lg absolute left-5 top-32"
          />
          <Image
            src={heroImage}
            width={100}
            height={120}
            alt=""
            className="rounded-lg absolute right-6 top-52"
          />
          <Image
            src={heroImage}
            width={100}
            height={120}
            alt=""
            className="rounded-lg absolute right-14 top-28"
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
              className="rounded-lg h-[140px] w-[120px]"
            />
            <Image
              src={heroImage}
              width={100}
              height={120}
              alt=""
              className="rounded-lg mt-8 h-[140px] w-[120px]"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center w-full animate-fade py-8">
        <div
          id="card"
          className="flex flex-col w-full h-full bg-noise-pattern rounded-2xl border-t-[0.5px] border-[hsla(0, 0%, 68%, 0.51)] py-4"
        >
          <div className="flex flex-row px-8 py-6 gap-4">
            <Avatar className="w-[74px] h-[74px]">
              <AvatarImage src="https://as2.ftcdn.net/v2/jpg/03/02/94/53/1000_F_302945354_dqIiUiITKpard7fBVKDLtffIqnkDbyo4.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-semibold">Grupo da Maria</span>
              <Button content="Registrar" variant="ghost" to="#" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row px-8 gap-2">
              <MapPinIcon />
              <span>Rua Craviúna, 255, Jd Europa</span>
            </div>
            <div className="flex flex-row px-8 gap-2">
              <CalendarDays />
              <span>Todas as terças, às 20hrs</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
