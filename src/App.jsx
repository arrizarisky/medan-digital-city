import Home from "@/pages/Home";
export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
          React + Vite + Tailwind CSS
        </p>
        <Home />
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Project sudah siap dipakai dengan React, Vite, dan Tailwind CSS.
        </p>
      </section>
    </main>
  );
}
