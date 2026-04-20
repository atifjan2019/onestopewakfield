
export default function TestimonialCard({ text, name, rating }) {
  // Generate avatars deterministically based on name length to give a premium feel
  const avatarIndex = name.length % 5;
  const colors = [
    "from-accent/80 to-accent-hover",
    "from-red-500 to-accent",
    "from-rose-600 to-red-800",
    "from-neutral-500 to-neutral-700",
    "from-red-700 to-neutral-800",
  ];
  const bgGradient = colors[avatarIndex];
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="bg-white group rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl border border-black/5 hover:border-accent/15 flex flex-col h-full">
      {/* Decorative Quote Mark */}
      <div className="absolute top-4 right-6 text-[80px] font-serif text-black/[0.03] leading-none select-none pointer-events-none group-hover:text-accent/[0.06] transition-colors duration-500">
        &ldquo;
      </div>

      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-amber-500" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-text-muted text-[15px] leading-relaxed mb-8 flex-1 italic relative z-10">
        &ldquo;{text}&rdquo;
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${bgGradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
          {initial}
        </div>
        <div>
          <p className="text-text font-bold text-sm tracking-wide">{name}</p>
          <p className="text-accent text-xs font-semibold mt-0.5 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            Verified Customer
          </p>
        </div>
      </div>
    </div>
  );
}
