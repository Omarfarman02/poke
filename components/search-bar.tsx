"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  defaultValue: string
  onSearch: (formData: FormData) => Promise<any>
}

export function SearchBar({ defaultValue, onSearch }: SearchBarProps) {
  const router = useRouter()
  const [query, setQuery] = useState(defaultValue)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Update URL with search query
    const params = new URLSearchParams()
    if (query.trim()) {
      params.set("q", query.trim())
    }
    // Always reset to first page on new search
    params.set("page", "1")

    // Navigate to the new URL
    router.push(`/?${params.toString()}`)

    // Call the server action to log the search
    const formData = new FormData()
    formData.append("q", query)
    await onSearch(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
        <Input
          type="text"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Pokémon by name..."
          className="pl-10"
        />
        <Button type="submit" className="absolute right-0 top-0 h-full rounded-l-none">
          Search
        </Button>
      </div>
    </form>
  )
}
