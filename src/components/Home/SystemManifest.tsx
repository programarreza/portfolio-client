"use client";

import { motion } from "framer-motion";

const SystemManifest = () => {
  const categories = [
    {
      title: "FRONTEND",
      items: "REACT, NEXT.JS, TAILWIND, REDUX",
    },
    {
      title: "BACKEND",
      items: "NODE.JS, EXPRESS, MONGODB, REDIS",
    },
    {
      title: "STACK",
      items: "TYPESCRIPT, POSTGRESQL, PRISMA",
    },
    {
      title: "ALTERNATOR",
      items: "AI, ROBOTIC_PROCESS, TRANSFORMER",
    },
  ];

  const gridIcons = [
    "terminal", "database", "cloud", "security",
    "analytics", "memory", "speed", "code",
    "settings_input_component"
  ];

  return (
    <section className="py-32 px-8 relative overflow-hidden" id="system-manifest">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Manifest Lists */}
        <div>
          <span className="label-md text-secondary tracking-[0.3em] block mb-4 font-headline uppercase text-xs font-bold">
            SYSTEM_CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-8 font-headline uppercase tracking-tight">
            TECHNOLOGICAL_MANIFEST
          </h2>
          <p className="text-sm text-on-surface-variant mb-12 max-w-lg font-body opacity-70 leading-relaxed">
            Specialized in building reactive, scalable architectures that leverage the latest tools
            in cloud computing, AI integration, and high-performance frontend engineering.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="space-y-2 border-l-2 border-white/10 pl-4 py-2 hover:border-primary transition-colors">
                <h3 className="text-xs text-white font-bold font-headline tracking-widest">{cat.title}</h3>
                <p className="text-[10px] text-on-surface-variant font-headline uppercase tracking-wider">{cat.items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Isometric Grid */}
        <div className="relative h-[500px] flex items-center justify-center">
          <div 
            className="grid grid-cols-3 gap-4"
            style={{ 
              transform: "perspective(1000px) rotateX(50deg) rotateZ(-45deg)",
              transformStyle: "preserve-3d"
            }}
          >
            {gridIcons.map((icon, idx) => (
              <motion.div
                key={idx}
                initial={{ translateZ: 0 }}
                whileHover={{ translateZ: 50, transition: { duration: 0.2 } }}
                className="w-24 h-24 glass-prism flex items-center justify-center volumetric-icon"
              >
                <span className="material-symbols-outlined text-primary text-3xl">
                  {icon}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Decorative background beam */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default SystemManifest;
