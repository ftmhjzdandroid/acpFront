export function digits(text: string) {
  return text?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
