export function whatsappLink(whatsappNumber: string, artworkTitle: string): string {
  const message = `Hola! Te escribo por la obra "${artworkTitle}" que vi en tu galería.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappGenericLink(whatsappNumber: string): string {
  const message = "Hola! Vi tu galería y quería hacerte una consulta.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
