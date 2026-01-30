import Hero from "@/components/Hero";
import { cleanContent } from "@/data/portfolio";

export default function AboutPage() {
  const { contact, global } = cleanContent;

  return (
    <main className="min-h-screen">
      <Hero />
      
      <section className="pb-32 px-6 max-w-6xl mx-auto flex flex-col mt-32" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Text Content */}
          <div className="flex flex-col justify-end h-full">
             <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-sm">{contact.body}</p>
             <div className="space-y-2">
                <a href={`mailto:${global.email}`} className="block text-sm hover:text-gray-400 transition-colors text-[#1a1a1a]">
                  {global.email}
                </a>
                <a href={global.links.linkedin} target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-gray-400 transition-colors text-[#1a1a1a]">
                  LinkedIn
                </a>
                <a href={global.links.github} target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-gray-400 transition-colors text-[#1a1a1a]">
                  GitHub
                </a>
                <a href="/photos" className="block text-sm hover:text-gray-400 transition-colors text-[#1a1a1a]">
                  Photos
                </a>
                <a href={global.links.blog} target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-gray-400 transition-colors text-[#1a1a1a]">
                  Blog
                </a>
             </div>
          </div>

          {/* ASCII Art */}
          <div className="overflow-hidden">
            <pre className="text-[8px] md:text-[10px] leading-none font-mono text-gray-400 select-none">
              {contact.ascii}
            </pre>
            
            <p className="mt-8 text-sm text-gray-500 font-mono">
                i love cats. i have{' '}
                <span className="group relative inline-block cursor-help text-gray-800 underline decoration-dotted underline-offset-4 decoration-gray-400">
                    two of them
                    <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 rounded bg-white p-2 shadow-xl opacity-0 transition-opacity group-hover:opacity-100 border border-gray-100 z-20">
                        <img src="/cats.jpg" alt="My cats" className="w-full h-auto rounded" />
                    </div>
                </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
