import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white" />
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-medium text-indigo-700">
          <Sparkles className="h-4 w-4" />
          Fresh Start
          <span className="ml-2 rounded-full bg-indigo-600 px-2 py-0.5 text-white">v1</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
          Hello, World!
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
          A clean, modern starter to say hello to the web. Crafted with React and Tailwind for a beautiful first impression.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Explore Features
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
