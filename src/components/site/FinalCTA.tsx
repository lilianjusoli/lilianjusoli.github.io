import { useReveal } from "@/hooks/useReveal";

const BUY_LINK = "#";

export const FinalCTA = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 bg-vanilla/70 relative overflow-hidden">
      <div ref={ref} className="container reveal max-w-3xl text-center relative z-10">
        <p className="font-typewriter text-xs tracking-[0.4em] text-gold uppercase mb-6">
          Leve para casa
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-coffee leading-tight mb-8">
          Uma obra de <em className="font-script text-gold text-6xl">Lilian Jusoli</em>
        </h2>
        <p className="font-editorial italic text-xl text-cocoa/80 leading-relaxed mb-10">
          Comece por <strong className="not-italic text-coffee">Quem pisou no meu pé?</strong> e
          descubra também o universo poético da autora. Uma obra pode entreter — mas uma obra bem
          escrita fica na memória.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUY_LINK}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-coffee text-primary-foreground font-editorial text-base tracking-wider hover:bg-cocoa transition-all shadow-elegant hover:scale-105"
          >
            Comprar agora
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-coffee/30 text-coffee font-editorial text-base tracking-wider hover:border-gold hover:text-gold transition-all"
          >
            Falar com a autora
          </a>
        </div>
      </div>
    </section>
  );
};
