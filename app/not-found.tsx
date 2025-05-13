import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-center">404 - Not Found</CardTitle>
          <CardDescription className="text-center">The Pokémon you're looking for doesn't exist.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
            <span className="text-4xl">🔍</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
