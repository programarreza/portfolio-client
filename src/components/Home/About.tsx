"use client";

import { motion } from "framer-motion";

const About = () => {
  const myImage = "/my-img.png";

  return (
    <section
      className="py-24 bg-[#0A0A0B] text-white relative overflow-hidden"
      id="about"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative group"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Technical Frame */}
              <div className="absolute inset-0 border border-cyan-500/20 rotate-6 rounded-[2rem] transition-transform group-hover:rotate-12 duration-500" />
              <div className="absolute inset-0 border border-purple-500/10 -rotate-3 rounded-[2.5rem] transition-transform group-hover:-rotate-6 duration-500" />

              <div className="relative w-full h-full rounded-[2rem] overflow-hidden glass-prism p-1">
                <div className="w-full h-full bg-slate-900 overflow-hidden rounded-[1.8rem]">
                  <img
                    alt="Md Shafikul Islam Profile"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={myImage}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="label-md text-cyan-400 tracking-[0.4em] block mb-4 font-headline uppercase text-xs font-bold">
              BIOS_MANIFEST
            </span>
            <h2 className="text-3xl md:text-5xl text-white font-bold mb-8 font-headline uppercase tracking-tight leading-tight">
              About <span className="text-purple-400">Me</span>
            </h2>

            <div className="space-y-6 text-sm md:text-base text-slate-400 font-body leading-relaxed md:leading-loose tracking-wide opacity-80">
              <p>
                As a passionate{" "}
                <span className="text-white font-medium">
                  Full Stack Developer
                </span>
                , I specialize in architecting robust digital environments using{" "}
                <span className="text-cyan-400">
                  Next.js, TypeScript, Node.js, and GraphQL
                </span>
                . My expertise lies in crafting scalable, high-performance
                applications that bridge the gap between complex backend logic
                and seamless user experiences.
              </p>
              <p>
                From building decentralized property management systems to
                subscription-based financial platforms, I thrive on turning
                intricate requirements into modular, maintainable code. I focus
                on optimizing performance, ensuring strict type safety, and
                delivering professional digital artifacts that transcend
                standard expectations.
              </p>
              <p>
                I am deeply committed to structure and order, bringing a
                disciplined "judging" trait to my development workflow. I pride
                myself on reliability, meeting deadlines, and contributing to
                well-organized, collaborative team environments where
                engineering excellence is the priority.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-12">
              <div>
                <div className="text-2xl font-bold text-white font-headline">
                  BANG_ENG
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                  Languages
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-headline">
                  3+ YRS
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                  Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
