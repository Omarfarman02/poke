import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface EmptyStateProps {
  query: string
}

export function EmptyState({ query }: EmptyStateProps) {
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-center">No Pokémon Found</CardTitle>
        <CardDescription className="text-center">
          No Pokémon found matching "{query}". Try a different search term.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
          <span className="text-4xl">🔍</span>
        </div>
      </CardContent>
    </Card>
  )
}
