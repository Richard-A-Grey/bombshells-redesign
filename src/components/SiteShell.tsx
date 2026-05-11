import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import PageHead from './PageHead'

type SiteShellProps = {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  children: ReactNode
}

// Page wrapper. Every routable page mounts inside this so it gets the same
// nav chrome, footer, and head management without each page duplicating.
export default function SiteShell({
  title,
  description,
  image,
  noIndex,
  children,
}: SiteShellProps) {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <PageHead title={title} description={description} image={image} noIndex={noIndex} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
