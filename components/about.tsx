import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating digital experiences that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              With over 5 years of experience in web development, I specialize in creating modern, responsive
              applications using the latest technologies. I believe in writing clean, maintainable code and creating
              intuitive user experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or
              sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Clean Code</h3>
                    <p className="text-sm text-muted-foreground">Writing maintainable, scalable, and efficient code</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">UI/UX Design</h3>
                    <p className="text-sm text-muted-foreground">Creating beautiful and intuitive user interfaces</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Performance</h3>
                    <p className="text-sm text-muted-foreground">Optimizing applications for speed and efficiency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
