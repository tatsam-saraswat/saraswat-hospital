import { useReveal } from './hooks/useReveal'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Services from './components/Services'
import About from './components/About'
import Doctors from './components/Doctors'
import Gallery from './components/Gallery'
import CtaBanner from './components/CtaBanner'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsappFloat from './components/WhatsappFloat'

export default function App() {
  useReveal()

  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <About />
        <Doctors />
        <Gallery />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
