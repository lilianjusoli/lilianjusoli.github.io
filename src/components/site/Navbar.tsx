import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#livro", label: "Livro" },
  { href: "#poemas", label: "Poemas" },
  { href: "#voz", label: "Voz" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent",
      )}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#topo" className="font-script text-3xl text-coffee leading-none">
          Lilian <span className="text-gold">Jusoli</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-editorial text-base text-coffee/80 hover:text-gold transition-colors tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#livro"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-coffee text-primary-foreground font-editorial text-sm tracking-wider hover:bg-cocoa transition-colors"
        >
          Comprar o livro
        </a>

        <button
          className="md:hidden text-coffee"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <ul className="container flex flex-col py-4 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-editorial text-lg text-coffee"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#livro"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-coffee text-primary-foreground font-editorial text-sm tracking-wider"
            >
              Comprar o livro
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};
