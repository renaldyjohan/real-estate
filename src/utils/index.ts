export const richTextToPlainText = (richText: any): string => {
  if (!richText || !richText.root || !Array.isArray(richText.root.children)) return ''

  return richText.root.children
    .map((child: any) => {
      if (typeof child.text === 'string') return child.text

      if (Array.isArray(child.children)) {
        return child.children.map((c: any) => c.text || '').join(' ')
      }

      return ''
    })
    .join(' ')
    .trim()
}

export const truncateDescription = (text: string | undefined, maxLength: number): string => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
