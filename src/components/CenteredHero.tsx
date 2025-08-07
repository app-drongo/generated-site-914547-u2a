// Enhanced by AI on 2025-08-07T20:16:43.879Z
// Section: hero
// Category: hero

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, Database, Headphones, Server, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              <Zap className="size-4 mr-2" />
              Available for New Projects
              <ArrowRight className="ml-2 size-4" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Expert IT Solutions
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Tailored for Your Business
              </span>
              Needs
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Professional IT freelance services delivering custom software development, 
              system integration, and technical consulting to help your business thrive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="group text-base px-8" asChild>
                <Link href="#contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group text-base px-8" asChild>
                <Link href="#services">
                  <Server className="mr-2 size-5 transition-transform group-hover:scale-110" />
                  View Services
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Headphones className="inline size-4 mr-1" />
                  24/7 Technical Support
                </span>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Zap key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">100% Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Services Section Preview */}
          <div className="mt-16 relative" id="services">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border bg-card p-2 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/50 to-muted p-6">
                  <h2 className="text-2xl font-bold mb-6 text-center">IT Services Offered</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-background/80 p-4 rounded-lg text-center">
                      <Code className="size-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-medium">Custom Development</h3>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg text-center">
                      <Database className="size-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-medium">Database Solutions</h3>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg text-center">
                      <Cpu className="size-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-medium">System Integration</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 size-6 bg-accent rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 size-4 bg-secondary rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}