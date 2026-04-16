import { useReveal } from "@/hooks/useReveal";

const words = [
  "café", "baunilha", "patchouli", "MPB", "leitura",
  "encanto", "poesia", "presença", "memória", "delicadeza",
];

export const Universe = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-28 bg-vanilla/60">
      <div ref={ref} className="container reveal text-center">
        <p className="font-typewriter text-xs tracking-[0.4em] text-gold uppercase mb-6">
          O universo Lilian Jusoli
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-coffee mb-12">
          Uma marca feita de <em className="font-script text-gold text-5xl">alma e perfume</em>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
          {words.map((w, i) => (
            <span
              key={i}
              className="font-editorial italic text-xl md:text-2xl text-cocoa/75"
            >
              {w}
              {i < words.length - 1 && <span className="text-gold ml-8">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
