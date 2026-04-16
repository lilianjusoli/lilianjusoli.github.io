import { useReveal } from "@/hooks/useReveal";
import { BookOpen, Heart, Sparkles, Gift } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Encanta a infância", text: "Uma leitura leve, delicada e cheia de imaginação." },
  { icon: Heart, title: "Estimula o vínculo", text: "Perfeito para leitura compartilhada entre adultos e crianças." },
  { icon: BookOpen, title: "Valoriza a leitura", text: "Uma obra que desperta interesse, atenção e sensibilidade." },
  { icon: Gift, title: "Presente com significado", text: "Mais do que um livro — uma experiência afetiva." },
];

export const BookBenefits = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="beneficios" className="py-24 md:py-32 bg-vanilla/50">
      <div ref={ref} className="container reveal">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="font-typewriter text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Por que ler esta obra?
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-coffee leading-tight">
            Um livro que merece um lugar <em className="font-script text-gold text-5xl">na sua estante</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-card p-8 rounded-sm shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 border border-border/40 text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-vanilla mb-5 group-hover:bg-gold/20 transition-colors">
                <b.icon className="text-gold" size={24} />
              </div>
              <h3 className="font-display text-xl text-coffee mb-3">{b.title}</h3>
              <p className="font-body text-sm text-cocoa/75 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
