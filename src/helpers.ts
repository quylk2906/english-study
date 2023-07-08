export function getImageUrl(name: string) {
  return new URL(`../public/resources/${name}.jpg`, import.meta.url).href;
}
