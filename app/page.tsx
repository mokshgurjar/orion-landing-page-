import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/Hero'
import Download from '@/components/sections/Download'
import TrustStrip from '@/components/sections/TrustStrip'
import Features from '@/components/sections/Features'
import Reasons from '@/components/sections/Reasons'
import Pipeline from '@/components/sections/Pipeline'
import Validation from '@/components/sections/Validation'
import Compare from '@/components/sections/Compare'
import Quote from '@/components/sections/Quote'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Download />
      <TrustStrip />
      <Features />
      <Reasons />
      <Pipeline />
      <Validation />
      <Compare />
      <Quote />
      <Footer />
    </>
  )
}
