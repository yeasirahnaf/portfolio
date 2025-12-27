import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      <div className="flex flex-col gap-20 md:gap-32 pb-20">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900/50">
        <p>© {new Date().getFullYear()} Yeasir Ahnaf Asif. All rights reserved.</p>
        <p className="mt-2">Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}
