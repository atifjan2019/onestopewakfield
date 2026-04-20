import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF } from "@/data/services";
import ContactForm from "@/components/ContactForm";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "Contact Us | One Stop Tyres Wakefield",
  description: "Contact One Stop Tyres Wakefield for rapid tyre fitting and emergency repairs. Call now for same-day service across West Yorkshire.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "One Stop Tyres Wakefield",
          "telephone": "+441924929966",
          "image": "https://www.onestoptyreswakefield.co.uk/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Cinema House, 160 Doncaster Road",
            "addressLocality": "Wakefield",
            "postalCode": "WF1 5HL",
            "addressCountry": "UK"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+441924929966",
            "contactType": "customer service",
            "areaServed": "GB",
            "availableLanguage": "English"
          }
        }
      }} />

      {/* Hero Section */}
      <section className="relative py-8 md:py-16 lg:py-24 px-4 md:px-6 overflow-hidden min-h-[500px] flex flex-col items-center justify-center bg-gradient-to-b from-surface to-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/8 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="mx-auto max-w-7xl relative z-10 text-center w-full">
          <nav className="mb-6 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-bold text-text-muted">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li className="text-black/20">/</li>
              <li className="text-accent">Contact Us</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-text leading-[1.3em] mb-6 md:mb-8 tracking-tight">
            We&apos;re Ready to <span className="text-gradient-accent">Help.</span>
          </h1>

          {/* Primary Action */}
          <a
            href={PHONE_HREF}
            className="group relative inline-flex items-center justify-center gap-3 md:gap-4 bg-gradient-to-r from-accent to-accent-hover text-white font-black px-6 py-3 md:px-10 md:py-5 rounded-2xl text-sm md:text-base transition-all duration-300 shadow-[0_0_30px_rgba(227,30,36,0.3)] hover:shadow-[0_0_50px_rgba(227,30,36,0.5)] hover:-translate-y-1 mx-auto"
          >
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
            </span>
            {PHONE_NUMBER}
          </a>
          <p className="text-text-muted mt-6 font-medium">Call us now for immediate dispatch anywhere in West Yorkshire.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 relative z-10 bg-surface border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-3">
               <ContactForm />
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/5 shadow-sm">
                <h2 className="text-2xl font-black text-text mb-8 border-b border-black/5 pb-4">Business Information</h2>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text text-lg mb-1">Direct Line</h3>
                      <a href={PHONE_HREF} className="text-gradient-accent font-black text-2xl hover:brightness-125 transition-all">
                        {PHONE_NUMBER}
                      </a>
                      <p className="text-text-muted text-sm mt-1">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-surface border border-black/8 text-text-muted shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text text-lg mb-1">HQ Location</h3>
                      <p className="text-text-muted text-lg">Cinema House, 160 Doncaster Road<br/>Belle Vue, Wakefield WF1 5HL</p>
                      <p className="text-sm border border-accent/30 bg-accent/5 inline-block px-2 py-0.5 rounded text-accent font-semibold mt-2">Mobile Fleet Covers All Areas</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-surface border border-black/8 text-text-muted shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h3 className="font-bold text-text text-lg mb-3">Operating Hours</h3>
                      <ul className="text-text-muted space-y-2">
                        <li className="flex justify-between items-center border-b border-black/5 pb-2">
                          <span>Monday – Saturday</span><span className="font-bold text-text">9:00am – 6:00pm</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-black/5 pb-2">
                          <span>Sunday</span><span className="font-bold text-text">9:00am – 5:00pm</span>
                        </li>
                        <li className="flex justify-between items-center pt-1">
                          <span>Out of Hours</span><span className="font-black text-accent">Emergency Only</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-2 rounded-3xl overflow-hidden shadow-lg border border-black/5">
                <iframe
                  src="https://maps.google.com/maps?q=Cinema%20House,%20160%20Doncaster%20Road,%20Wakefield&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  className="rounded-2xl border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="One Stop Tyres Wakefield service area map"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
