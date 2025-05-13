import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6" disabled>
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to list
      </Button>

      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
              <Skeleton className="w-[200px] h-[200px] rounded-lg" />
            </div>

            <div className="w-full md:w-2/3 md:pl-6">
              <Skeleton className="h-8 w-48 mb-4" />

              <div className="flex gap-2 mb-4">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Skeleton className="h-6 w-20 mb-2" />
                  <div className="space-y-2">
                    {[...Array(6)].map((_, i) => (
                      <Skeleton key={i} className="h-4 w-full" />
                    ))}
                  </div>
                </div>

                <div>
                  <Skeleton className="h-6 w-20 mb-2" />
                  <div className="space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton key={i} className="h-4 w-full" />
                    ))}
                  </div>
                </div>
              </div>

              <Skeleton className="h-6 w-20 mt-4 mb-2" />
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-6 w-20 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
