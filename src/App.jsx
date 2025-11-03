import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <section id="about" className="bg-zinc-50 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight">About this page</h2>
            <p className="mt-3 text-zinc-600">
              This is a friendly hello to the web. It uses a few small, focused components to keep things organized and easy to expand later.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
