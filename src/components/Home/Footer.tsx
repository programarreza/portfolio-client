import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-slate-950 shadow-[0_-10px_40px_rgba(152,0,208,0.1)]">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-screen-2xl mx-auto">
        <div className="font-headline text-[10px] uppercase tracking-[0.2em] text-slate-500">
          © 2024 VOLUMETRIC_DEV. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-12">
          <a
            className="font-headline text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-400 hover:tracking-[0.3em] transition-all duration-500"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-headline text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-400 hover:tracking-[0.3em] transition-all duration-500"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-headline text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-400 hover:tracking-[0.3em] transition-all duration-500"
            href="#"
          >
            Layers
          </a>
          <a
            className="font-headline text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-400 hover:tracking-[0.3em] transition-all duration-500"
            href="#"
          >
            Codepen
          </a>
        </div>
        <div className="flex items-center gap-4 text-purple-500">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="font-headline text-[10px] uppercase tracking-[0.2em]">
            System Status: Optimal
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
