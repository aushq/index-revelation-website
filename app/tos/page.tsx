"use client";

import { Navigation } from "@/components/navigation";

export default function TOSPage() {
  return (
    <div className="magical-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-accent drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/90">
          <p className="text-muted-foreground mb-8">Last updated: December 2025</p>

          <h2 className="text-2xl font-bold text-accent mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing and using Index Revelation ("the Game"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold text-accent mb-4">2. Use License</h2>
          <p className="mb-6">
            Permission is granted to temporarily download one copy of the Game for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained in the Game;</li>
            <li>remove any copyright or other proprietary notations from the materials.</li>
          </ul>

          <h2 className="text-2xl font-bold text-accent mb-4">3. User Conduct</h2>
          <p className="mb-6">
            You agree not to use the Game to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>violate any applicable laws or regulations;</li>
            <li>infringe on the rights of others;</li>
            <li>distribute harmful or malicious content;</li>
            <li>engage in any form of harassment or abusive behavior.</li>
          </ul>

          <h2 className="text-2xl font-bold text-accent mb-4">4. Disclaimer</h2>
          <p className="mb-6">
            The materials on the Game are provided on an 'as is' basis. Index Revelation makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold text-accent mb-4">5. Limitations</h2>
          <p className="mb-6">
            In no event shall Index Revelation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Game, even if Index Revelation or a Index Revelation authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold text-accent mb-4">6. Accuracy of Materials</h2>
          <p className="mb-6">
            The materials appearing in the Game could include technical, typographical, or photographic errors. Index Revelation does not warrant that any of the materials on its Game are accurate, complete, or current. Index Revelation may make changes to the materials contained in the Game at any time without notice.
          </p>

          <h2 className="text-2xl font-bold text-accent mb-4">7. Modifications</h2>
          <p className="mb-6">
            Index Revelation may revise these terms of service for the Game at any time without notice. By using this Game you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-bold text-accent mb-4">8. Governing Law</h2>
          <p className="mb-6">
            These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>

          <p className="text-accent font-semibold">
            If you have any questions about these Terms of Service, please contact us.
          </p>
        </div>
      </main>
    </div>
  );
}
