import SiteShell from '../components/SiteShell'
import Hero from '../components/Hero'
import About from '../components/About'
import WatchParties from '../components/WatchParties'
import Hours from '../components/Hours'
import Rewards from '../components/Rewards'
import TeamCTA from '../components/TeamCTA'
import Hashtag from '../components/Hashtag'
import PhotoGrid from '../components/PhotoGrid'

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <WatchParties />
      <Hours />
      <Rewards />
      <TeamCTA />
      <Hashtag />
      <PhotoGrid />
    </SiteShell>
  )
}
