"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink} from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Experience() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const experiences = [
    {
      id: 1,
      title: "Python Developer",
      company: "Mitzu",
      companyUrl: "https://www.mitzu.io/",
      location: "Budapest, Hungary",
      period: "Aug 2024 – Present",
      description:
        "Developing scalable backend services for a werehouse-native analystics platform",
      technologies: ["Python", "SQLAlchemy", "Dash", "PostgreSQL", "GitLab CI", "Terraform", "AWS"],
      logo: "assets/mitzu.svg", 
      achievements: [
        "Improved dashboard load times by 75%",
        "Integrated BigQuery and Stripe",
        "Monitored performance with Kibana"
      ],
    },
    {
      id: 2,
      title: "Python Backend Developer",
      company: "Raicoon GmbH",
      companyUrl: "https://www.raicoon.com/en",
      location: "Remote – Vienna, Austria",
      period: "Apr 2023 – Jan 2024",
      description:
        "Built scalable, test-driven microservices for a SaaS platform monitoring power plants..",
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "GitLab CI", "Kubernetes", "Pandas"],
      logo: "assets/raicoon.svg",
      achievements: [
        "Led CI/CD deployment via GitLab CI and Kubernetes",
        "Built fault-monitoring microservices",
        "Maintained high test coverage"
      ],
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      company: "L-One Systems GmbH",
      companyUrl: "https://www.l-one.de",
      location: "Remote – Darmstadt, Germany",
      period: "Dec 2020 – Sep 2022",
      description:
        "Worked on Trilodocs, an AI-driven app for medical writers. Improved performance with caching, multiprocessing, and built end-to-end testing pipelines.",
      technologies: ["Python", "Django", "MySQL", "Angular"],
      logo: "assets/lone.svg",
      achievements: [
        "Enhanced performance with multiprocessing",
        "Built custom E2E testing pipeline",
        "Collaborated across Germany and Syria"
      ],
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "APPA Group",
      companyUrl: "https://www.linkedin.com/company/appagroup/",
      location: "Damascus, Syria",
      period: "Oct 2019 – Sep 2020",
      description:
        "Built RESTful APIs using Django, optimized MySQL queries, and improved legacy systems while containerizing the environment with Docker.",
      technologies: ["Python", "Django", "MySQL", "Docker"],
      logo: "assets/appagroup.jpeg",
      achievements: [
        "Created documented REST APIs",
        "Optimized MySQL performance",
        "Refactored legacy systems"
      ],
    },
  ];


  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number.parseInt(entry.target.getAttribute("data-id") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, id]))
          }
        })
      },
      { threshold: 0.3 },
    )

    const elements = document.querySelectorAll("[data-id]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                data-id={experience.id}
                className={`relative mb-12 transition-all duration-700 ${
                  visibleItems.has(experience.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-1/2 md:pr-8" : "md:pl-1/2 md:pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <img
                            src={experience.logo || "/placeholder.svg"}
                            alt={`${experience.company} logo`}
                            className="w-12 h-12 rounded-lg inline-block  border"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                                                    <a
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium mb-2 hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                          >
                            {experience.company}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {experience.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{experience.description}</p>

                      {/*<div className="mb-4">
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>*/}

                      <div>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
