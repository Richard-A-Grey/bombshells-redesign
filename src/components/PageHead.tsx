import { useEffect } from 'react'
import { bombshellsSite } from '../content/bombshellsContent'

type PageHeadProps = {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
}

// Lightweight head manager — no react-helmet dependency.
// Sets document.title and patches the OG/Twitter/description meta tags on mount.
export default function PageHead({
  title,
  description = bombshellsSite.seo.description,
  image = bombshellsSite.seo.image,
  noIndex = false,
}: PageHeadProps) {
  useEffect(() => {
    const finalTitle = title
      ? `${title} | ${bombshellsSite.shortName}`
      : bombshellsSite.seo.title
    document.title = finalTitle

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        const [, key, val] = selector.match(/\[(.*?)="(.*?)"\]/) ?? []
        if (key && val) el.setAttribute(key, val)
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', finalTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:image"]', 'content', image)
    setMeta('meta[name="twitter:title"]', 'content', finalTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', image)
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')

    if (noIndex) {
      setMeta('meta[name="robots"]', 'content', 'noindex,nofollow')
    }
  }, [title, description, image, noIndex])

  return null
}
