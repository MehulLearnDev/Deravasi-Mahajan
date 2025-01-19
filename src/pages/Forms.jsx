import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Forms() {
  const { language } = useLanguage()
  const [formType, setFormType] = useState('')

  const content = {
    en: {
      title: "Online Forms",
      description: "Apply for certificates and submit forms online with easy payment integration.",
      selectForm: "Select a form type:",
      minorityCertificate: "Minority Certificate",
      membershipApplication: "Membership Application",
      otherForms: "Other Forms",
      apply: "Apply"
    },
    gu: {
      title: "ઓનલાઈન ફોર્મ્સ",
      description: "સરળ ચુકવણી એકીકરણ સાથે પ્રમાણપત્રો માટે અરજી કરો અને ઓનલાઈન ફોર્મ સબમિટ કરો.",
      selectForm: "ફોર્મનો પ્રકાર પસંદ કરો:",
      minorityCertificate: "લઘુમતી પ્રમાણપત્ર",
      membershipApplication: "સભ્યપદ અરજી",
      otherForms: "અન્ય ફોર્મ્સ",
      apply: "અરજી કરો"
    },
    hi: {
      title: "ऑनलाइन फॉर्म",
      description: "आसान भुगतान एकीकरण के साथ प्रमाणपत्रों के लिए आवेदन करें और ऑनलाइन फॉर्म जमा करें।",
      selectForm: "एक फॉर्म प्रकार चुनें:",
      minorityCertificate: "अल्पसंख्यक प्रमाणपत्र",
      membershipApplication: "सदस्यता आवेदन",
      otherForms: "अन्य फॉर्म",
      apply: "आवेदन करें"
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formType)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 traditional-heading">{content[language].title}</h1>
      <p className="mb-6">{content[language].description}</p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="formType" className="block mb-2">{content[language].selectForm}</label>
          <select
            id="formType"
            value={formType}
            onChange={(e) => setFormType(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">{content[language].selectForm}</option>
            <option value="minority">{content[language].minorityCertificate}</option>
            <option value="membership">{content[language].membershipApplication}</option>
            <option value="other">{content[language].otherForms}</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {content[language].apply}
        </button>
      </form>
    </div>
  )
}

