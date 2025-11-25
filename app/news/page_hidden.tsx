import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Image from "next/image"

const newsItems = [
  {
    id: 1,
    type: "Announcement",
    title: "Index Revelation Global Launch Date Announced",
    description:
      "We are thrilled to announce that Index Revelation will be launching worldwide on iOS and Android this summer. Pre-registration is now open!",
    date: "May 15, 2024",
    image: "indie game announcement banner with launch celebration",
  },
  {
    id: 2,
    type: "Event",
    title: "Closed Beta Test Event - Join Now",
    description:
      "Sign up for our exclusive closed beta test and be among the first to experience Index Revelation. Limited spots available.",
    date: "May 10, 2024",
    image: "indie game beta test event promotional banner",
  },
  {
    id: 3,
    type: "Blog",
    title: "Behind the Scenes: Creating the World of Index Revelation",
    description:
      "Our art director shares insights into the creative process behind the game's stunning visual design and character development.",
    date: "May 5, 2024",
    image: "indie game development behind the scenes artwork",
  },
  {
    id: 4,
    type: "Announcement",
    title: "New Character Reveal: Meet Luna",
    description:
      "Introducing Luna, a mysterious scholar with the power to unlock hidden knowledge. Discover her story in Index Revelation.",
    date: "April 28, 2024",
    image: "indie game character reveal fantasy female character",
  },
  {
    id: 5,
    type: "Event",
    title: "Community Art Contest - Win Exclusive Prizes",
    description:
      "Show us your creativity! Submit your Index Revelation fan art for a chance to win in-game rewards and official merchandise.",
    date: "April 20, 2024",
    image: "indie game community art contest banner",
  },
  {
    id: 6,
    type: "Blog",
    title: "Gameplay Deep Dive: Puzzle Mechanics Explained",
    description:
      "Learn about the innovative puzzle systems that make Index Revelation a unique and engaging experience for players of all skill levels.",
    date: "April 15, 2024",
    image: "indie game puzzle gameplay screenshot interface",
  },
]

export default function NewsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Latest News & Updates</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stay up to date with the latest announcements, events, and behind-the-scenes stories from Index Revelation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/.jpg?height=400&width=600&query=${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        item.type === "Announcement" ? "default" : item.type === "Event" ? "secondary" : "outline"
                      }
                    >
                      {item.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
