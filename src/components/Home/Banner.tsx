"use client";

import { motion } from "framer-motion";

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
        <span className="label-md text-primary tracking-[0.4em] block opacity-80 mb-2 font-headline uppercase text-xs font-bold">
          MD SHAFIKUL ISLAM // ARCHITECTING THE FUTURE
        </span>

        <div className="relative w-72 h-72 mx-auto mb-12">
          {/* Square glass background */}
          <div className="absolute inset-0 rounded-full glass-prism glow-cyan animate-pulse" />

          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
            <img
              alt="User Portrait"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0ug-LuiRA70y5KTdJ9Mv0WsjwKqveO3Lq14uyQ5SWPZk9p2OXkDIWEDaSYqvOClX9CJMJbOgwmT5uZ_jaf0i7y0EyeJsXB2H5m4ojBDjyG3bKvniRHhemi9DF3TUVgfCZft_RFz9mcpF23b3gDrOdkZLLdp0TIYpw-YUJG5SGuuJELnrjUuxG7H7BPZPTGKTR8ITB7znWHRhTheeFOwxai7sTYxUdl1AG10MteWtJi-IkbY-FmWPlHqQyRz9EVqsaInKoALQgDE1STw"
            />
          </div>

          <div className="absolute bottom-12 -right-12 w-10 h-10 rounded-full glass-prism glow-purple flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-lg">
              verified
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 max-w-4xl mx-auto leading-none font-headline uppercase tracking-tight">
          ENGINEERING{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary">
            VOLUMETRIC
          </span>{" "}
          DIGITAL ARTIFACTS
        </h1>

        <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto mb-10 font-body leading-relaxed opacity-70">
          Full-stack developer focused on creating immersive, high-performance
          web environments like Rentyard and BTAPR that transcend
          two-dimensional constraints.
        </p>

        {/* <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed font-bold tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,238,252,0.4)] transition-all active:scale-95 duration-200 font-headline text-sm">
            INITIATE SEQUENCE
          </button>
          <button className="px-10 py-4 border border-secondary/40 text-secondary font-bold tracking-widest uppercase hover:bg-secondary/5 transition-all active:scale-95 duration-200 font-headline text-sm">
            VIEW RECORDS
          </button>
        </div> */}
      </div>

      {/* Floating Tech Orbs (Parallax Elements) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-52 left-10 w-24 h-24 rounded-full glass-prism glow-cyan flex items-center justify-center opacity-80"
      >
        <span className="material-symbols-outlined text-primary text-3xl">
          terminal
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-20 w-32 h-32 rounded-full glass-prism glow-purple flex items-center justify-center opacity-80"
      >
        <span className="material-symbols-outlined text-secondary text-4xl">
          database
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 w-16 h-16 rounded-full glass-prism glow-cyan flex items-center justify-center opacity-80"
      >
        <span className="material-symbols-outlined text-primary-dim text-xl">
          cloud_sync
        </span>
      </motion.div>
    </section>
  );
};

export default Banner;
