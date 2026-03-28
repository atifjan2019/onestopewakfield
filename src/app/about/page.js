import Link from "next/link";
import CTABlock from "@/components/CTABlock";

export const metadata = {
  title: "About Us | One Stop Tyres Wakefield",
  description: "Learn about One Stop Tyres Wakefield — your trusted local tyre service provider. Years of experience, honest prices, and same-day service across West Yorkshire.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-primary min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-8 md:py-16 px-4 md:px-6 overflow-hidden min-h-[500px] flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
        <div className="mx-auto max-w-7xl relative z-10 w-full text-center">
          <nav className="mb-8 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-bold text-text-muted">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-accent">About Us</li>
            </ol>
          </nav>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.3em] mb-4 md:mb-6 tracking-tight">
              Driven by <span className="text-gradient-accent">Quality</span> & Speed.
            </h1>
            <p className="text-text-muted text-lg md:text-2xl font-medium leading-relaxed">
              We're changing the way Wakefield gets its tyres. No garages, no waiting rooms—just fast, professional service directly to you.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-16 relative z-10 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          
          <div className="space-y-12">
            <div className="glass-panel rounded-3xl p-8 md:p-10 border-l-4 border-l-accent">
              <h2 className="text-3xl font-black text-white mb-6">Who We Are</h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                One Stop Tyres Wakefield is a locally owned and operated tyre service business based in the heart of Wakefield, West Yorkshire. We started with a simple idea: make getting new tyres fitted as easy and hassle-free as possible. 
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                No pushy upsells, no hidden charges, and no wasted time. Just professional tyre services done right, when you need them.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <h2 className="text-3xl font-black text-white mb-6">What We Do</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                We offer a full range of tyre services including tyre fitting, mobile tyre fitting, emergency tyre repair, puncture repair, wheel balancing, and tyre replacement. Based in Wakefield, we serve customers across the whole of West Yorkshire — from Leeds and Dewsbury to Castleford, Pontefract, Normanton, Ossett, Batley, and Horbury. 
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-white mb-8">Why People Trust Us</h2>
            <div className="space-y-6">
              {[
                { title: "Years of Experience", desc: "Our team has been fitting tyres and servicing vehicles for years. We know what we're doing and we do it well." },
                { title: "Honest Pricing", desc: "The price we quote is the price you pay. We don't add hidden fees or charge for things you don't need." },
                { title: "Local Presence", desc: "We're part of the Wakefield community. When you call us, you're speaking to someone who knows your area." },
                { title: "Same-Day Reliability", desc: "Most of our services are available same-day. We understand that when you need tyres, you need them now." },
                { title: "Mobile Convenience", desc: "Can't come to us? We'll come to you. Our mobile fitting service covers all of Wakefield and surrounding areas." },
              ].map((point, i) => (
                <div key={point.title} className="glass-panel rounded-2xl p-6 flex items-start gap-4 group hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 group-hover:scale-110 transition-transform">
                    <span className="text-accent font-black text-lg">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">{point.title}</h3>
                    <p className="text-text-muted leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Experience the Difference."
        subtext="Get in touch for a free quote or call us for lightning-fast same-day service."
      />
    </div>
  );
}
