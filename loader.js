'use client'
 
export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith('https://static.wixstatic.com')) return src
  return `https://mmclothestore.vercel.app/${src}?w=${width}&q=${quality || 75}`
}