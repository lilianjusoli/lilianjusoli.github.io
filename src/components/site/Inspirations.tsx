import { useReveal } from "@/hooks/useReveal";

export const Inspirations = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container reveal max-w-4xl text-center">
        <p className="font-typewriter text-xs tracking-[0.4em] text-gold uppercase mb-6">
          Inspirações
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-coffee leading-tight mb-8">
          O que molda a atmosfera da obra
        </h2>
        <p className="font-body text-lg md:text-xl text-cocoa/85 leading-relaxed">
          Lilian encontra inspiração na <strong className="text-coffee">leitura</strong>, na{" "}
          <strong className="text-coffee">caminhada</strong>, na{" "}
          <strong className="text-coffee">música brasileira</strong>, na observação do cotidiano e na
          beleza das coisas simples. Sua sensibilidade dialoga com a delicadeza da MPB, com a emoção
          dos grandes intérpretes e com a força silenciosa da palavra bem colocada.
        </p>

        <div className="flex justify-center mt-10">
          <span className="block h-px w-24 bg-gold/60" />
        </div>
      </div>
    </section>
  );
};
