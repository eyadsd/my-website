import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Your Name",
  description: "Thoughts, tutorials, and insights about web development and technology.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
