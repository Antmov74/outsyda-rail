export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Outsyda Rail. Luxury rail journeys worldwide.
        </p>
      </div>
    </footer>
  );
}