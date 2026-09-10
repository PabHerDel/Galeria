# Galería

Sitio estático (Astro) para mostrar obras de arte en venta y un histórico de
obras vendidas, con consulta directa por WhatsApp. Sin backend: todo el
contenido vive en archivos de datos dentro del repo.

## Estructura del contenido

- `src/data/profile.ts`: nombre, bio, foto de perfil y número de WhatsApp.
- `src/data/artworks.ts`: listado de obras (en venta e histórico).
- `public/images/artworks/`: imágenes de las obras.
- `public/images/profile-placeholder.svg`: foto de perfil (reemplazar por una real).

## Cómo administrar el contenido

No hay panel de administración: los cambios se hacen editando estos archivos
y pidiéndole a Claude Code que los aplique. Ejemplos de pedidos:

- "Agregá esta obra nueva: [título, técnica, medidas, año] con esta imagen [archivo]"
- "Marcá 'Título de la obra 2' como vendida, se vendió en [mes/año]"
- "Cambiá mi bio por este texto: ..."
- "Actualizá mi número de WhatsApp a ..."

Cada obra en `artworks.ts` tiene esta forma:

```ts
{
  id: "identificador-unico",
  title: "Título de la obra",
  technique: "Óleo sobre tela",
  dimensions: "60 x 80 cm",
  year: 2024,
  image: "/images/artworks/nombre-archivo.jpg",
  status: "venta", // o "vendida"
  soldDate: "Noviembre 2024", // solo si status es "vendida"
}
```

Para pasar una obra de "en venta" a "vendida", basta con cambiar
`status: "venta"` por `status: "vendida"` y agregar `soldDate`. Deja de
mostrarse el botón de WhatsApp y de precio, y aparece en la sección de
histórico con el sello "Vendida".

### Cargar imágenes nuevas

Copiá el archivo de imagen dentro de `public/images/artworks/` (formato
`.jpg`, `.png` o `.webp`, se recomienda que no pesen más de ~500KB para que
el sitio cargue rápido) y referencialo en `artworks.ts` con la ruta
`/images/artworks/nombre-archivo.jpg`.

## Número de WhatsApp

En `src/data/profile.ts`, el campo `whatsappNumber` debe tener el formato
internacional completo, sin `+`, espacios ni guiones. Ejemplo para un celular
argentino: `5491122334455` (54 = Argentina, 9 = celular, 11 = código de área,
resto = número).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre el sitio en `http://localhost:4321`.

## Build de producción

```bash
npm run build
npm run preview
```

## Deploy en Netlify (gratis)

1. Entrá a [netlify.com](https://netlify.com) y creá una cuenta gratuita
   (podés usar tu cuenta de GitHub para loguearte).
2. "Add new site" → "Import an existing project" → elegí GitHub y
   seleccioná este repositorio.
3. Netlify va a detectar automáticamente la configuración de `netlify.toml`
   (build command `npm run build`, carpeta a publicar `dist`). Confirmá el
   deploy.
4. En unos minutos vas a tener una URL tipo `tu-sitio.netlify.app`. Podés
   cambiar ese nombre desde "Site settings" → "Change site name", o
   conectar un dominio propio desde "Domain settings".
5. A partir de ahí, cada vez que se suba un cambio a la rama principal del
   repositorio, Netlify vuelve a construir y publicar el sitio
   automáticamente.
