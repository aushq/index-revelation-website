"use client";

import { Navigation } from "@/components/navigation";

export default function PrivacyPage() {
  return (
    <div className="magical-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-accent drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/90">
          <p className="text-muted-foreground mb-8">Last updated: December 2025</p>

          <h2 className="text-2xl font-bold text-accent mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-bold text-accent mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide, maintain, and improve our services;</li>
            <li>Process transactions and send related information;</li>
            <li>Send you technical notices, updates, security alerts, and support messages;</li>
            <li>Respond to your comments, questions, and provide customer service;</li>
            <li>Communicate with you about products, services, offers, and events.</li>
          </ul>

          <h2 className="text-2xl font-bold text-accent mb-4">3. Information Sharing and Disclosure</h2>
          <p className="mb-6">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>With service providers who assist us in operating our website and conducting our business;</li>
            <li>To comply with legal obligations;</li>
            <li>To protect our rights and prevent fraud;</li>
            <li>In connection with a business transfer.</li>
          </ul>

          <h2 className="text-2xl font-bold text-accent mb-4">4. Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-accent mb-4">5. Your Rights</h2>
          <p className="mb-6">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>The right to access and update your personal information;</li>
            <li>The right to request deletion of your personal information;</li>
            <li>The right to object to or restrict certain processing;</li>
            <li>The right to data portability.</li>
          </ul>

          <h2 className="text-2xl font-bold text-accent mb-4">6. Cookies and Tracking Technologies</h2>
          <p className="mb-6">
            We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-accent mb-4">7. Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-accent mb-4">8. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us at inquires@index-revelation.com.
          </p>
        </div>
      </main>
    </div>
  );
}
