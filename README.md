# Pokémon Explorer

A Next.js application that allows users to browse and search for Pokémon using the public PokéAPI, built with shadcn/ui components for a clean, modern UI.

## Features

- **Search Functionality**: Search for Pokémon by name with URL parameters for shareable searches
- **List Display**: Responsive grid display of Pokémon with optimized rendering (12 items per page)
- **Pagination**: Client-side pagination with a maximum of 10 pages
- **Detail Pages**: Click on any Pokémon to view detailed information
- **Server Actions**: Implemented for search term logging
- **Loading States**: Suspense with loading skeletons for improved UX
- **Error Handling**: Comprehensive error handling with fallback data
- **Responsive Design**: Fully responsive UI that works on all device sizes

## Tech Stack

- Next.js 14+ (App Router)
- React
- Tailwind CSS
- shadcn/ui components
- Lucide React for icons

## Project Structure

\`\`\`
pokemon-explorer/
├── app/
│   ├── actions.ts             # Server actions
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   ├── error.tsx              # Error handling
│   ├── not-found.tsx          # 404 page
│   └── pokemon/
│       └── [id]/              # Dynamic route for Pokémon details
│           ├── page.tsx       # Pokémon detail page
│           ├── loading.tsx    # Loading state for detail page
│           └── error.tsx      # Error handling for detail page
├── components/
│   ├── empty-state.tsx        # Empty state for no search results
│   ├── pagination-control.tsx # Pagination component
│   ├── pokemon-card.tsx       # Individual Pokémon card
│   ├── pokemon-grid.tsx       # Grid layout for Pokémon cards
│   ├── pokemon-list.tsx       # Main list component with search logic
│   ├── pokemon-list-skeleton.tsx # Loading skeleton
│   ├── search-bar.tsx         # Search component
│   └── ui/                    # shadcn/ui components
│       ├── button.tsx         # Button component
│       ├── card.tsx           # Card component
│       ├── input.tsx          # Input component
│       ├── pagination.tsx     # Pagination component
│       └── skeleton.tsx       # Skeleton component
└── lib/
    ├── pokemon.ts             # API functions, types, and utilities
    └── utils.ts               # Utility functions for shadcn/ui
\`\`\`

## Implementation Details

### UI Components

The application uses shadcn/ui components for a clean, consistent UI:

- **Card**: Used for Pokémon cards, error states, and detail views
- **Button**: Used for actions like search and pagination
- **Input**: Used for the search field
- **Pagination**: Used for navigating between pages
- **Skeleton**: Used for loading states

### Search Functionality

- The search functionality filters Pokémon by name
- Search parameters are preserved in the URL for sharing
- The search is performed client-side for better performance
- Pagination is hidden when search results are minimal

### Pagination

- Limited to a maximum of 10 pages
- Shows 12 items per page
- Pagination is only shown when there are multiple pages of results
- Maintains both search query and page number in URL parameters

### Error Handling

- Comprehensive error handling with user-friendly error messages
- Fallback data for when the API is rate-limited
- Error boundaries for both the main application and detail pages
- Retry mechanisms for failed requests

### Performance Optimizations

- Prefetches a limited set of Pokémon data for search functionality
- Uses React Suspense for loading states
- Implements skeleton loaders for better UX during data fetching
- Image optimization with Next.js Image component
- Data caching with revalidation strategy

### Best Practices

- Proper TypeScript typing for all components and functions
- Separation of UI components from data fetching logic
- Reusable components with clear interfaces
- Event delegation for list item interactions
- Responsive design with Tailwind CSS
- Error handling for API requests and edge cases

## Running the Project

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project can be easily deployed to Vercel:

\`\`\`bash
npm run build
npm run start
\`\`\`

Or use the Vercel CLI:

\`\`\`bash
vercel
\`\`\`
