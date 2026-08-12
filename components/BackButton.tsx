type BackButtonProps = {
  href: string;
  label: string;
};

export default function BackButton({
  href,
  label,
}: BackButtonProps) {
  return (
    <div className="absolute left-6 top-24 z-30 md:left-10">
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:border-[#ff6b5f] hover:text-[#ff6b5f]"
      >
        ← {label}
      </a>
    </div>
  );
}