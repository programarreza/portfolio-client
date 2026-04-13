"use client";

import {
  NavbarBrand,
  NavbarContent,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import Link, { default as NextLink } from "next/link";
import { useEffect, useState } from "react";


import NavbarDropdown from "./NavbarDropDown";
import NavbarLinks from "./NavbarLinks";

import { useUser } from "@/src/context/user.provider";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const { user, setIsLoading: userLoading } = useUser();

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,238,252,0.15)]">
      <div className="flex justify-between items-center px-8 h-20 max-w-screen-2xl mx-auto">
        <NextLink href="/">
          <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-headline">
            NEON_PRISM
          </div>
        </NextLink>
        <nav className="hidden md:flex items-center gap-10">
          <Link
            className="text-cyan-400 border-b-2 border-cyan-400 pb-1 font-headline tracking-tighter"
            href="#nexus"
          >
            Nexus
          </Link>
          <Link
            className="text-slate-400 hover:text-white transition-colors font-headline tracking-tighter"
            href="#artifacts"
          >
            Artifacts
          </Link>
          <Link
            className="text-slate-400 hover:text-white transition-colors font-headline tracking-tighter"
            href="#terminal"
          >
            Terminal
          </Link>
          <Link
            className="text-slate-400 hover:text-white transition-colors font-headline tracking-tighter"
            href="#pulse"
          >
            Pulse
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-slate-400 hover:bg-white/5 p-2 rounded-full transition-all">
            account_tree
          </button>
          <button className="material-symbols-outlined text-slate-400 hover:bg-white/5 p-2 rounded-full transition-all">
            deployed_code
          </button>
          <button className="bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed px-6 py-2 font-bold tracking-tighter active:scale-95 duration-200">
            Connect
          </button>
        </div>
      </div>
    </header>
  );
};
