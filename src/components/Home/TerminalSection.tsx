"use client";

import { motion } from "framer-motion";

const TerminalSection = () => {
  return (
    <section className="py-24 px-8 bg-surface-container-high/30 border-y border-white/5" id="terminal">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="label-md text-primary tracking-[0.3em] block mb-4 font-headline uppercase text-xs">
            SYSTEM_ANALYSIS
          </span>
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-8 font-headline uppercase tracking-tight">
            TECHNOLOGICAL_OVERLAYS
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="p-3 glass-prism glow-cyan text-primary">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 font-headline uppercase tracking-wider text-sm">Real-time Visualization</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Implementing complex data charts and telemetry dashboards using D3.js and Recharts for maximum clarity.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="p-3 glass-prism glow-purple text-secondary">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 font-headline uppercase tracking-wider text-sm">Hardened Protocols</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Securing application logic with JWT-based authentication, role-based access controls, and sanitized data pipelines.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="p-3 glass-prism glow-cyan text-primary-dim">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 font-headline uppercase tracking-wider text-sm">Low-Latency Compute</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  Optimizing serverless functions and edge caching for sub-100ms response times across global regions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative glass-prism p-1">
          <div className="bg-slate-950 p-6 font-mono text-[10px] md:text-xs leading-relaxed overflow-hidden">
            <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="ml-4 text-slate-500 uppercase tracking-widest px-2 bg-white/5">diagnostics.log</span>
            </div>
            <div className="space-y-1">
              <div className="text-cyan-400">13:19:42 [INFO] Initializing Prism Core...</div>
              <div className="text-slate-500">13:19:43 [DEBUG] Calibrating volumetric projection units...</div>
              <div className="text-purple-400">13:19:44 [WARN] Secondary glow buffer at 84% capacity.</div>
              <div className="text-slate-500">13:19:45 [DEBUG] Handshaking with AWS edge nodes...</div>
              <div className="text-green-400">13:19:46 [SUCCESS] Secure uplink established via TLS 1.3</div>
              <div className="text-slate-500">13:19:47 [INFO] Monitoring pulse frequency [0.85 Hz]</div>
              <div className="text-cyan-400">13:19:48 [INFO] Injecting global theme tokens...</div>
              <div className="text-cyan-400 animate-pulse">13:19:49 [RUNNING] Listening for incoming transmissions_</div>
            </div>
          </div>
          {/* Diagnostic Overlay Decoration */}
          <div className="absolute -bottom-8 -right-8 glass-prism p-4 hidden md:block">
            <div className="text-[10px] text-cyan-400 font-bold mb-1">UPTIME_99.99%</div>
            <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="h-full bg-cyan-400 shadow-[0_0_10px_#00eefc]" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
