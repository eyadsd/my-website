import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Cloth Simluation",
      description:
        "An interactive physics-based cloth simulation built for web browsers using JavaScript and Three.js.",
      image: "/assets/cloth.png?height=200&width=400",
      technologies: ["JavaScript", "Three.js"],
      liveUrl: "https://eyadsd.github.io/cloth/",
      githubUrl: "https://github.com/eyadsd/cloth",
    },
  {
    title: "Insecure Phoenix",
    description:
      "A deliberately vulnerable Phoenix application showcasing common security flaws like sensitive logging, missing session renewal, and misconfigured TLS. Built to demonstrate static analysis tooling and exploit scenarios.",
    image: "/assets/insecure_phoenix.webp?height=200&width=400",
    technologies: ["Elixir", "Phoenix"],
    liveUrl: null,
    githubUrl: "https://github.com/eyadsd/insecure-pheonix",
  },

// {
//   title: "Flashcard-based Language Learning App",
//   description:
//     "A language learning platform that integrates learning from books, YouTube, and web pages to automate flashcard creation. Deployed on AWS using GitHub Actions.",
//   image: "/assets/flashcards.png?height=200&width=400",
//   technologies: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
//   liveUrl: null,
//   githubUrl: "https://github.com/eyadsd/better-flashcards",
// }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my personal projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                 {project.liveUrl && (<Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>)}
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
