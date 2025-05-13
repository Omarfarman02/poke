import { Skeleton } from "@/components/ui/skeleton"
import { ITEMS_PER_PAGE } from "@/lib/pokemon"
import { Card, CardContent } from "@/components/ui/card"

export function PokemonListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(ITEMS_PER_PAGE)].map((_, i) => (
        <Card key={i}>
          <CardContent className="p-4 flex flex-col items-center">
            <Skeleton className="w-[120px] h-[120px] rounded-lg mb-2" />
            <Skeleton className="h-6 w-24 mb-1" />
            <Skeleton className="h-4 w-12" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
