import { Metadata } from "next";
import Link from "next/link";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "About Us | One Stop Tyres Wakefield",
  description: "Learn about One Stop Tyres Wakefield — your trusted local tyre service provider. Years of experience, honest prices, and same-day service across West Yorkshire.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-light/60">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-accent">About Us</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-light leading-tight mb-4">
            About <span className="text-accent">One Stop Tyres Wakefield</span>
          </h1>
          <p className="text-text-light/80 text-lg max-w-3xl">
            Your trusted local tyre service provider — reliable, honest, and fast.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-extrabold text-text mb-4">Who We Are</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              One Stop Tyres Wakefield is a locally owned and operated tyre service business based in the heart of Wakefield, West Yorkshire. We started with a simple idea: make getting new tyres fitted as easy and hassle-free as possible. No pushy upsells, no hidden charges, and no wasted time. Just professional tyre services done right, when you need them.
            </p>

            <h2 className="text-2xl font-extrabold text-text mb-4">What We Do</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              We offer a full range of tyre services including tyre fitting, mobile tyre fitting, emergency tyre repair, puncture repair, wheel balancing, and tyre replacement. Based in Wakefield, we serve customers across the whole of West Yorkshire — from Leeds and Dewsbury to Castleford, Pontefract, Normanton, Ossett, Batley, and Horbury. Whether you come to us or we come to you, we get the job done the same day wherever possible.
            </p>

            <h2 className="text-2xl font-extrabold text-text mb-6">Why People Trust Us</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: "Years of Experience", desc: "Our team has been fitting tyres and servicing vehicles for years. We know what we're doing and we do it well." },
                { title: "Honest Pricing", desc: "The price we quote is the price you pay. We don't add hidden fees or charge for things you don't need." },
                { title: "Local Presence", desc: "We're part of the Wakefield community. When you call us, you're speaking to someone who knows your area." },
                { title: "Same-Day Reliability", desc: "Most of our services are available same-day. We understand that when you need tyres, you need them now." },
                { title: "Mobile Convenience", desc: "Can't come to us? We'll come to you. Our mobile fitting service covers all of Wakefield and surrounding areas." },
              ].map((point) => (
                <div key={point.title} className="flex items-start gap-3 bg-surface rounded-lg p-4">
                  <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-text mb-1">{point.title}</h3>
                    <p className="text-text-muted text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to Get Started?"
        subtext="Get in touch for a free quote or call us for same-day service."
      />
    </>
  );
}
