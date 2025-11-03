import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-900">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Hello World</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600">
          <a href="#home" className="hover:text-zinc-900 transition-colors">Home</a>
          <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}
