import Link from "next/link";
import ServiceIcon from "./ServiceIcon";


export default function ServiceCard({ icon, title, description, href }) {
  return (
    <Link
      href={href}
      className="group glass-panel glass-panel-hover rounded-2xl p-8 relative overflow-hidden flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/4 -translate-y-1/4 group-hover:opacity-10 transition-opacity duration-500">
        <ServiceIcon name={icon} className="w-32 h-32 text-accent" />
      </div>
      
      <div className="mb-6 relative z-10">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(227,30,36,0.2)] transition-all duration-300">
          <ServiceIcon name={icon} className="w-8 h-8 text-accent transform group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-text-muted transition-all duration-300">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">{description}</p>
        
        <div className="mt-auto inline-flex items-center gap-2 text-accent font-bold text-sm tracking-wide">
          <span className="relative">
            Learn more
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300"></span>
          </span>
          <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
