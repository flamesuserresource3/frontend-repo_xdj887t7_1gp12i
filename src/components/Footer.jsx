export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-zinc-600">
        <p>
          © {year} Hello World — Made with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
