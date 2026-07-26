"use client";
import { useRef } from "react";
import Image from "next/image";

const CLIENTS = [
  { file: "carfit.png", name: "Car Fit" },
  { file: "burger-2.png", name: "ELLZBURGER" },
  { file: "camera.png", name: "Camera Service Centre" },
  { file: "frute.png", name: "My Fruit Bowl" },
  { file: "lakeview.png", name: "Lakeview Camp" },
  { file: "pwp.png", name: "Proflex Window Profiles" },
  { file: "serene.png", name: "Serene Aquatics" },
  { file: "SVE.png", name: "Shri Venkateshwara Enterprises" },
  { file: "saravana.png", name: "Saravana Industries" },
  { file: "microbework.png", name: "Microbeworks Scientific" },
  { file: "onlyfrnz.png", name: "Only Frnz" },
  { file: "ast.png", name: "Astratec" },
  { file: "kgk.png", name: "KGK" },
  { file: "eventzr.png", name: "Eventzr" },
  { file: "vvm.png", name: "VVM Strategies & Solutions" },
];

export default function ClientLogos() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" aria-label="Clients who trust us">
      {/* Hairline top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--color-green-700)", opacity: 0.3 }}
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 mb-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <span className="font-label" style={{ color: "var(--color-green-800)" }}>07</span>
            <div className="h-px w-12" style={{ background: "var(--color-green-700)" }} />
            <span className="font-label" style={{ color: "var(--color-green-800)" }}>Customer Who Trust Us</span>
          </div>
        </div>
      </div>

      {/* Marquee — dual track for seamless loop */}
      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-green-950), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-green-950), transparent)" }}
        />

        <div className="flex" style={{ animation: "marquee 30s linear infinite" }}>
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center group"
              style={{ width: "120px", height: "60px" }}
              title={client.name}
            >
              <div
                className="relative w-full h-full transition-all duration-300 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
              >
                <img
                  src={`/images/clients/${client.file}`}
                  alt={client.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    // Hide broken images gracefully
                    e.currentTarget.parentElement.parentElement.style.display = "none";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hairline bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--color-green-700)", opacity: 0.3 }}
      />
    </section>
  );
}
