// app/now/page.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function NowPage() {
  return (
    <>
    <Header />
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">What I'm Doing Now</h1>
        <p className="text-muted-foreground mb-8">
          Inspired by <a href="https://nownownow.com" className="text-primary underline" target="_blank">nownownow.com</a>.
          Here's what I'm currently focused on — updated June 2025.
        </p>
            <Card>
            <CardContent className="p-6 space-y-6">
                <div>
                <h2 className="text-xl font-semibold mb-2">📖 Reading</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                    <li><i>Designing Data-Intensive Applications</i> by Martin Kleppmann</li>
                </ul>
                </div>

                <div>
                <h2 className="text-xl font-semibold mb-2">🧠 Learning</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                    <li>Improving my German (aiming for B1)</li>
                    <li>Diving deeper into Kubernetes</li>
                    <li>Mastering Neovim by building my own configuration</li>
                </ul>
                </div>

                <div>
                <h2 className="text-xl font-semibold mb-2">💻 Building</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                    <li>My personal Neovim setup (Lua-based)</li>
                    <li>A flashcard web app for language learning</li>
                </ul>
                </div>

                <div>
                <h2 className="text-xl font-semibold mb-2">📺 Watching</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                    <li><i>The Sopranos</i></li>
                    <li><i>Succession</i></li>
                </ul>
                </div>
            </CardContent>
            </Card>

      </div>
    </section>
    </>
  )
}
