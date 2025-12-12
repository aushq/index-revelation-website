"use client";

import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const articles = [
  {
    id: 1,
    slug: "index-revelation-beta-launch",
    title: "Index Revelation Beta Launch Announcement",
    date: "2025-12-15",
    excerpt: "We're excited to announce the launch of our closed beta! Join the adventure and help shape the future of Index Revelation.",
    content: "Full content here..."
  },
  {
    id: 2,
    slug: "new-champion-catherina",
    title: "Meet Catherina: The Bloody Princess",
    date: "2025-12-10",
    excerpt: "Discover the tragic backstory of our first legendary champion and learn about her devastating abilities.",
    content: "Full content here..."
  },
  {
    id: 3,
    slug: "gameplay-trailer-released",
    title: "Official Gameplay Trailer Released",
    date: "2025-12-05",
    excerpt: "Watch the stunning gameplay trailer showcasing the magic, combat, and western fantasy world of Index Revelation.",
    content: "Full content here..."
  }
];

export default function NewsPage() {
  return (
    <div className="magical-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-accent drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] text-center">
            News & Updates
          </h1>

          <div className="space-y-8">
            {articles.map((article) => (
              <Card key={article.id} className="p-8 bg-card/50 border-accent/20 hover:border-accent/40 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 text-accent hover:text-accent/80 transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">{article.date}</p>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/news/${article.slug}`}
                      className="text-accent hover:text-accent/80 font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
