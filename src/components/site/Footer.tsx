export const Footer = () => {
  return (
    <footer className="bg-coffee text-vanilla py-14">
      <div className="container text-center">
        <p className="font-script text-4xl text-gold mb-2">Lilian Jusoli</p>
        <p className="font-editorial italic text-base text-vanilla/70 mb-6">
          Poesia, presença e perfume.
        </p>
        <div className="flex justify-center mb-6">
          <span className="block h-px w-24 bg-gold/40" />
        </div>
        <p className="font-typewriter text-xs tracking-[0.3em] text-vanilla/50 uppercase">
          © {new Date().getFullYear()} Lilian Jusoli · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};
