import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <motion.header
      className="h-16 fixed w-full bg-white "
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.6,
          duration: 0.6,
        },
      }}
    >
      <nav className="h-full w-full max-w-[1230px] px-5 mx-auto flex justify-between items-center">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <Button>Login</Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
