"use client";

import { useGetProjects } from "@/src/hooks/project.hook";
import Link from "next/link";

const Projects = () => {
  const { data } = useGetProjects();
  const projects = data?.data;

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
          className="label-md text-primary-dim flex items-center gap-2 hover:gap-4 transition-all font-headline uppercase text-[10px] font-bold"
        >
          FULL REPOSITORY{" "}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects?.map((project: any, index: number) => (
          <div
            key={project?._id}
            className="glass-prism isometric-card p-1 group"
          >
            <div className="bg-surface-container-highest/40 p-6 h-full flex flex-col">
              <span className="label-md text-[8px] text-white/40 font-headline uppercase tracking-[0.3em] mb-4 block">
                PRJ_MOD_0{index + 1}
              </span>
              
              <div className="aspect-video mb-6 overflow-hidden relative border border-white/5 bg-slate-800">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={project?.image}
                  alt={project?.title}
                />
                <div
                  className={`absolute inset-0 ${index % 2 === 0 ? "bg-primary/30" : "bg-secondary/30"} mix-blend-overlay`}
                />
              </div>

              <h3 className="text-xl text-white mb-2 font-bold uppercase tracking-tight font-headline">
                {project?.title}
              </h3>
              <p className="text-on-surface-variant mb-6 text-xs font-body leading-relaxed line-clamp-2 opacity-60">
                {project?.description}
              </p>

              <div className="mt-auto flex gap-4">
                <Link
                  href={project?.deployLink}
                  target="_blank"
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-center text-[9px] font-bold tracking-[0.2em] uppercase transition-all font-headline"
                >
                  ACCESS_LIVE
                </Link>
                <Link
                  href={project?.githubClientLink}
                  target="_blank"
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-center text-[9px] font-bold tracking-[0.2em] uppercase transition-all font-headline"
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
