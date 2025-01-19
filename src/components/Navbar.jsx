import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const content = {
    en: {
      home: "Home",
      about: "About",
      forms: "Forms",
      donate: "Donate",
      members: "Members",
      newsEvents: "News & Events",
      villages: "Villages",
    },
    gu: {
      home: "મુખ્ય પૃષ્ઠ",
      about: "અમારા વિશે",
      forms: "ફોર્મ્સ",
      donate: "દાન કરો",
      members: "સભ્યો",
      newsEvents: "સમાચાર અને ઘટનાઓ",
      villages: "ગામડાઓ",
    },
    hi: {
      home: "मुख पृष्ठ",
      about: "हमारे बारे में",
      forms: "फॉर्म",
      donate: "दान करें",
      members: "सदस्य",
      newsEvents: "समाचार और घटनाएँ",
      villages: "गाँव",
    },
  };


  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="/assets/jain-logo-BuQoSvXh.png"
                alt="Deravasi Jain Mahajan"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link">{content[language].home}</Link>
            <Link to="/about" className="nav-link">{content[language].about}</Link>
            <Link to="/forms" className="nav-link">{content[language].forms}</Link>
            <Link to="/donate" className="nav-link">{content[language].donate}</Link>
            <Link to="/member-search" className="nav-link">{content[language].members}</Link>
            <Link to="/news-events" className="nav-link">{content[language].newsEvents}</Link>
            <Link to="/villages" className="nav-link">{content[language].villages}</Link>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="ml-4 border rounded p-1"
            >
              <option value="en">English</option>
              <option value="gu">ગુજરાતી</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="mobile-nav-link">{content[language].home}</Link>
            <Link to="/about" className="mobile-nav-link">{content[language].about}</Link>
            <Link to="/forms" className="mobile-nav-link">{content[language].forms}</Link>
            <Link to="/donate" className="mobile-nav-link">{content[language].donate}</Link>
            <Link to="/member-search" className="mobile-nav-link">{content[language].members}</Link>
            <Link to="/news-events" className="mobile-nav-link">{content[language].newsEvents}</Link>
            <Link to="/villages" className="mobile-nav-link">{content[language].villages}</Link>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-4 w-full border rounded p-2"
            >
              <option value="en">English</option>
              <option value="gu">ગુજરાતી</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  )
}

