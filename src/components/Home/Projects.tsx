"use client";

import Link from "next/link";

const Projects = () => {
  // const { data } = useGetProjects();

  const fallbackProjects = [
    {
      _id: "rentyard-01",
      title: "RENTYARD",
      description:
        "Global property rental platform with multi-role support, parking management, and secure payments via Stripe & SSLCommerz. Featuring real-time Socket.IO notifications.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAIi8lP4v1MWoT3S_Vbr9AuhJnZbJ6h9jRuCsqsjak1BYWj40mCzeSGOlYxs4OL8gEsKHKeL8h62yrW0G0naJEdXYf1D5WgFRFevjJfZrO8RC-qO74v7Qf3TO53_hs8VAdx0znMV09FN_h3QLatMHNSef4UMU1c_vO051YJJfB-VpgBRMqJJd4jF72-MBCjxWw45QXMzZvxRSpM7vt8yNKKnoizBnINhlxqv4b21dFRKU2xuVWdGY4otXULpE3e87hllnVFkjkb34oo",
      deployLink: "#",
      githubClientLink: "#",
      tech: ["NEXT.JS", "SOCKET.IO", "STRIPE", "MONGODB"],
    },
    {
      _id: "btapr-02",
      title: "BTAPR PLATFORM",
      description:
        "Subscription-based institute and employee management system with automated renewal handling, financial tracking, and dynamic CMS features.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5dZ3R4xlZhP9GoBORJlAR_1a6TSn0ONZdQkqupwhsOv2MeBK7X_CdaMWxKhJcYhMOadWlXYLoqQPn9Fj0fxOFU9hfA_jIyfeOE3f9Pn7qUZIS0c4I19Wl3q7Jq622sJ0jFZ04W_dVSZrTcscnf3msR_LhbsDIry0jy4uHMXRgT5RRv-lk7rWfmmSZ9Ha0TE8uJAGCfJDovtf9COrR3fI4-x8LgIbXVOyyL4zBSY2rA_wSxaODVYZIoaxQ7DwL0Bj2XsWlrDxKf9qO",
      deployLink: "#",
      githubClientLink: "#",
      tech: ["TYPE_SCRIPT", "NODE.JS", "PRISMA", "POSTGRES"],
    },
  ];

  // const projects = data?.data || fallbackProjects;
  const projects = fallbackProjects;

  return (
    <section className="py-32 px-8 max-w-screen-2xl mx-auto" id="artifacts">
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="label-md text-secondary tracking-[0.3em] block mb-2 font-headline uppercase text-[10px] font-bold">
            DEPLOYED_MODULES
          </span>
          <h2 className="text-4xl md:text-5xl text-white font-bold font-headline uppercase tracking-tight">
            PROJECT_ARCHIVE_01
          </h2>
        </div>
        <div className="h-px flex-grow mx-10 bg-white/5 hidden md:block" />
        <Link
          href="/projects"
          className="label-md text-cyan-400 flex items-center gap-2 hover:gap-4 transition-all font-headline uppercase text-[10px] font-bold"
        >
          FULL REPOSITORY{" "}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects?.map((project: any, index: number) => (
          <div
            key={project?._id || index}
            className="glass-prism isometric-card p-1 group"
          >
            <div className="bg-surface-container-highest/40 p-6 h-full flex flex-col">
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

              <h3 className="text-xl text-white mb-3 font-bold uppercase tracking-tight font-headline group-hover:text-cyan-400 transition-colors">
                {project?.title}
              </h3>
              <p className="text-slate-400 mb-6 text-[11px] font-body leading-relaxed line-clamp-3 opacity-60">
                {project?.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 mb-8">
                {(project?.tech || ["NEXT.JS", "TAILWIND", "NODE"]).map(
                  (t: string) => (
                    <span
                      key={t}
                      className="text-[8px] text-white/40 border border-white/5 px-2 py-0.5 rounded-sm font-headline tracking-widest uppercase bg-white/[0.02]"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>

              <div className="flex gap-4">
                <Link
                  href={project?.deployLink || "#"}
                  target="_blank"
                  className="flex-1 py-3 bg-white/5 hover:bg-cyan-500/10 border border-white/10 text-center text-[9px] font-bold tracking-[0.2em] uppercase transition-all font-headline text-slate-300 hover:text-cyan-400"
                >
                  ACCESS_LIVE
                </Link>
                <Link
                  href={project?.githubClientLink || "#"}
                  target="_blank"
                  className="flex-1 py-3 bg-white/5 hover:bg-purple-500/10 border border-white/10 text-center text-[9px] font-bold tracking-[0.2em] uppercase transition-all font-headline text-slate-300 hover:text-purple-400"
                >
                  VIEW_SOURCE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
