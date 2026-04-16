import { useReveal } from "@/hooks/useReveal";

export const About = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-vanilla/40">
      <div ref={ref} className="container reveal">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm bg-gradient-to-br from-nude to-vanilla shadow-elegant flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 border border-gold/40" />
              <div className="text-center px-8">
                <p className="font-typewriter text-xs tracking-[0.3em] text-cocoa/60 uppercase mb-4">
                  retrato
                </p>
                <p className="font-script text-5xl text-coffee">Lilian</p>
                <p className="font-editorial italic text-cocoa/70 mt-2">a mulher que escreve</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/60 rounded-sm -z-0 hidden md:block" />
          </div>

          {/* Text */}
          <div>
            <p className="font-typewriter text-xs tracking-[0.4em] text-gold uppercase mb-6">
              Sobre a autora
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-coffee leading-tight mb-8">
              Uma voz entre o cuidado <em className="font-script text-gold text-5xl md:text-6xl">e o encanto</em>
            </h2>

            <div className="space-y-5 font-body text-lg text-cocoa/85 leading-relaxed">
              <p>
                Lilian Debora de Oliveira Martins, conhecida artisticamente como{" "}
                <strong className="text-coffee">Lilian Jusoli</strong>, é uma mulher de presença sensível,
                palavra refinada e alma contemplativa.
              </p>
              <p>
                Carioca, mãe, esposa, filha, irmã, técnica de enfermagem e estudante de enfermagem,
                Lilian é também leitora ávida e escritora em constante expansão. Sua relação com a
                literatura nasce do olhar atento para a vida e da escuta profunda da emoção humana.
              </p>
              <p className="font-editorial italic text-xl text-coffee">
                Ela escreve como quem toca a alma com delicadeza.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="block h-px w-16 bg-gold" />
              <span className="font-typewriter text-xs tracking-[0.3em] text-cocoa/60 uppercase">
                desde sempre, por vocação
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
