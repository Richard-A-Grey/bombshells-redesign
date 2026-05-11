import SiteShell from '../components/SiteShell'
import Hero from '../components/Hero'
import About from '../components/About'
import Hours from '../components/Hours'
import Hashtag from '../components/Hashtag'
import PhotoGrid from '../components/PhotoGrid'

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Hours />
      <Hashtag />
      <PhotoGrid />
    </SiteShell>
  )
}
