import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white border border-border rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
      <div className="mt-4 text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn more
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
