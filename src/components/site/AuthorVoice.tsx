import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

export const AuthorVoice = () => {
  const ref = useReveal<HTMLDivElement>();
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="voz"
      className="relative py-32 md:py-44 overflow-hidden"
      style={{ background: "var(--gradient-coffee)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(var(--gold)) 0%, transparent 50%)",
          transform: `translateY(${y * 0.05}px)`,
        }}
      />

      <div ref={ref} className="container reveal relative z-10 text-center max-w-4xl">
        <p className="font-typewriter text-xs tracking-[0.4em] text-gold/80 uppercase mb-8">
          A voz da autora
        </p>

        <div className="text-gold text-6xl font-display leading-none mb-4">“</div>

        <blockquote className="font-display italic text-3xl md:text-5xl text-vanilla leading-snug mb-10">
          Escrevo como quem acende uma luz suave
          <br className="hidden md:block" />
          no meio da travessia.
        </blockquote>

        <div className="flex justify-center mb-6">
          <span className="block h-px w-24 bg-gold" />
        </div>

        <p className="font-script text-3xl md:text-4xl text-gold">Lilian Jusoli</p>
      </div>
    </section>
  );
};
