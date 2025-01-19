import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function MemberSearch() {
  const { language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('name')

  const content = {
    en: {
      title: "Member Search",
      description: "Find members by name, surname, village, or membership number.",
      searchBy: "Search by:",
      name: "Name",
      surname: "Surname",
      village: "Village",
      membershipNumber: "Membership Number",
      enterSearch: "Enter search term",
      search: "Search"
    },
    gu: {
      title: "સભ્ય શોધ",
      description: "નામ, અટક, ગામ અથવા સભ્યપદ નંબર દ્વારા સભ્યો શોધો.",
      searchBy: "શોધ દ્વારા:",
      name: "નામ",
      surname: "અટક",
      village: "ગામ",
      membershipNumber: "સભ્યપદ નંબર",
      enterSearch: "શોધ શબ્દ દાખલ કરો",
      search: "શોધો"
    },
    hi: {
      title: "सदस्य खोज",
      description: "नाम, सरनेम, गाँव या सदस्यता संख्या द्वारा सदस्यों को खोजें।",
      searchBy: "खोज का आधार:",
      name: "नाम",
      surname: "सरनेम",
      village: "गाँव",
      membershipNumber: "सदस्यता संख्या",
      enterSearch: "खोज शब्द दर्ज करें",
      search: "खोजें"
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search submitted:', { searchType, searchTerm })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 traditional-heading">{content[language].title}</h1>
      <p className="mb-6">{content[language].description}</p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="searchType" className="block mb-2">{content[language].searchBy}</label>
          <select
            id="searchType"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="name">{content[language].name}</option>
            <option value="surname">{content[language].surname}</option>
            <option value="village">{content[language].village}</option>
            <option value="membershipNumber">{content[language].membershipNumber}</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="searchTerm" className="block mb-2">{content[language].enterSearch}</label>
          <input
            type="text"
            id="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {content[language].search}
        </button>
      </form>
    </div>
  )
}

