import { Squash as Hamburger } from "hamburger-react";
import { useRef } from "react";
import { useClickAway } from "react-use";

type NavMobileProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const HamburguerButton = ({ isOpen, toggleMenu }: NavMobileProps) => {
  const ref = useRef(null);

  useClickAway(ref, () => toggleMenu);

  return (
    <div ref={ref} className="md:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={toggleMenu} />
    </div>
  );
};
