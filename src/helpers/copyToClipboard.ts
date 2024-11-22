
export function copyToClipboard(email: string) {
  if(!navigator.clipboard) return 

  return navigator.clipboard
  .writeText(email).catch(() => console.error('Navigator clipboard: Could not copy text'))
}