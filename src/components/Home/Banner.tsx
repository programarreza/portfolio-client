"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DownloadBtn from "./DownloadBtn";

const Banner = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      id="home"
    >
      {/* 3D Geometric Background Decoration */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
        <div className="w-[500px] h-[500px] border-[1px] border-primary/20 rounded-full animate-pulse absolute" />
        <div className="w-[600px] h-[600px] border-[1px] border-secondary/20 rotate-45 absolute" />
        <div className="w-[400px] h-[400px] border-[2px] border-primary-dim/30 -rotate-12 absolute" />
      </div>

      <div className="relative z-10 text-center px-6">
        <span className="label-md text-primary tracking-[0.4em] block opacity-80 mb-2 font-headline uppercase text-[10px] md:text-xs font-bold">
          MD SHAFIKUL ISLAM // ARCHITECTING THE FUTURE
        </span>

        <div className="relative w-60 h-60 md:w-72 md:h-72 mx-auto mb-12">
          {/* Square glass background */}
          <div className="absolute inset-0 rounded-full glass-prism glow-cyan animate-pulse" />

          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 mt-4">
            <img
              alt="User Portrait"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0ug-LuiRA70y5KTdJ9Mv0WsjwKqveO3Lq14uyQ5SWPZk9p2OXkDIWEDaSYqvOClX9CJMJbOgwmT5uZ_jaf0i7y0EyeJsXB2H5m4ojBDjyG3bKvniRHhemi9DF3TUVgfCZft_RFz9mcpF23b3gDrOdkZLLdp0TIYpw-YUJG5SGuuJELnrjUuxG7H7BPZPTGKTR8ITB7znWHRhTheeFOwxai7sTYxUdl1AG10MteWtJi-IkbY-FmWPlHqQyRz9EVqsaInKoALQgDE1STw"
            />
          </div>

          <div className="absolute bottom-10 -right-6 md:bottom-12 md:-right-12 w-8 h-8 md:w-10 md:h-10 rounded-full glass-prism glow-purple flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-base md:text-lg">
              verified
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-6 max-w-4xl mx-auto leading-[1.1] font-headline uppercase tracking-tight">
          ENGINEERING{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary">
            VOLUMETRIC
          </span>{" "}
          DIGITAL ARTIFACTS
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto mb-10 font-body leading-relaxed opacity-70 px-4">
          Full-stack developer focused on creating immersive, high-performance
          web environments like Rentyard and BTAPR that transcend
          two-dimensional constraints.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
          <DownloadBtn />
          <Link
            href={"https://github.com/programarreza"}
            target="_blank"
            className="w-full sm:w-auto px-10 py-4 border border-secondary/40 text-secondary font-bold tracking-widest uppercase hover:bg-secondary/5 transition-all active:scale-95 duration-200 font-headline text-xs"
          >
            VIEW_RECORDS
          </Link>
        </div>
      </div>

      {/* Floating Tech Orbs (Parallax Elements) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-4 md:top-52 md:left-10 w-16 h-16 md:w-24 md:h-24 rounded-full glass-prism glow-cyan flex items-center justify-center opacity-40 md:opacity-80"
      >
        <span className="material-symbols-outlined text-primary text-xl md:text-3xl">
          terminal
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-4 md:bottom-1/4 md:right-20 w-24 h-24 md:w-32 md:h-32 rounded-full glass-prism glow-purple flex items-center justify-center opacity-40 md:opacity-80"
      >
        <span className="material-symbols-outlined text-secondary text-2xl md:text-4xl">
          database
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-4 md:top-1/3 md:right-10 w-12 h-12 md:w-16 md:h-16 rounded-full glass-prism glow-cyan hidden sm:flex items-center justify-center opacity-40 md:opacity-80"
      >
        <span className="material-symbols-outlined text-primary-dim text-lg md:text-xl">
          cloud_sync
        </span>
      </motion.div>
    </section>
  );
};

export default Banner;
