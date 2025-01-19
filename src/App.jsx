import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'
import Home from './pages/Home'
import About from './pages/About'
import Forms from './pages/Forms'
import PhotoGallery from './pages/PhotoGallery'
import Contact from './pages/Contact'
import MemberSearch from './pages/MemberSearch'
import KhabarPatrika from './pages/KhabarPatrika'
import Donate from './pages/Donate'
import NewsEvents from './pages/NewsEvent'
import Villages from './pages/Villages'

const theme = createTheme({
  palette: {
    primary: {
      main: '#8b4513',
    },
    secondary: {
      main: '#cd853f',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/*" element={<About />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/photo-gallery" element={<PhotoGallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/member-search" element={<MemberSearch />} />
                <Route path="/khabar-patrika" element={<KhabarPatrika />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/news-events" element={<NewsEvents />} />
                <Route path="/villages" element={<Villages />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

