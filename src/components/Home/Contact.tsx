"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_w1bwd28",
          "template_whgfeza",
          form.current,
          "r47p78wRwpxxE4GAT"
        )
        .then(
          () => {
            toast.success("TRANSMISSION_COMPLETE: Message received");
            form.current?.reset();
          },
          (error) => {
            console.error("UPLINK_ERROR:", error.text);
            toast.error("UPLINK_ERROR: Check terminal for diagnostics");
          }
        );
    }
  };

  return (
    <section className="py-32 px-8 relative overflow-hidden" id="pulse">
      <div className="max-w-4xl mx-auto glass-prism p-1">
        <div className="bg-surface-container-lowest p-12 relative overflow-hidden">
          {/* Large background icon decoration */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <span className="material-symbols-outlined text-[300px] text-white">send</span>
          </div>

          <div className="relative z-10">
            <span className="label-md text-secondary tracking-[0.3em] block mb-2 font-headline uppercase text-[10px] font-bold">
              COMMUNICATIONS_PORTAL
            </span>
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-12 font-headline uppercase tracking-tight">
              KICK_A_FREQUENCY
            </h2>

            <form ref={form} className="space-y-10" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="label-md text-white/40 font-headline uppercase text-[9px] tracking-widest font-bold">
                    IDENTIFIER
                  </label>
                  <input
                    required
                    className="w-full bg-black/40 border border-white/5 focus:border-primary/50 text-white p-4 transition-all font-body text-sm outline-none placeholder:text-white/10"
                    name="user_name"
                    placeholder="ENTER_OPERATOR_NAME"
                    type="text"
                  />
                </div>

                <div className="space-y-3">
                  <label className="label-md text-white/40 font-headline uppercase text-[9px] tracking-widest font-bold">
                    UPLINK_ADDRESS
                  </label>
                  <input
                    required
                    className="w-full bg-black/40 border border-white/5 focus:border-primary/50 text-white p-4 transition-all font-body text-sm outline-none placeholder:text-white/10"
                    name="user_email"
                    placeholder="OPERATOR@DOMAIN.SYS"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="label-md text-white/40 font-headline uppercase text-[9px] tracking-widest font-bold">
                  TRANSMISSION_DATA
                </label>
                <textarea
                  required
                  className="w-full bg-black/40 border border-white/5 focus:border-primary/50 text-white p-4 h-48 transition-all font-body text-sm outline-none resize-none placeholder:text-white/10"
                  name="message"
                  placeholder="INPUT_TRANSMISSION_DATA_HERE..."
                />
              </div>

              <button
                className="w-full py-5 bg-gradient-to-r from-secondary/80 to-secondary text-prism-background font-bold tracking-[0.3em] uppercase hover:shadow-[0_0_40px_rgba(152,0,208,0.3)] active:scale-[0.98] transition-all font-headline text-xs"
                type="submit"
              >
                TRANSMIT_MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
