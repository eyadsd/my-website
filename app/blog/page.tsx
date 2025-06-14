import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

// Sample blog posts data
const blogPosts = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15: What's New and Exciting",
    excerpt:
      "Explore the latest features in Next.js 15 including improved performance, new APIs, and enhanced developer experience.",
    content: "Full blog post content would go here...",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    image: "/placeholder.svg?height=200&width=400",
    featured: true,
  },
  {
    slug: "mastering-typescript-advanced-patterns",
    title: "Mastering TypeScript: Advanced Patterns for Better Code",
    excerpt:
      "Learn advanced TypeScript patterns that will make your code more maintainable, type-safe, and developer-friendly.",
    content: "Full blog post content would go here...",
    publishedAt: "2024-01-10",
    readTime: "8 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications: Architecture Best Practices",
    excerpt:
      "Discover proven architectural patterns and best practices for building large-scale React applications that stand the test of time.",
    content: "Full blog post content would go here...",
    publishedAt: "2024-01-05",
    readTime: "12 min read",
    tags: ["React", "Architecture", "Best Practices"],
    image: "/placeholder.svg?height=200&width=400",
    featured: true,
  },
  {
    slug: "css-grid-vs-flexbox-when-to-use-what",
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt:
      "A comprehensive guide to understanding the differences between CSS Grid and Flexbox, and when to use each layout method.",
    content: "Full blog post content would go here...",
    publishedAt: "2023-12-28",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Frontend"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    slug: "optimizing-web-performance-2024",
    title: "Web Performance Optimization in 2024: A Complete Guide",
    excerpt:
      "Learn the latest techniques and tools for optimizing web performance, from Core Web Vitals to advanced optimization strategies.",
    content: "Full blog post content would go here...",
    publishedAt: "2023-12-20",
    readTime: "10 min read",
    tags: ["Performance", "Web Development", "Optimization"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    slug: "introduction-to-server-components",
    title: "Introduction to React Server Components",
    excerpt: "Understanding React Server Components and how they're changing the way we build React applications.",
    content: "Full blog post content would go here...",
    publishedAt: "2023-12-15",
    readTime: "7 min read",
    tags: ["React", "Server Components", "Next.js"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Header spacing */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology, and everything in between.
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-8">All Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
