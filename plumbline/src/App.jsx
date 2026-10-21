import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './ui.jsx'
import { Home, Services, ServiceDetail, Work, CaseStudy, Process, About, Contact, NotFound } from './pages.jsx'

export default function App() {
  return (<>
    <a href="#main" style={{ position: 'absolute', left: -999 }} onFocus={e => (e.target.style.left = '8px')} onBlur={e => (e.target.style.left = '-999px')}>Skip to content</a>
    <Header />
    <div id="main"><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:slug" element={<CaseStudy />} />
      <Route path="/process" element={<Process />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes></div>
    <Footer />
  </>)
}
