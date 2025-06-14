"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Hi, I'm Eyad 
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Software Engineer & Python Expert</p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I have 4 years of experience in building web applications. I'm passionate about building software and learning how things work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/eyadsd" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/eyad-saad" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:dev.eyad.saad@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <Button variant="ghost" size="icon" onClick={() => scrollToSection("experience")} className="animate-bounce">
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
