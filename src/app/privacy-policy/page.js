export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for One Stop Tyres Wakefield. Understand how we securely collect and process your digital data alongside service bookings.",
  alternates: { canonical: "/privacy-policy" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-black text-text mb-8 tracking-tight">Privacy Policy</h1>
        
        <div className="space-y-6 text-text-muted leading-relaxed font-medium">
          <p>
            Welcome to One Stop Tyres Wakefield. Your privacy is critically important to us. We respect your privacy regarding any information we may collect while operating our website and providing our mobile tyre fitting services.
          </p>
          
          <h2 className="text-2xl font-bold text-text mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We only collect personal information when we truly need it to provide a service to you. This includes data collected through our booking forms, contact inquiries, and phone communications. Such data usually involves your name, contact number, vehicle registration, and location for mobile fitting dispatch.
          </p>
          
          <h2 className="text-2xl font-bold text-text mt-8 mb-4">2. How We Use Your Data</h2>
          <p>
            We use the data collected strictly for fulfilling our tyre fitting and automotive services. Your contact information is used to schedule appointments, dispatch technicians to your correct location, and provide essential service updates.
          </p>
          
          <h2 className="text-2xl font-bold text-text mt-8 mb-4">3. Data Sharing and Protection</h2>
          <p>
            We do not share, sell, or trade your personal information with third parties. Your data is stored securely and is only accessible to authorized personnel necessary for completing your booked services. 
          </p>
          
          <h2 className="text-2xl font-bold text-text mt-8 mb-4">4. Your Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you, or to request the deletion of your data once our service contract is fulfilled.
          </p>
          
          <h2 className="text-2xl font-bold text-text mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy or how we handle your data, please contact our team directly via our primary contact number.
          </p>

          <p className="pt-8 text-sm opacity-60">Last updated: April 2026</p>
        </div>
      </div>
    </div>
  );
}
