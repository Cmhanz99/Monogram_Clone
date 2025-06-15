import { useState } from "react";
import Logo from "../../assets/Logo";
import Navlinks from "./Navlinks";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarModal from "./NavbarModal";
import { AnimatePresence } from "framer-motion";

const Links = () => {
  return (
    <div className="lg:flex hidden items-center gap-3">
      <Navlinks flex="flex-row" gap="gap-10" />
      <div className="flex items-center gap-3">
        <p className="text-4xl">
          <AiOutlineShopping />
        </p>
        <p className="text-sm flex items-center">
          PHP{" "}
          <span className="text-xl ml-1">
            <IoMdArrowDropdown />
          </span>
        </p>
      </div>
    </div>
  );
};

const Nav = () => {
  const [openNav, setOPenNAv] = useState(false);
  return (
    <nav className="w-full h-14 fixed flex items-center justify-center top-3 z-100">
      <div className="relative bg-blue-950 w-[98%] h-full flex justify-between items-center text-orange-200 p-2">
        <Logo />
        <Links />
        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setOPenNAv(!openNav)}
        >
          <RxHamburgerMenu />
        </div>
        <AnimatePresence mode="wait">
          {openNav && (
            <NavbarModal key="navmodal" closeModal={() => setOPenNAv(false)} />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
