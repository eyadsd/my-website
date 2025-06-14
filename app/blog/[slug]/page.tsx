import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample blog posts data (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15: What's New and Exciting",
    excerpt:
      "Explore the latest features in Next.js 15 including improved performance, new APIs, and enhanced developer experience.",
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building React applications even better. In this comprehensive guide, we'll explore what's new and how you can get started.

## What's New in Next.js 15

### 1. Improved Performance
Next.js 15 introduces several performance optimizations:
- Faster build times
- Reduced bundle sizes
- Better tree shaking

### 2. Enhanced Developer Experience
The developer experience has been significantly improved with:
- Better error messages
- Improved hot reload
- Enhanced debugging tools

### 3. New APIs and Features
Several new APIs have been introduced:
- Enhanced routing capabilities
- Better data fetching patterns
- Improved middleware support

## Getting Started

To get started with Next.js 15, simply run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Conclusion

Next.js 15 represents a significant step forward in React development. The new features and improvements make it easier than ever to build fast, scalable applications.

Happy coding!
    `,
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
  },
  {
    slug: "mastering-typescript-advanced-patterns",
    title: "Mastering TypeScript: Advanced Patterns for Better Code",
    excerpt:
      "Learn advanced TypeScript patterns that will make your code more maintainable, type-safe, and developer-friendly.",
    content: `
# Mastering TypeScript: Advanced Patterns

TypeScript has become an essential tool for modern JavaScript development. In this post, we'll explore advanced patterns that will take your TypeScript skills to the next level.

## Advanced Type Patterns

### 1. Conditional Types
Conditional types allow you to create types that depend on a condition:

\`\`\`typescript
type ApiResponse<T> = T extends string ? string : T extends number ? number : never;
\`\`\`

### 2. Mapped Types
Mapped types let you create new types by transforming properties of existing types:

\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

## Best Practices

1. Use strict mode
2. Leverage utility types
3. Create custom type guards
4. Use const assertions

## Conclusion

These advanced TypeScript patterns will help you write more robust and maintainable code. Practice these concepts and incorporate them into your projects.
    `,
    publishedAt: "2024-01-10",
    readTime: "8 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
  },
  // Add more posts as needed...
]

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header spacing */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back to blog */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

              <div className="flex items-center justify-between flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Article Content */}
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <div className="whitespace-pre-wrap">{post.content}</div>
                </div>
              </CardContent>
            </Card>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t">
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Thanks for reading! If you enjoyed this post, consider sharing it with others.
                </div>
                <Button variant="outline" asChild>
                  <Link href="/blog">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    More Posts
                  </Link>
                </Button>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  )
}
