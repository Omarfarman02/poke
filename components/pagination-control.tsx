"use client"

import { useRouter } from "next/navigation"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"

interface PaginationControlProps {
  currentPage: number
  totalPages: number
  query: string
}

export function PaginationControl({ currentPage, totalPages, query }: PaginationControlProps) {
  const router = useRouter()

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams()
    if (query) {
      params.set("q", query)
    }
    params.set("page", page.toString())
    return `/?${params.toString()}`
  }

  // Generate page numbers to display
  const getPageItems = () => {
    const items = []
    const maxPagesToShow = 5

    // Previous button
    items.push(
      <PaginationItem key="prev">
        <PaginationPrevious
          href={currentPage > 1 ? createPageUrl(currentPage - 1) : "#"}
          onClick={(e) => {
            if (currentPage === 1) e.preventDefault()
          }}
          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
        />
      </PaginationItem>,
    )

    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink href={createPageUrl(i)} isActive={currentPage === i}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
      }
    } else {
      // Always show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink href={createPageUrl(1)} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>,
      )

      // Calculate start and end of page range
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if at the beginning or end
      if (currentPage <= 2) {
        endPage = 4
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3
      }

      // Add ellipsis if needed
      if (startPage > 2) {
        items.push(
          <PaginationItem key="ellipsis1">
            <PaginationEllipsis />
          </PaginationItem>,
        )
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink href={createPageUrl(i)} isActive={currentPage === i}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
      }

      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="ellipsis2">
            <PaginationEllipsis />
          </PaginationItem>,
        )
      }

      // Always show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href={createPageUrl(totalPages)} isActive={currentPage === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    // Next button
    items.push(
      <PaginationItem key="next">
        <PaginationNext
          href={currentPage < totalPages ? createPageUrl(currentPage + 1) : "#"}
          onClick={(e) => {
            if (currentPage === totalPages) e.preventDefault()
          }}
          className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
        />
      </PaginationItem>,
    )

    return items
  }

  return (
    <Pagination className="mt-8">
      <PaginationContent>{getPageItems()}</PaginationContent>
    </Pagination>
  )
}
