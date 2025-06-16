
"use client"

import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
	const formRef = useRef<HTMLFormElement>(null)

	const sendEmail = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!formRef.current) return

		try {
			await emailjs.sendForm(
				process.env.EMAIL_JS_SERVICE_ID!,
				process.env.EMAIL_JS_TEMPLATE_ID!,
				formRef.current,
				process.env.EMAIL_JS_PUBLIC_KEY!
			)
			alert("Message sent successfully!")
			formRef.current.reset()
		} catch (error) {
			console.error("EmailJS error:", error)
			alert("Failed to send message. Please try again later.")
		}
	}

	return (
		<section id="contact" className="py-20 px-4 bg-muted/30">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						I'm always open to discussing new opportunities and interesting projects.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
					<div>
						<h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
						<p className="text-muted-foreground mb-8">
							Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
						</p>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<Mail className="h-5 w-5 text-primary" />
								<span>dev.eyad.saad@gmail.com</span>
							</div>
							<div className="flex items-center gap-3">
								<Phone className="h-5 w-5 text-primary" />
								<span>+36 (707) 887-952</span>
							</div>
							<div className="flex items-center gap-3">
								<MapPin className="h-5 w-5 text-primary" />
								<span>Budapest, Hungary</span>
							</div>
						</div>
					</div>

					<Card>
						<CardHeader>
							<CardTitle>Send me a message</CardTitle>
							<CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
						</CardHeader>
						<CardContent>
							<form ref={formRef} onSubmit={sendEmail} className="space-y-4">
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="firstName">First Name</Label>
										<Input id="firstName" name="firstName" placeholder="John" required />
									</div>
									<div className="space-y-2">
										<Label htmlFor="lastName">Last Name</Label>
										<Input id="lastName" name="lastName" placeholder="Doe" required />
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input id="email" name="email" type="email" placeholder="john@example.com" required />
								</div>
								<div className="space-y-2">
									<Label htmlFor="subject">Subject</Label>
									<Input id="subject" name="subject" placeholder="Project Inquiry" required />
								</div>
								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea id="message" name="message" placeholder="Tell me about your project..." className="min-h-[120px]" required />
								</div>
								<Button type="submit" className="w-full">
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}

