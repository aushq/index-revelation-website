"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
    alert("Thank you for contacting us! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have questions or feedback? We'd love to hear from you. Reach out to us and we'll respond as soon as
              possible.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Mail className="h-6 w-6 text-primary" />
                    Contact Information
                  </CardTitle>
                  <CardDescription>Other ways to reach our team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                    <a href="mailto:support@indexrevelation.com" className="text-primary hover:underline">
                      support@indexrevelation.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">For technical support and general inquiries</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Inquiries</h3>
                    <a href="mailto:business@indexrevelation.com" className="text-primary hover:underline">
                      business@indexrevelation.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">For partnerships and press inquiries</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Community</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Join our community on social media for the latest updates
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                          Discord
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
                          Reddit
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                          X (Twitter)
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90">
                    We typically respond to all inquiries within 24-48 hours during business days. For urgent issues,
                    please mark your subject line with "URGENT".
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
