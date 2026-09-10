export type ArtworkStatus = "venta" | "vendida";

export interface Artwork {
  /** Identificador único, en minúsculas y sin espacios (ej: "atardecer-en-el-rio") */
  id: string;
  title: string;
  technique: string;
  dimensions: string;
  year: number;
  /** Ruta de la imagen dentro de /public, ej: "/images/artworks/mi-obra.jpg" */
  image: string;
  status: ArtworkStatus;
  /** Solo si status es "vendida". Formato libre, ej: "Noviembre 2024" */
  soldDate?: string;
}

// Obras de ejemplo. Reemplazá los datos y las imágenes por las reales:
// las imágenes van en public/images/artworks/.
export const artworks: Artwork[] = [
  {
    id: "obra-en-venta-1",
    title: "Título de la obra 1",
    technique: "Óleo sobre tela",
    dimensions: "60 x 80 cm",
    year: 2024,
    image: "/images/artworks/placeholder-1.svg",
    status: "venta",
  },
  {
    id: "obra-en-venta-2",
    title: "Título de la obra 2",
    technique: "Acrílico sobre tela",
    dimensions: "50 x 70 cm",
    year: 2024,
    image: "/images/artworks/placeholder-2.svg",
    status: "venta",
  },
  {
    id: "obra-en-venta-3",
    title: "Título de la obra 3",
    technique: "Óleo sobre madera",
    dimensions: "40 x 40 cm",
    year: 2023,
    image: "/images/artworks/placeholder-3.svg",
    status: "venta",
  },
  {
    id: "obra-vendida-1",
    title: "Título de la obra 4",
    technique: "Óleo sobre tela",
    dimensions: "70 x 100 cm",
    year: 2023,
    image: "/images/artworks/placeholder-4.svg",
    status: "vendida",
    soldDate: "Noviembre 2024",
  },
  {
    id: "obra-vendida-2",
    title: "Título de la obra 5",
    technique: "Acrílico sobre tela",
    dimensions: "50 x 50 cm",
    year: 2022,
    image: "/images/artworks/placeholder-5.svg",
    status: "vendida",
    soldDate: "Marzo 2024",
  },
];
