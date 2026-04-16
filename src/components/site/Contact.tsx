import { useReveal } from "@/hooks/useReveal";
import { Instagram, MessageCircle, Mail } from "lucide-react";

const channels = [
  { icon: Instagram, label: "Instagram", value: "@lilianjusoli", href: "https://instagram.com/lilianjusoli" },
  { icon: MessageCircle, label: "WhatsApp", value: "Mensagem direta", href: "#" },
  { icon: Mail, label: "E-mail", value: "contato@lilianjusoli.com", href: "mailto:contato@lilianjusoli.com" },
];

export const Contact = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container reveal max-w-4xl text-center">
        <p className="font-typewriter text-xs tracking-[0.4em] text-gold uppercase mb-6">
          Contato
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-coffee leading-tight mb-6">
          Vamos <em className="font-script text-gold text-6xl">conversar?</em>
        </h2>
        <p className="font-body text-lg text-cocoa/80 max-w-2xl mx-auto mb-14">
          Para parcerias, convites, leitura de obras, projetos autorais ou contato institucional,
          utilize os canais abaixo.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-card border border-border/50 rounded-sm p-8 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-vanilla mb-5 group-hover:bg-gold/20 transition-colors">
                <c.icon className="text-gold" size={22} />
              </div>
              <p className="font-typewriter text-xs tracking-[0.3em] text-cocoa/60 uppercase mb-2">
                {c.label}
              </p>
              <p className="font-editorial text-lg text-coffee">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
