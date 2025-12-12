"use client";

import { Navigation, socialLinks } from "@/components/navigation";
import { Icon } from "@iconify/react";

export default function ContactPage() {
  return (
    <div className="magical-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-accent drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            Contact Us
          </h1>

          <p className="text-xl text-foreground/90 mb-12 leading-relaxed">
            Have questions about Index Revelation? Want to share your thoughts or report an issue?
            We'd love to hear from you!
          </p>

          <div className="space-y-8">
            <div className="bg-card/50 border border-accent/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-accent">Get in Touch</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-accent mb-2">Email</h3>
                  <a
                    href="mailto:inquires@index-revelation.com"
                    className="text-foreground/80 hover:text-accent transition-colors text-lg"
                  >
                    inquires@index-revelation.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-accent mb-4">Follow Us on Social Media</h3>
                  <div className="flex justify-center space-x-8">
                    {
                      socialLinks.map((social) => (
                        <a
                          key={social.name}
                          className="text-primary-foreground hover:text-accent transition-all hover:scale-110"
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                        >
                          <Icon icon={social.icon} className="h-10 w-10" />
                        </a>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-accent/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-accent">About Index Revelation</h2>
              <p className="text-foreground/80 leading-relaxed">
                Index Revelation is an immersive western fantasy RPG where you become the Keeper of the Forbidden Index.
                Join our community to stay updated on the latest developments and connect with fellow adventurers.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
