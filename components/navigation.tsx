"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  //{ name: "Notes", href: "/notes" },
  //{ name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Discord", icon: "mdi-discord", href: "https://discord.gg/9n9egPTd" },
  { name: "Reddit", icon: "mdi-reddit", href: "https://www.reddit.com/user/kairivx/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" },
  { name: "X", icon: "mdi-twitter", href: "https://x.com/ivy_exediary" },
  { name: "YouTube", icon: "mdi-youtube", href: "https://youtube.com/@lvy_exe?si=DhsAVJ3pPhe1vKGO" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-accent/20 bg-linear-to-r from-slate-900/85 via-purple-900/70 to-slate-800/85 backdrop-blur-xl shadow-2xl shadow-purple-500/15 backdrop-saturate-150">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xl font-bold font-serif transition-all hover:text-accent hover:scale-105",
                pathname === item.href
                  ? "text-accent drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                  : "text-primary-foreground/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
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
          ))}
        </div>
      </div>
    </nav>
  );
}
