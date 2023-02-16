export interface Livro {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: string;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  printType: string;
  mainCategory: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  contentVersion: string;
  imageLinks: ImageLinks;
  language: string;
  infoLink: string;
  canonicalVolumeLink: string;
  previewLink?: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface Item {
  volumeInfo: VolumeInfo
}

export interface LivrosResultado {
  items: Item[];
  kind: string;
  totalItems: number
}
