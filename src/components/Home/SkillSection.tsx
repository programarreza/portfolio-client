"use client";

const SkillSection = () => {
  return (
    <section
      className="py-20 md:py-32 px-4 md:px-8 border-y border-white/5 bg-prism-background relative overflow-hidden"
      id="stack-badges"
    >
      {/* Background Dot Grid for this section specifically */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <span className="label-md text-secondary tracking-[0.3em] block mb-2 font-headline uppercase text-[10px] md:text-xs font-bold">
            SYSTEM_CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-5xl text-white font-bold font-headline uppercase tracking-tight leading-none">
            TECHNOLOGICAL_MANIFEST
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12">
          {/* Frontend Group */}
          <div className="space-y-6">
            <span className="label-md text-primary tracking-[0.2em] block text-xs font-bold opacity-80 mb-4 border-b border-primary/20 pb-2 uppercase">
              FRONTEND_STACK
            </span>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { icon: "layers", label: "Next.js" },
                { icon: "deployed_code", label: "React" },
                { icon: "code_blocks", label: "TS" },
                { icon: "format_paint", label: "Tailwind" },
                { icon: "account_tree", label: "Redux" },
                { icon: "dynamic_form", label: "Hook Form" },
              ].map((tech) => (
                <div
                  key={tech.label}
                  className="volumetric-icon p-3 rounded-xl flex flex-col items-center justify-center gap-2 text-primary group transition-all"
                  style={{ color: "#00eefc" }}
                >
                  <span className="material-symbols-outlined text-2xl md:text-3xl">
                    {tech.icon}
                  </span>
                  <span className="text-[8px] md:text-[9px] font-bold tracking-tighter uppercase whitespace-nowrap">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Group */}
          <div className="space-y-6">
            <span className="label-md text-secondary tracking-[0.2em] block text-xs font-bold opacity-80 mb-4 border-b border-secondary/20 pb-2 uppercase">
              BACKEND_CORE
            </span>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { icon: "settings_input_component", label: "Node.js" },
                { icon: "router", label: "Express" },
                { icon: "query_stats", label: "GraphQL" },
                { icon: "memory", label: "Redis" },
                { icon: "database", label: "MongoDB" },
                { icon: "link", label: "Prisma" },
                { icon: "mediation", label: "Mongoose" },
                { icon: "storage", label: "Postgres" },
              ].map((tech) => (
                <div
                  key={tech.label}
                  className="volumetric-icon p-3 rounded-xl flex flex-col items-center justify-center gap-2 text-secondary group transition-all"
                  style={{ color: "#d575ff" }}
                >
                  <span className="material-symbols-outlined text-2xl md:text-3xl">
                    {tech.icon}
                  </span>
                  <span className="text-[8px] md:text-[9px] font-bold tracking-tighter uppercase whitespace-nowrap">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Group */}
          <div className="space-y-6">
            <span className="label-md text-primary-dim tracking-[0.2em] block text-xs font-bold opacity-80 mb-4 border-b border-primary-dim/20 pb-2 uppercase">
              SYSTEM_TOOLS
            </span>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { icon: "terminal", label: "GitHub" },
                { icon: "api", label: "Postman" },
                { icon: "cloud", label: "AWS" },
                { icon: "box", label: "Docker" },
              ].map((tech) => (
                <div
                  key={tech.label}
                  className="volumetric-icon p-3 rounded-xl flex flex-col items-center justify-center gap-2 text-primary-dim group transition-all"
                  style={{ color: "#00deec" }}
                >
                  <span className="material-symbols-outlined text-2xl md:text-3xl">
                    {tech.icon}
                  </span>
                  <span className="text-[8px] md:text-[9px] font-bold tracking-tighter uppercase whitespace-nowrap">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <span className="label-md text-secondary-dim tracking-[0.2em] block text-xs font-bold opacity-80 mb-4 border-b border-secondary-dim/20 pb-2 uppercase">
              COGNITIVE_MODULES
            </span>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                { icon: "psychology", label: "Problem-Solving" },
                { icon: "groups", label: "Collaboration" },
                { icon: "schedule", label: "Time Mgmt" },
              ].map((tech) => (
                <div
                  key={tech.label}
                  className="volumetric-icon p-4 rounded-xl flex items-center gap-4 text-secondary-dim transition-all"
                  style={{ color: "#b90afc" }}
                >
                  <span className="material-symbols-outlined text-2xl md:text-3xl">
                    {tech.icon}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Subtle Background Text Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[40px] md:text-[80px] font-bold text-white/[0.02] pointer-events-none select-none tracking-tighter whitespace-nowrap">
        SYSTEM_CAPABILITIES_MANIFEST
      </div>
    </section>
  );
};

export default SkillSection;
