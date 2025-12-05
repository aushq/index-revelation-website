"use client";

import { HorizontalScroll } from "@/components/horizontal-scroll";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import isEmail from 'validator/es/lib/isEmail';


export default function HomePage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    if (!isEmail(email)) {
      setHelperText("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    console.log("Email submitted:", email);

    const res = await fetch('https://icw.index-revelation.com/join-waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!res.ok) {
      const data = await res.json();
      setIsSubmitting(false);
      setHelperText(data.message)
      return;
    }

    setSubmitted(true);
    setIsSubmitting(false);
    setEmail("");
  };

  const artworkPosters = [
    { id: 1, title: "Concept Art 1", query: "dark fantasy western magic artwork mystical creatures" },
    { id: 2, title: "Concept Art 2", query: "medieval fantasy character warrior mage dark atmosphere" },
    { id: 3, title: "Concept Art 3", query: "magical western fantasy tavern interior candlelight" },
    { id: 4, title: "Concept Art 4", query: "dark fantasy western landscape ruins ancient magic" },
    { id: 5, title: "Concept Art 5", query: "fantasy spell book magical artifacts glowing runes" },
  ]

  const gameplayScreenshots = [
    { id: 1, query: "dark fantasy mobile game interface magic spells" },
    { id: 2, query: "western fantasy game inventory screen magical items" },
    { id: 3, query: "fantasy rpg quest dialogue mysterious character" },
    { id: 4, query: "dark fantasy map exploration ancient ruins" },
    { id: 5, query: "fantasy game combat magic effects dark atmosphere" },
    { id: 6, query: "medieval fantasy character customization mystical powers" },
  ]

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const champions = [
    {
      id: 1,
      name: "Bloody Princess",
      title: "Catherina",
      image: "/images/catherina.png",
      quote: '"Bend your knee, or face your doom."',
      description:
        "Catherina is the last surviving heir of the royal bloodline. As the nation's final hope, she took up the king's sacred blade and walks a bloody path to reclaim her throne.",
    },
    {
      id: 2,
      name: "Arcane Archer",
      title: "Hermes",
      image: "/images/hermes.png",
      quote:
        '"Distance means nothing when the heart is steady."',
      description:
        "A mysterious archer from the enchanted forests, wielding the power of ancient magic and nature itself.",
    },
    {
      id: 3,
      name: "The Iron Warlord",
      title: "Raider",
      image: "/images/raider.png",
      quote: '"Let the world burn if peace must be forged in fire."',
      description:
        "Raider is a legendary warrior who has fought in countless battles. While beneath his blood-stained armor is someone who still wishes for a quiet, peaceful life",
    },
    {
      id: 4,
      name: "The Dreamtailor",
      title: "Shiro",
      image: "/images/shiro.png",
      quote: '"Hushhh———The dream needs silence to take shape."',
      description:
        "Shiro's job is creating dreams from humans' endless subconscious. There’s a silver pull-ring on Shiro's left ankle, always kept covered. Do NOT touch it! Pulling it will cause something… terrifying.",
    }
  ]

  return (
    <div className="magical-bg">
      <Navigation />

      <main>
        {/* Game Poster */}
        <section className="relative">
          <div className="absolute w-full h-120 bg-linear-to-b from-accent/20 via-primary/40 to-background overflow-hidden">
            <Image
              src="/images/image.png"
              alt="Index Revelation Game Poster"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/95" />

            {/* Invite Rewards Button
            <div className="absolute top-4 right-4 md:top-8 md:right-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent/50 font-bold text-xl px-6 py-6 shadow-lg shadow-accent/50 animate-pulse"
              >
                ✨ Invite Rewards
              </Button>
            </div>*/}
          </div>

          {/* <div className="container mx-auto px-4 -mt-8 relative z-10">
            <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
              <div className="magical-button-glow">
                <Button
                  size="lg"
                  className="magical-button ios-glow bg-gradient-to-br from-accent to-yellow-400 hover:from-accent/90 hover:to-yellow-300 text-accent-foreground font-bold text-xl px-12 py-7 rounded-full shadow-2xl border border-accent/50 min-w-[240px] transition-all hover:scale-110"
                >
                  <Download className="mr-2 h-5 w-5" />
                  iOS Download
                </Button>
              </div>
              <div className="magical-button-glow">
                <Button
                  size="lg"
                  className="magical-button android-glow bg-gradient-to-br from-purple-500 to-blue-400 hover:from-purple-400 hover:to-blue-300 text-white font-bold text-xl px-12 py-7 rounded-full shadow-2xl border border-purple-400/50 min-w-[240px] transition-all hover:scale-110"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Android Download
                </Button>
              </div>
            </div>
          </div> */}

        </section>

        {/* Game Title */}
        <section className="container mx-auto px-4 py-16">
            {/* Game Title Overlay */}
          <div className="flex h-80 items-center justify-center">
            <div className="text-center px-4">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-balance drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #e1ddc9 50%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                INDEX REVELATION
              </h1>
              <div className="flex justify-center gap-2 text-[#e1ddc9] text-base md:text-lg opacity-75">
                <span>✦</span>
                <span>KEYS TO ETERNITY</span>
                <span>✦</span>
              </div>
            </div>
          </div>
        </section>

        {/* Join Wishlist Button */}
        <section className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-8 py-6 shadow-xl shadow-accent/50 border border-accent/50 transition-all hover:scale-105"
              onClick={scrollToCTA}
            >
              Join Wishlist
            </Button>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-accent drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                The Story
              </h2>
              <p className="text-xl text-foreground/90 leading-relaxed">
                In the game, you are the{" "}
                <span className="text-accent font-semibold">Keeper of the Forbidden Index</span> — a legendary archive
                filled with banned books. However, countless powerful factions are desperate to claim its overwhelming
                power, and it's your mission to protect the Index and recover the lost forbidden tomes.
              </p>
              <p className="text-xl text-foreground/90 leading-relaxed">
                As the Keeper, you can{" "}
                <span className="text-accent font-semibold">summon heroes from the forbidden tomes</span> and crush
                enemies who dare to steal the Index. You'll experience smooth progression, huge rewards, and insanely
                satisfying AFK growth throughout the game.
              </p>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl shadow-accent/20 border border-accent/30">
              <Image src="/images/story.png" alt="Game Story" fill className="object-cover brightness-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Champion Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <span className="text-accent">Legendary</span> Champions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Summon powerful heroes to aid you in your quest. Each champion possesses unique abilities and a tragic
              past.
            </p>
          </div>

          <HorizontalScroll className="snap-x snap-mandatory">
            {champions.map((champion) => (
              <div
                key={champion.id}
                className="snap-center flex-shrink-0 w-full md:w-[900px] bg-card rounded-lg overflow-hidden border border-accent/30 shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Champion Image */}
                  <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={champion.image || "/placeholder.svg"}
                      alt={champion.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Champion Description */}
                  <div className="flex flex-col justify-center space-y-4">
                    <div>
                      <p className="text-sm text-accent/80 tracking-widest mb-2 font-serif font-bold">{champion.name}</p>
                      <h3
                        className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                        style={{
                          background: "linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {champion.title}
                      </h3>
                    </div>

                    <p className="text-accent/90 text-xl italic font-serif font-bold">{champion.quote}</p>
                    <p className="text-foreground/80 text-xl leading-relaxed">{champion.description}</p>

                    {/* <div className="pt-4">
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 rounded-full shadow-lg shadow-accent/40 transition-all hover:scale-105"
                      >
                        Summon {champion.title}
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </section>

        {/* Game Posters Showcase
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Journey Through Mystical Realms
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Venture into a world where ancient magic meets the untamed frontier. Discover breathtaking landscapes,
              mysterious artifacts, and legendary creatures in this epic western fantasy adventure.
            </p>
          </div>

          <HorizontalScroll>
            {artworkPosters.map((poster) => (
              <Card
                key={poster.id}
                className="flex-shrink-0 w-[300px] md:w-[400px] overflow-hidden shadow-xl shadow-accent/10 border-accent/20 hover:shadow-2xl hover:shadow-accent/30 transition-all hover:scale-105"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={`/.jpg?height=533&width=400&query=${poster.query}`}
                    alt={poster.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </Card>
            ))}
          </HorizontalScroll>
        </section>

        {/* Gameplay Features */}
        {/* <section className="container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Master the Arcane Arts
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Harness powerful spells, solve ancient riddles, and battle supernatural foes. Forge your destiny through
              cunning strategy, magical prowess, and unwavering courage.
            </p>
          </div>

          <HorizontalScroll>
            {gameplayScreenshots.map((screenshot) => (
              <Card
                key={screenshot.id}
                className="flex-shrink-0 w-[250px] md:w-[320px] overflow-hidden shadow-xl shadow-accent/10 border-accent/20 hover:shadow-2xl hover:shadow-accent/30 transition-all hover:scale-105"
              >
                <div className="relative aspect-[9/16]">
                  <Image
                    src={`/.jpg?height=568&width=320&query=${screenshot.query}`}
                    alt={`Gameplay Screenshot ${screenshot.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            ))}
          </HorizontalScroll>
        </section> */}

        {/* Coming Soon Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-120 md:w-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl shadow-accent/20 border border-accent/30 order-2 md:order-1">
              <Image
                src={"/images/coming-soon.png"}
                alt="Coming Soon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <span className="text-accent">Coming</span> Soon
              </h2>
              <p className="text-xl text-foreground/90 leading-relaxed">
                The journey doesn't end here. New chapters await as we expand the Index Revelation universe with:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl">⚡</span>
                  <span>New legendary champions with devastating powers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl">✨</span>
                  <span>Expanded story chapters and forgotten tomes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl">🌙</span>
                  <span>Mystical realms and otherworldly dimensions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl">🔮</span>
                  <span>Guild wars and competitive battles</span>
                </li>
              </ul>
              <p className="text-accent font-semibold text-xl">Stay tuned for the next revelation...</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="container mx-auto px-4 py-16">
          <Card className="bg-gradient-to-br from-primary via-accent/40 to-primary text-foreground p-12 text-center border-accent/50 shadow-2xl shadow-accent/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]">
                Your Legend Awaits
              </h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Step into a realm of magic and mystery. Protect the Index, summon heroes, and shape your destiny.
              </p>
              <div className="flex flex-col gap-4 justify-center items-center max-w-md mx-auto">
                {submitted ? (
                  <div className="text-accent font-semibold text-xl">
                    ✨ Thank you! We'll keep you updated.
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3 w-full">
                    <Input
                      type="email"
                      placeholder="Enter your email for updates"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-background/50 border-accent/50 text-foreground placeholder:text-muted-foreground focus:border-accent"
                      required
                    />
                    {/* helper text */}
                    {
                      helperText && (
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {}
                          </p>
                        </div>
                      )
                    }

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-fit mx-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-2 py-6 shadow-xl shadow-accent/50 border border-accent/50 transition-all hover:scale-105 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Join Wishlist"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
