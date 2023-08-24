export function convertDecimalToHex(num: number) {
  if (num < 0) return "00";
  if (num > 255) return "ff";
  const hex: string = num.toString(16);
  if (hex.length === 1) return `0${hex}`;
  return hex;
}

export function convertRgbToHex(r: number, g: number, b: number): string {
  // Your code here
  return `${convertDecimalToHex(r)}${convertDecimalToHex(
    g
  )}${convertDecimalToHex(b)}`;
}
