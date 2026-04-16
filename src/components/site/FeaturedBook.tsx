import { useReveal } from "@/hooks/useReveal";

const BUY_LINK = "#"; // TODO: substituir pelo link real da loja

export const FeaturedBook = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="livro" className="relative py-24 md:py-36 bg-background">
      <div ref={ref} className="container reveal">
        <div className="text-center mb-16">
          <p className="font-typewriter text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Livro em destaque
          </p>
          <div className="flex justify-center mb-6">
            <span className="block h-px w-24 bg-gold/60" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-coffee">
            Uma estreia delicada para encantar a infância
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Cover placeholder — título em cursiva grande sobre fundo branco */}
          <div className="order-2 md:order-1">
            <div className="aspect-[3/4] bg-card shadow-elegant rounded-sm relative overflow-hidden flex items-center justify-center p-10">
              <div className="absolute inset-5 border border-gold/30" />
              <div className="text-center relative z-10">
                <p className="font-typewriter text-[10px] tracking-[0.4em] text-cocoa/50 uppercase mb-6">
                  Lilian Jusoli
                </p>
                <h3 className="font-script text-5xl sm:text-6xl text-coffee leading-[1.05]">
                  Quem pisou
                  <span className="block text-gradient-gold">no meu pé?</span>
                </h3>
                <div className="flex justify-center mt-6 mb-6">
                  <span className="block h-px w-16 bg-gold/60" />
                </div>
                <p className="font-editorial italic text-cocoa/70 text-sm">
                  uma história infantil
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 md:order-2">
            <h3 className="font-display text-4xl md:text-5xl text-coffee leading-tight mb-6">
              Quem pisou <em className="font-script text-gold text-5xl md:text-6xl">no meu pé?</em>
            </h3>

            <p className="font-body text-lg text-cocoa/85 leading-relaxed mb-5">
              Uma história infantil delicada, divertida e encantadora, criada para despertar
              imaginação, curiosidade e afeto.
            </p>
            <p className="font-body text-lg text-cocoa/85 leading-relaxed mb-5">
              Com linguagem sensível e atmosfera lúdica, o livro convida crianças e famílias a
              mergulharem em uma leitura leve, expressiva e cheia de imaginação.
            </p>
            <p className="font-editorial italic text-xl text-coffee mb-10">
              Mais do que um livro — uma experiência afetiva para presentear, ler junto e guardar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BUY_LINK}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-coffee text-primary-foreground font-editorial text-base tracking-wider hover:bg-cocoa transition-all shadow-elegant hover:scale-105"
              >
                Quero comprar agora
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-coffee/30 text-coffee font-editorial text-base tracking-wider hover:border-gold hover:text-gold transition-all"
              >
                Ver detalhes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
