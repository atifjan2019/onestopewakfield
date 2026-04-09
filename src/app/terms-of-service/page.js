export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for utilizing the mobile tyre fitting and garage services provided by One Stop Tyres Wakefield.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-primary min-h-screen pt-32 pb-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border-accent/10">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Terms of Service</h1>
        
        <div className="space-y-6 text-text-muted leading-relaxed font-medium">
          <p>
            By accessing the website and utilizing the services of One Stop Tyres Wakefield, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Provision of Services</h2>
          <p>
            One Stop Tyres Wakefield agrees to provide tyre fitting, puncture repairs, wheel balancing, and emergency roadside assistance as agreed upon during your booking. We operate dynamically and endeavor to meet every appointment promptly; however, dispatch times may vary strictly depending on road conditions and operational capacity.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Pricing & Payments</h2>
          <p>
            All price quotes provided via phone or our digital platforms are inclusive of standard fitting and balancing unless stated otherwise. Payments must be settled in full upon completion of the service on-site.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Warranties & Guarantees</h2>
          <p>
            New tyres supplied are covered by standard manufacturer warranties. Puncture repairs are guaranteed provided the original tyre casing was viable according to British standards governing tyre safety repairs. 
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Liability</h2>
          <p>
            While our technicians act with absolute care and professionalism, we are not liable for pre-existing damage to wheels, alloys, or locking wheel nuts that prove defective or stripped prior to our intervention.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Amendments</h2>
          <p>
            We reserve the right to modify these terms at our discretion. Any alterations will be effective immediately upon posting to this page.
          </p>

          <p className="pt-8 text-sm opacity-60">Last updated: April 2026</p>
        </div>
      </div>
    </div>
  );
}
