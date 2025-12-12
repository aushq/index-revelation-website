import { socialLinks } from "@/components/navigation";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-primary/10 border-t border-accent/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/80">&copy; 2025 Index Revelation. All rights reserved.</p>
          <div className="flex space-x-4">
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
                  <Icon icon={social.icon} className="h-8 w-8" />
                </a>
              ))
            }
          </div>
          <div className="flex space-x-4">
            <a href="/tos" className="text-foreground/80 hover:text-accent transition-colors">Terms of Service</a>
            <a href="/privacy" className="text-foreground/80 hover:text-accent transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
