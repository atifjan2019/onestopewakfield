import { Metadata } from "next";
import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF } from "@/data/services";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | One Stop Tyres Wakefield",
  description: "Contact One Stop Tyres Wakefield for tyre fitting, mobile service, and emergency repairs. Call us now for same-day service across Wakefield and West Yorkshire.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-light/60">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-accent">Contact Us</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-light leading-tight mb-4">
            Get in Touch — <span className="text-accent">Call Us Now for Same-Day Service</span>
          </h1>

          {/* Phone number prominent */}
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-primary font-extrabold px-8 py-5 rounded-xl text-2xl md:text-3xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 mt-4"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {PHONE_NUMBER}
          </a>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-text mb-2">Send Us a Message</h2>
              <p className="text-text-muted mb-6">Fill in the form below and we&apos;ll get back to you as soon as possible.</p>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-extrabold text-text mb-6">Business Information</h2>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-text mb-1">Phone</h3>
                  <a href={PHONE_HREF} className="text-accent font-semibold text-lg hover:text-accent-hover transition-colors">
                    {PHONE_NUMBER}
                  </a>
                  <p className="text-text-muted text-sm mt-1">Call anytime during business hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-text mb-1">Location</h3>
                  <p className="text-text-muted">Wakefield, West Yorkshire</p>
                  <p className="text-text-muted text-sm mt-1">Plus mobile service across all surrounding areas</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-text mb-1">Opening Hours</h3>
                  <ul className="text-text-muted text-sm space-y-1">
                    <li className="flex justify-between gap-6"><span>Monday – Friday</span><span className="font-medium text-text">8:00am – 6:00pm</span></li>
                    <li className="flex justify-between gap-6"><span>Saturday</span><span className="font-medium text-text">8:00am – 4:00pm</span></li>
                    <li className="flex justify-between gap-6"><span>Sunday</span><span className="font-medium text-text">Emergency calls only</span></li>
                  </ul>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47428.41893595!2d-1.5264!3d53.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795e06e2640001%3A0x39f6c02b0ab13e52!2sWakefield!5e0!3m2!1sen!2suk!4v1629901000000!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="One Stop Tyres Wakefield service area"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
