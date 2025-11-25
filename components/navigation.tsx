"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Youtube, Twitter } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Notes", href: "/notes" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "Discord", icon: "⚔️", href: "https://discord.com" },
  { name: "Reddit", icon: "🎭", href: "https://reddit.com" },
  { name: "X", icon: Twitter, href: "https://x.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-accent/30 bg-primary/95 backdrop-blur-sm shadow-lg shadow-accent/20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-bold transition-all hover:text-accent hover:scale-105",
                pathname === item.href
                  ? "text-accent drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                  : "text-primary-foreground/80",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              asChild
              className="text-primary-foreground hover:bg-accent/20 hover:text-accent transition-all hover:scale-110"
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                {typeof social.icon === "string" ? (
                  <span className="text-xl">{social.icon}</span>
                ) : (
                  <social.icon className="h-5 w-5" />
                )}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
