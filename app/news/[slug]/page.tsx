"use client";

import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

const articles = [
  {
    id: 1,
    slug: "index-revelation-beta-launch",
    title: "Index Revelation Beta Launch Announcement",
    date: "2025-12-15",
    excerpt: "We're excited to announce the launch of our closed beta! Join the adventure and help shape the future of Index Revelation.",
    content: `
      <p>Dear adventurers and magic enthusiasts,</p>

      <p>We're thrilled to announce that Index Revelation's closed beta is now live! After months of development and countless hours of crafting the perfect blend of western fantasy and magical RPG elements, we're ready to share our world with you.</p>

      <h3>What to Expect in Beta</h3>
      <ul>
        <li>Full access to the main storyline</li>
        <li>Three legendary champions to summon and command</li>
        <li>Exploration of mystical realms and ancient ruins</li>
        <li>Intense combat against supernatural foes</li>
        <li>AFK progression and reward systems</li>
      </ul>

      <p>The beta will run for the next 6 weeks, during which we'll be collecting feedback and making improvements. Your input is crucial in helping us create the best possible experience.</p>

      <h3>How to Join</h3>
      <p>Sign up for our waitlist on the main page to get beta access. We'll be rolling out invites gradually, so stay tuned!</p>

      <p>Thank you for your support and enthusiasm. Let's embark on this journey together.</p>

      <p>The Index Revelation Team</p>
    `
  },
  {
    id: 2,
    slug: "new-champion-catherina",
    title: "Meet Catherina: The Bloody Princess",
    date: "2025-12-10",
    excerpt: "Discover the tragic backstory of our first legendary champion and learn about her devastating abilities.",
    content: `
      <p>In the shadowed halls of forgotten kingdoms, one figure stands as both savior and executioner. Meet Catherina, the Bloody Princess.</p>

      <h3>The Last Heir</h3>
      <p>Catherina is the final surviving member of the royal bloodline that once ruled the western frontier. When invaders stormed her ancestral home, she was forced to flee, carrying only her father's sacred blade and an unquenchable thirst for vengeance.</p>

      <h3>Abilities and Playstyle</h3>
      <p>As a melee champion, Catherina excels in close-quarters combat:</p>
      <ul>
        <li><strong>Blood Dance:</strong> A devastating combo attack that builds rage with each strike</li>
        <li><strong>Royal Decree:</strong> Commands enemy forces to kneel, stunning them temporarily</li>
        <li><strong>Crimson Shield:</strong> Absorbs damage and converts it to health regeneration</li>
      </ul>

      <p>Her playstyle focuses on aggressive positioning and capitalizing on enemy mistakes, making her perfect for players who enjoy high-risk, high-reward combat.</p>

      <h3>Backstory Integration</h3>
      <p>Catherina's story will unfold throughout the game, revealing the depths of her tragedy and the burden of her crown. Will she reclaim her throne, or will the cycle of blood continue?</p>
    `
  },
  {
    id: 3,
    slug: "gameplay-trailer-released",
    title: "Official Gameplay Trailer Released",
    date: "2025-12-05",
    excerpt: "Watch the stunning gameplay trailer showcasing the magic, combat, and western fantasy world of Index Revelation.",
    content: `
      <p>Today, we're proud to release our official gameplay trailer, giving you a first look at the magic and mayhem that awaits in Index Revelation.</p>

      <h3>Trailer Highlights</h3>
      <p>The 3-minute trailer showcases:</p>
      <ul>
        <li>Stunning western fantasy environments</li>
        <li>Intense magical combat sequences</li>
        <li>Champion summoning and abilities</li>
        <li>Exploration of mystical ruins</li>
        <li>AFK progression systems</li>
      </ul>

      <p>You can watch the trailer on our YouTube channel or embedded below.</p>

      <div class="video-placeholder bg-card/50 p-8 text-center rounded-lg border border-accent/20">
        <p class="text-accent font-medium">🎥 Gameplay Trailer</p>
        <p class="text-muted-foreground">Video would be embedded here</p>
      </div>

      <h3>Development Progress</h3>
      <p>With the trailer release, we're at 85% completion on the core game. The remaining time will be focused on polishing, balancing, and adding the finishing touches that will make Index Revelation truly magical.</p>

      <p>Stay tuned for more updates as we approach launch!</p>
    `
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ArticlePage({ params }: PageProps) {
  const { slug } = use(params);
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="magical-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/news"
            className="text-accent hover:text-accent/80 mb-8 inline-block transition-colors"
          >
            ← Back to News
          </Link>

          <article className="bg-card/50 border border-accent/20 rounded-lg overflow-hidden">
            <header className="p-8 pb-6 border-b border-accent/10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] leading-tight">
                {article.title}
              </h1>
              <p className="text-muted-foreground text-lg font-medium">Published on {article.date}</p>
            </header>

            <div className="p-8">
              <div
                className="prose prose-lg prose-headings:text-accent prose-headings:font-bold prose-p:text-foreground/90 prose-p:leading-relaxed prose-ul:text-foreground/90 prose-li:marker:text-accent max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
