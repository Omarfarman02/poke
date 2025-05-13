"use server"

export async function logSearch(formData: FormData) {
  const searchTerm = formData.get("q")

  // Log the search term (in a real app, this might go to a database or analytics service)
  console.log(`Search term logged: ${searchTerm}`)

  // We could also store this in a database, send to an analytics service, etc.
  return { success: true, searchTerm }
}
