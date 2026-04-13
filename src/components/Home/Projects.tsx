"use client";

import Link from "next/link";

const Projects = () => {
  // const { data } = useGetProjects();
  const fileUrl = "/rentyard-1.png";
  const fileUrl2 = "/btapr-1.png";

  const fallbackProjects = [
    {
      _id: "rentyard-01",
      title: "RENTYARD",
      description:
        "Global property rental platform with multi-role support, parking management, and secure payments via Stripe & SSLCommerz. Featuring real-time Socket.IO notifications.",
      image: fileUrl,
      deployLink: "https://rentyard.com/",
      githubClientLink: "#",
      tech: [
        "NEXT.JS",
        "TAILWIND",
        "TYPESCRIPT",
        "SOCKET.IO",
        "STRIPE",
        "SSLCOMMERZ",
        "MONGODB",
        "MONGOOSE",
        "REDIS",
      ],
    },
    {
      _id: "btapr-02",
      title: "BTAPR PLATFORM",
      description:
        "Subscription-based institute and employee management system with automated renewal handling, financial tracking, and dynamic CMS features.",
      image: fileUrl2,
      deployLink: "https://btapr.org/",
      githubClientLink: "#",
      tech: [
        "NEXT.JS",
        "TAILWIND",
        "TYPESCRIPT",
        "SOCKET.IO",
        "MONGODB",
        "MONGOOSE",
      ],
    },
  ];

  // const projects = data?.data || fallbackProjects;
  const projects = fallbackProjects;

  return (
    <section
      className="py-20 md:py-32 px-4 md:px-8 max-w-screen-2xl mx-auto"
      id="projects"
    >
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="label-md text-secondary tracking-[0.3em] block mb-2 font-headline uppercase text-[10px] md:text-xs font-bold">
            DEPLOYED_MODULES
          </span>
          <h2 className="text-3xl md:text-5xl text-white font-bold font-headline uppercase tracking-tight leading-none">
            PROJECT_ARCHIVE
          </h2>
        </div>
        <div className="h-px flex-grow mx-4 md:mx-10 bg-white/5 hidden md:block" />
        <Link
          href="https://github.com/programarreza"
          className="label-md text-cyan-400 flex items-center gap-2 hover:gap-4 transition-all font-headline uppercase text-[10px] font-bold"
          target="_blank"
        >
          FULL REPOSITORY{" "}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects?.map((project: any, index: number) => (
          <div
            key={project?._id || index}
            className="glass-prism isometric-card p-0.5 md:p-1 group h-full"
          >
            <div className="relative z-10 bg-surface-container-highest/40 p-5 md:p-6 h-full flex flex-col">
              <span className="label-md text-[8px] text-white/40 font-headline uppercase tracking-[0.3em] mb-4 block">
                PRJ_MOD_0{index + 1}
              </span>

              <div className="aspect-video mb-6 overflow-hidden relative border border-white/5 bg-slate-900">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project?.image}
                  alt={project?.title}
                />
                <div
                  className={`absolute inset-0 ${index % 2 === 0 ? "bg-cyan-500/10" : "bg-purple-500/10"} mix-blend-overlay group-hover:opacity-0 transition-opacity`}
                />
                {/* Technical Overlay */}
                <div className="absolute top-2 right-2 flex gap-1">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                </div>
              </div>

              <h3 className="text-lg md:text-xl text-white mb-3 font-bold uppercase tracking-tight font-headline group-hover:text-cyan-400 transition-colors">
                {project?.title}
              </h3>
              <p className="text-white mb-6 text-[10px] md:text-[11px] font-body leading-relaxed line-clamp-3 opacity-60">
                {project?.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5 md:gap-2 mb-8">
                {project?.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-[7px] md:text-[8px] text-white border border-white/5 px-2 py-0.5 rounded-sm font-headline tracking-widest uppercase bg-white/[0.02]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href={project?.deployLink || "#"}
                  target="_blank"
                  className="relative z-20 flex-1 py-3 border border-white/10 bg-white/5 hover:bg-cyan-500/10 text-center text-[9px] font-bold tracking-[0.2em] uppercase transition-all font-headline text-slate-300 hover:text-cyan-400 cursor-pointer"
                >
                  ACCESS_LIVE
                </Link>
                {/* <Link
                  href={project?.githubClientLink || "#"}
                  target="_blank"
                  className="flex-1 py-3 bg-white/5 hover:bg-purple-500/10 border border-white/10 text-center text-[9px] font-bold tracking-[0.2em] uppercase transition-all font-headline text-slate-300 hover:text-purple-400"
                >
                  VIEW_SOURCE
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
