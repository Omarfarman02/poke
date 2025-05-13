"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-red-600">Something went wrong</CardTitle>
          <CardDescription>
            We encountered an error while loading the data. This might be due to rate limiting or network issues.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{error.message || "An unexpected error occurred."}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={reset} className="w-full">
            Try again
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
