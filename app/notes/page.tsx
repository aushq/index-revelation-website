import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, BookOpen } from "lucide-react"
import Image from "next/image"

const characters = [
  {
    id: 1,
    name: "Luna",
    role: "Scholar",
    rarity: "Legendary",
    description:
      "A mysterious scholar with the ability to unlock hidden knowledge and ancient secrets. Luna's intelligence and curiosity drive her to explore the depths of Index Revelation.",
    image: "indie game character portrait female scholar with pink hair",
    stats: { power: 85, defense: 70, speed: 75 },
  },
  {
    id: 2,
    name: "Kai",
    role: "Guardian",
    rarity: "Epic",
    description:
      "A brave warrior sworn to protect the realm. Kai's unwavering loyalty and strength make him an invaluable ally in your journey.",
    image: "indie game character portrait male guardian warrior",
    stats: { power: 90, defense: 85, speed: 60 },
  },
  {
    id: 3,
    name: "Mira",
    role: "Mage",
    rarity: "Legendary",
    description:
      "A powerful mage who commands the elements. Her magical prowess and wisdom help unravel the mysteries of the world.",
    image: "indie game character portrait female mage magic user",
    stats: { power: 95, defense: 55, speed: 80 },
  },
  {
    id: 4,
    name: "Rex",
    role: "Engineer",
    rarity: "Rare",
    description:
      "A brilliant inventor who creates incredible devices. Rex's mechanical genius helps solve complex puzzles and overcome obstacles.",
    image: "indie game character portrait male engineer inventor",
    stats: { power: 70, defense: 75, speed: 70 },
  },
]

const tutorialVideos = [
  {
    id: 1,
    title: "Getting Started - Tutorial",
    description: "Learn the basics of Index Revelation and begin your adventure",
    duration: "5:24",
    thumbnail: "mobile game tutorial getting started guide",
  },
  {
    id: 2,
    title: "Combat System Guide",
    description: "Master the combat mechanics and defeat powerful enemies",
    duration: "8:15",
    thumbnail: "mobile game combat tutorial battle system",
  },
  {
    id: 3,
    title: "Puzzle Solving Tips",
    description: "Expert strategies for solving challenging puzzles",
    duration: "6:42",
    thumbnail: "mobile game puzzle solving tutorial guide",
  },
  {
    id: 4,
    title: "Character Building Guide",
    description: "Optimize your team composition and character development",
    duration: "10:18",
    thumbnail: "mobile game character building guide tutorial",
  },
  {
    id: 5,
    title: "Advanced Tactics",
    description: "Pro tips and advanced strategies for experienced players",
    duration: "12:05",
    thumbnail: "mobile game advanced tactics strategy guide",
  },
  {
    id: 6,
    title: "Resource Management",
    description: "Efficiently manage your resources and maximize progress",
    duration: "7:30",
    thumbnail: "mobile game resource management tutorial",
  },
]

export default function NotesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Game Notes & Guides</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore character details, learn gameplay mechanics, and master Index Revelation with our comprehensive
              guides
            </p>
          </div>

          <Tabs defaultValue="characters" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="characters" className="text-base">
                <BookOpen className="mr-2 h-4 w-4" />
                Characters
              </TabsTrigger>
              <TabsTrigger value="tutorials" className="text-base">
                <Play className="mr-2 h-4 w-4" />
                How to Play
              </TabsTrigger>
            </TabsList>

            <TabsContent value="characters" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                {characters.map((character) => (
                  <Card key={character.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-48 aspect-square md:aspect-auto">
                        <Image
                          src={`/.jpg?height=400&width=400&query=${character.image}`}
                          alt={character.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-2xl">{character.name}</CardTitle>
                            <Badge
                              variant={
                                character.rarity === "Legendary"
                                  ? "default"
                                  : character.rarity === "Epic"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {character.rarity}
                            </Badge>
                          </div>
                          <CardDescription className="text-base font-medium text-accent">
                            {character.role}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-4">{character.description}</p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Power:</span>
                              <div className="flex items-center gap-2">
                                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                                  <div className="h-full bg-accent" style={{ width: `${character.stats.power}%` }} />
                                </div>
                                <span className="font-medium">{character.stats.power}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Defense:</span>
                              <div className="flex items-center gap-2">
                                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                                  <div className="h-full bg-primary" style={{ width: `${character.stats.defense}%` }} />
                                </div>
                                <span className="font-medium">{character.stats.defense}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Speed:</span>
                              <div className="flex items-center gap-2">
                                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                                  <div className="h-full bg-secondary" style={{ width: `${character.stats.speed}%` }} />
                                </div>
                                <span className="font-medium">{character.stats.speed}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tutorials" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tutorialVideos.map((video) => (
                  <Card
                    key={video.id}
                    className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                  >
                    <div className="relative aspect-video bg-muted">
                      <Image
                        src={`/.jpg?height=360&width=640&query=${video.thumbnail}`}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="lg" className="rounded-full h-16 w-16">
                          <Play className="h-6 w-6 fill-current" />
                          <span className="sr-only">Play video</span>
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {video.title}
                      </CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  )
}
