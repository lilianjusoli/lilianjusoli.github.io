import { useEffect, useState } from "react";

export const Hero = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="topo"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-vanilla)" }}
    >
      {/* Parallax decorative ornaments */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)",
          transform: `translateY(${y * 0.15}px)`,
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-32 w-[32rem] h-[32rem] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--cocoa)) 0%, transparent 70%)",
          transform: `translateY(${-y * 0.1}px)`,
        }}
      />

      <div className="container relative z-10 text-center px-4 py-32">
        <p className="font-typewriter text-xs md:text-sm tracking-[0.4em] text-cocoa/70 uppercase mb-8 animate-fade-in">
          Autora · Poetisa · Voz Feminina
        </p>

        <div className="flex justify-center mb-2 animate-fade-in">
          <span className="block h-px w-16 bg-gold/60" />
        </div>

        <h1 className="font-script text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] text-coffee leading-[0.95] animate-fade-up">
          Lilian
          <span className="block text-gradient-gold -mt-4 md:-mt-8">Jusoli</span>
        </h1>

        <div className="flex justify-center mt-4 mb-8 animate-fade-in">
          <span className="block h-px w-24 bg-gold/60" />
        </div>

        <p className="font-editorial italic text-xl md:text-2xl text-cocoa/80 max-w-2xl mx-auto leading-relaxed animate-fade-up">
          Poesia, presença e perfume —
          <br className="hidden sm:block" />
          palavras que tocam como vento.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <a
            href="#livro"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-coffee text-primary-foreground font-editorial text-base tracking-wider hover:bg-cocoa transition-all shadow-elegant hover:scale-105"
          >
            Comprar o livro
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-coffee/30 text-coffee font-editorial text-base tracking-wider hover:border-gold hover:text-gold transition-all"
          >
            Conhecer a autora
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cocoa/50 font-typewriter text-xs tracking-widest animate-fade-in">
        ↓ desça devagar
      </div>
    </section>
  );
};
