export interface ArtistListItem {
  slug: string
  nome: string
  info?: string | null
  imagem?: string | null
}

export interface Artist {
  slug: string
  nome: string
  info?: string | null
  imagem?: string | null
  musicas?: Music[]
}
export interface Music {
  slug: string
  nome: string
  cifra: string
  info?: string
  video?: string
}
