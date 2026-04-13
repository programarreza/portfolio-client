"use client";

import Link, { default as NextLink } from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Network", href: "#network-activity" },
    { name: "Technology", href: "#stack-badges" },
    { name: "Manifest", href: "#system-manifest" },
    { name: "About", href: "#about" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } bg-slate-950/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,238,252,0.15)]`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 h-20 max-w-screen-2xl mx-auto">
        <NextLink href="/" onClick={() => setIsMenuOpen(false)}>
          <div className="text-xl md:text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-headline">
            PORTFOLIO
          </div>
        </NextLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className="text-slate-400 hover:text-white transition-colors font-headline tracking-tighter text-sm uppercase font-medium"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/programarreza"
            target="_blank"
            className="text-slate-400 hover:text-cyan-400 transition-all p-2 rounded-full hover:bg-white/5 hidden md:flex items-center justify-center"
            title="GitHub Profile"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>
          
          <Link
            className="bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed px-6 py-2 font-bold tracking-tighter active:scale-95 duration-200 hidden md:block"
            href="#contact"
          >
            Contact
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-headline py-2 text-lg uppercase tracking-widest border-b border-white/5"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com/programarreza"
                  className="flex-1 py-4 bg-white/5 text-center text-sm font-bold uppercase tracking-widest text-slate-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GitHub
                </Link>
                <Link
                  href="#contact"
                  className="flex-1 py-4 bg-primary text-slate-950 text-center text-sm font-bold uppercase tracking-widest"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
