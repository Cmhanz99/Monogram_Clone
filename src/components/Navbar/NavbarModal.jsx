import React from "react";
import Navlinks from "./Navlinks";
import { motion, AnimatePresence } from "framer-motion";
import { navAnimation } from "../../utilities/animation";

const NavlinksWrapper = () => {
  return (
    <motion.div
      variants={navAnimation}
      initial="hide"
      animate="show"
      exit="hide"
      className="absolute top-15 bg-blue-950/90 p-5 right-0 md:hidden"
    >
      <Navlinks flex="flex-col" gap="gap-3" />
    </motion.div>
  );
};

const NavbarModal = ({ closeModal }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-screen md:hidden bg-black/50"
      onClick={closeModal}
    >
      <NavlinksWrapper />
    </div>
  );
};

export default NavbarModal;
