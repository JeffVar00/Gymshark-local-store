'use client'
 
export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith('https://static.wixstatic.com')) return src
  return `https://tiendamymcr.com${src}?w=${width}&q=${quality || 75}`
}