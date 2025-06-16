import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Eyad Saad - Software Engineer',
	description: 'This is my personal website. I will use it to show my experience and maybe share random stuff on my mind',
	generator: 'next.js',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
