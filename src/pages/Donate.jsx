import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Donate() {
  const { language } = useLanguage()
  const [amount, setAmount] = useState('')

  const content = {
    en: {
      title: "Donate",
      description: "Support our community initiatives through secure online donations.",
      enterAmount: "Enter donation amount",
      currency: "₹",
      donate: "Donate Now"
    },
    gu: {
      title: "દાન કરો",
      description: "સુરક્ષિત ઓનલાઇન દાન દ્વારા અમારી સામુદાયિક પહેલોને સમર્થન આપો.",
      enterAmount: "દાનની રકમ દાખલ કરો",
      currency: "₹",
      donate: "હવે દાન કરો"
    },
    hi: {
      title: "दान करें",
      description: "सुरक्षित ऑनलाइन दान के माध्यम से हमारी सामुदायिक पहलों का समर्थन करें।",
      enterAmount: "दान राशि दर्ज करें",
      currency: "₹",
      donate: "अभी दान करें"
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle donation logic here
    console.log('Donation submitted:', amount)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 traditional-heading">{content[language].title}</h1>
      <p className="mb-6">{content[language].description}</p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2">{content[language].enterAmount}</label>
          <div className="relative">
            <span className="absolute left-3 top-2">{content[language].currency}</span>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 pl-8 border rounded"
              required
              min="1"
            />
          </div>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          {content[language].donate}
        </button>
      </form>
    </div>
  )
}

