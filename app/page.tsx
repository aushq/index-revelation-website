import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HorizontalScroll } from "@/components/horizontal-scroll"
import { Play, Download } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
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

  return (
    <div className="magical-bg">
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section with Game Poster */}
        <section className="relative">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gradient-to-b from-accent/20 via-primary/40 to-background">
            <Image
              src="/images/image.png"
              alt="Index Revelation Game Poster"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

            {/* Invite Rewards Button */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent/50 font-bold text-lg px-6 py-6 shadow-lg shadow-accent/50"
              >
                ✨ Invite Rewards
              </Button>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="container mx-auto px-4 -mt-8 relative z-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-12 py-7 rounded-full shadow-2xl shadow-accent/40 border border-accent/50 min-w-[240px] transition-all hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                iOS Download
              </Button>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-12 py-7 rounded-full shadow-2xl shadow-secondary/40 border border-secondary/50 min-w-[240px] transition-all hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Android Download
              </Button>
            </div>
          </div>
        </section>

        {/* Promo Video Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-card shadow-2xl shadow-accent/20 border-accent/30">
              <div className="relative aspect-video bg-muted flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/20 to-transparent" />
                <Image
                  src="/indie-game-promotional-video-thumbnail.jpg"
                  alt="Game Promo Video"
                  fill
                  className="object-cover opacity-70"
                />
                <Button
                  size="lg"
                  className="relative z-10 rounded-full h-20 w-20 bg-accent hover:bg-accent/90 text-accent-foreground group-hover:scale-110 transition-all shadow-2xl shadow-accent/50"
                >
                  <Play className="h-8 w-8 fill-current" />
                  <span className="sr-only">Play promotional video</span>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Game Posters Showcase */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-accent">
              Journey Through Mystical Realms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
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

        {/* Gameplay Screenshots */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-accent">Master the Arcane Arts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Harness powerful spells, solve ancient riddles, and battle supernatural foes. Forge your destiny through
              cunning strategy, magical prowess, and unwavering courage in a world where every choice shapes your
              legend.
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
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <Card className="bg-gradient-to-br from-primary via-accent/40 to-primary text-foreground p-12 text-center border-accent/50 shadow-2xl shadow-accent/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-accent drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]">
                Your Legend Awaits
              </h2>
              <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Step into a realm of magic and mystery. Your adventure begins now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 shadow-xl shadow-accent/50 border border-accent/50 transition-all hover:scale-105"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Begin Your Quest
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
