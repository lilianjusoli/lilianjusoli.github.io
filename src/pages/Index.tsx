import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { FeaturedBook } from "@/components/site/FeaturedBook";
import { BookBenefits } from "@/components/site/BookBenefits";
import { PoemsGrid } from "@/components/site/PoemsGrid";
import { AuthorVoice } from "@/components/site/AuthorVoice";
import { Universe } from "@/components/site/Universe";
import { Inspirations } from "@/components/site/Inspirations";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <FeaturedBook />
      <BookBenefits />
      <PoemsGrid />
      <AuthorVoice />
      <Universe />
      <Inspirations />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
