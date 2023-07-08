export function getImageUrl(name: string) {
  return new URL(`../public/resources/${name}.jpg`, import.meta.url).href;
}

export function getAudioUrl(name: string) {
  return new URL(`../public/resources/${name}.mp3`, import.meta.url).href;
}
