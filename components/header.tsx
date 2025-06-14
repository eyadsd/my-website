"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If not on homepage, navigate to homepage with hash
      window.location.href = `/#${sectionId}`
    }
    setIsMenuOpen(false)
  }

  const handleHomeClick = () => {
    if (isHomePage) {
      scrollToSection("hero")
    } else {
      window.location.href = "/"
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <button onClick={handleHomeClick} className="hover:text-primary transition-colors">
             Eyad Saad 
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                {/* <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
                  About
                </button> */}
                {/* <button onClick={() => scrollToSection("skills")} className="hover:text-primary transition-colors">
                  Skills
                </button> */}
                {/* <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link> */}

                <button onClick={() => scrollToSection("experience")} className="hover:text-primary transition-colors">
                  Experience
                </button>
                <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
                  Projects
                </button>
                <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                  Contact
                </button>
                <Link href="/now" className="hover:text-primary transition-colors">
                  Now
                </Link>

              </>
            ) : (
              <>
                {/* <Link href="/#about" className="hover:text-primary transition-colors">
                  About
                </Link> */}
                {/* <Link href="/#skills" className="hover:text-primary transition-colors">
                  Skills
                </Link> */}
                {/* <Link
                  href="/blog"
                  className={`hover:text-primary transition-colors ${pathname.startsWith("/blog") ? "text-primary font-medium" : ""}`}
                >
                  Blog
                </Link> */}
                <Link href="/#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="/#experience" className="hover:text-primary transition-colors">
                  Experience
                </Link>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link href="/now" className="hover:text-primary transition-colors">
                  Now
                </Link>


              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left hover:text-primary transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-left hover:text-primary transition-colors"
                  >
                    Skills
                  </button>
                  <Link href="/blog" className="text-left hover:text-primary transition-colors">
                    Blog
                  </Link>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-left hover:text-primary transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-left hover:text-primary transition-colors"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-left hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <>
                  <Link href="/#about" className="text-left hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link href="/#skills" className="text-left hover:text-primary transition-colors">
                    Skills
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-left hover:text-primary transition-colors ${pathname.startsWith("/blog") ? "text-primary font-medium" : ""}`}
                  >
                    Blog
                  </Link>
                  <Link href="/#projects" className="text-left hover:text-primary transition-colors">
                    Projects
                  </Link>
                  <Link href="/#experience" className="text-left hover:text-primary transition-colors">
                    Experience
                  </Link>
                  <Link href="/#contact" className="text-left hover:text-primary transition-colors">
                    Contact
                  </Link>
                  <Link href="/now" className="text-left hover:text-primary transition-colors">
                    Now
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
