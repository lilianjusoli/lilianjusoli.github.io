import { useState } from "react";
import { poems, type Poem } from "@/data/poems";
import { useReveal } from "@/hooks/useReveal";
import { PoemModal } from "./PoemModal";

export const PoemsGrid = () => {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<Poem | null>(null);

  return (
    <section id="poemas" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container reveal">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-typewriter text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Poemas e poesias
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-coffee leading-tight mb-6">
            Poemas que habitam <em className="font-script text-gold text-5xl">o silêncio</em>
          </h2>
          <p className="font-editorial italic text-lg text-cocoa/75">
            Entre um gesto e outro, entre a lucidez e o encanto, nascem poemas que traduzem
            travessias e delicadezas da alma.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {poems.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="group text-left bg-card border border-border/50 rounded-sm overflow-hidden shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              {/* "Thumbnail" — só o título em cursiva grande no fundo branco */}
              <div className="aspect-[4/3] bg-card flex items-center justify-center p-6 border-b border-border/40 relative overflow-hidden">
                <div className="absolute inset-3 border border-gold/20 group-hover:border-gold/50 transition-colors" />
                <h3 className="font-script text-3xl md:text-4xl text-coffee text-center leading-tight relative z-10 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="font-editorial italic text-cocoa/80 leading-relaxed mb-4">
                  {p.excerpt}
                </p>
                <span className="inline-flex items-center font-typewriter text-xs tracking-[0.3em] text-gold uppercase group-hover:tracking-[0.4em] transition-all">
                  ler poema →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <PoemModal poem={active} onClose={() => setActive(null)} />
    </section>
  );
};
