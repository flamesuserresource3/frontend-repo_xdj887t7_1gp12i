import { Star, CheckCircle2, Shield } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Beautiful by default",
    desc: "Thoughtful spacing, clean typography, and subtle gradients come out of the box.",
  },
  {
    icon: CheckCircle2,
    title: "Ready to ship",
    desc: "Fully wired to a modern toolchain so you can focus on what matters.",
  },
  {
    icon: Shield,
    title: "Reliable foundation",
    desc: "Built with best practices for accessible, responsive experiences.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Why you'll love it</h2>
          <p className="mt-2 text-zinc-600">Simple, elegant, and effective.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
