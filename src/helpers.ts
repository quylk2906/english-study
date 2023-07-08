export function getImageUrl(name: string) {
  return new URL(`../public/resources/${name}.jpg`, import.meta.url).href;
}

export function getAudioUrl(name: string) {
  return new URL(`../public/resources/${name}.mp3`, import.meta.url).href;
}

export function shuffleArray(arr: Data[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return [...arr];
}
