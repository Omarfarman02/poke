"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Pokémon detail error:", error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to list
        </Link>
      </Button>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-red-600">Failed to load Pokémon</CardTitle>
          <CardDescription>
            We couldn't load this Pokémon's details. This might be due to rate limiting or network issues.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{error.message || "An unexpected error occurred."}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={reset} variant="default">
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Return home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
