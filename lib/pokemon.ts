import { PokemonDetail, PokemonListItem, PokemonListResponse } from "./types";

// Constants for URLs
const POKE_URL = "https://pokeapi.co/api/v2/pokemon";
const POKE_IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

// Constants for pagination
export const ITEMS_PER_PAGE = 12;
export const MAX_PAGES = 10;
export const MAX_POKEMON = 151; // Limit to first generation for performance

// Hardcoded first generation Pokémon as fallback
// This helps avoid rate limiting issues with the API
export const FALLBACK_POKEMON: PokemonListItem[] = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
  { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
  { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
  { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
  { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
  { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
  { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
  { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
  { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
  { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
  { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
  { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
  { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
  { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
  { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
  { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
  { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
  { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
  { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" },
  { name: "spearow", url: "https://pokeapi.co/api/v2/pokemon/21/" },
  { name: "fearow", url: "https://pokeapi.co/api/v2/pokemon/22/" },
  { name: "ekans", url: "https://pokeapi.co/api/v2/pokemon/23/" },
  { name: "arbok", url: "https://pokeapi.co/api/v2/pokemon/24/" },
  { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
  { name: "raichu", url: "https://pokeapi.co/api/v2/pokemon/26/" },
  { name: "sandshrew", url: "https://pokeapi.co/api/v2/pokemon/27/" },
  { name: "sandslash", url: "https://pokeapi.co/api/v2/pokemon/28/" },
  { name: "nidoran-f", url: "https://pokeapi.co/api/v2/pokemon/29/" },
  { name: "nidorina", url: "https://pokeapi.co/api/v2/pokemon/30/" },
  { name: "nidoqueen", url: "https://pokeapi.co/api/v2/pokemon/31/" },
  { name: "nidoran-m", url: "https://pokeapi.co/api/v2/pokemon/32/" },
  { name: "nidorino", url: "https://pokeapi.co/api/v2/pokemon/33/" },
  { name: "nidoking", url: "https://pokeapi.co/api/v2/pokemon/34/" },
  { name: "clefairy", url: "https://pokeapi.co/api/v2/pokemon/35/" },
  { name: "clefable", url: "https://pokeapi.co/api/v2/pokemon/36/" },
  { name: "vulpix", url: "https://pokeapi.co/api/v2/pokemon/37/" },
  { name: "ninetales", url: "https://pokeapi.co/api/v2/pokemon/38/" },
  { name: "jigglypuff", url: "https://pokeapi.co/api/v2/pokemon/39/" },
  { name: "wigglytuff", url: "https://pokeapi.co/api/v2/pokemon/40/" },
  { name: "zubat", url: "https://pokeapi.co/api/v2/pokemon/41/" },
  { name: "golbat", url: "https://pokeapi.co/api/v2/pokemon/42/" },
  { name: "oddish", url: "https://pokeapi.co/api/v2/pokemon/43/" },
  { name: "gloom", url: "https://pokeapi.co/api/v2/pokemon/44/" },
  { name: "vileplume", url: "https://pokeapi.co/api/v2/pokemon/45/" },
  { name: "paras", url: "https://pokeapi.co/api/v2/pokemon/46/" },
  { name: "parasect", url: "https://pokeapi.co/api/v2/pokemon/47/" },
  { name: "venonat", url: "https://pokeapi.co/api/v2/pokemon/48/" },
  { name: "venomoth", url: "https://pokeapi.co/api/v2/pokemon/49/" },
  { name: "diglett", url: "https://pokeapi.co/api/v2/pokemon/50/" },
  { name: "dugtrio", url: "https://pokeapi.co/api/v2/pokemon/51/" },
  { name: "meowth", url: "https://pokeapi.co/api/v2/pokemon/52/" },
  { name: "persian", url: "https://pokeapi.co/api/v2/pokemon/53/" },
  { name: "psyduck", url: "https://pokeapi.co/api/v2/pokemon/54/" },
  { name: "golduck", url: "https://pokeapi.co/api/v2/pokemon/55/" },
  { name: "mankey", url: "https://pokeapi.co/api/v2/pokemon/56/" },
  { name: "primeape", url: "https://pokeapi.co/api/v2/pokemon/57/" },
  { name: "growlithe", url: "https://pokeapi.co/api/v2/pokemon/58/" },
  { name: "arcanine", url: "https://pokeapi.co/api/v2/pokemon/59/" },
  { name: "poliwag", url: "https://pokeapi.co/api/v2/pokemon/60/" },
  // Adding more Pokémon would make this file too large, so we'll stop at 60
  // The fallback will still work with pagination
];

// Fetch all Pokémon for search functionality with fallback
export async function getAllPokemon(): Promise<PokemonListItem[]> {
  try {
    const response = await fetch(`${POKE_URL}?limit=${MAX_POKEMON}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.warn(
        `API returned ${response.status}: ${response.statusText}. Using fallback data.`
      );
      return FALLBACK_POKEMON;
    }

    const data: PokemonListResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching all Pokémon:", error);
    // Return fallback data if API fails
    return FALLBACK_POKEMON;
  }
}

// Fetch details for a specific Pokémon with better error handling
export async function getPokemonDetails(
  id: string
): Promise<PokemonDetail | null> {
  try {
    const response = await fetch(`${POKE_URL}/${id}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.warn("Rate limit exceeded. Try again later.");
      }
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    return null;
  }
}

// Extract ID from Pokémon URL
export const extractIdFromUrl = (url: string) =>
  url.split("/").filter(Boolean).pop() || "";

// Get image URL for a Pokémon
export const getPokemonImageUrl = (id: string) => `${POKE_IMG_URL}/${id}.png`;
