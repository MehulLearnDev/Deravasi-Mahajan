import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const content = {
    en: {
      title: "Contact Us",
      description: "Get in touch with us for any inquiries or support.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
      address: "Address",
      phone: "Phone",
      emailLabel: "Email"
    },
    gu: {
      title: "અમારો સંપર્ક કરો",
      description: "કોઈપણ પૂછપરછ અથવા સહાય માટે અમારો સંપર્ક કરો.",
      name: "નામ",
      email: "ઇમેઇલ",
      message: "સંદેશ",
      submit: "સબમિટ કરો",
      address: "સરનામું",
      phone: "ફોન",
      emailLabel: "ઇમેઇલ"
    },
    hi: {
      title: "संपर्क करें",
      description: "किसी भी पूछताछ या सहायता के लिए हमसे संपर्क करें।",
      name: "नाम",
      email: "ईमेल",
      message: "संदेश",
      submit: "भेजें",
      address: "पता",
      phone: "फोन",
      emailLabel: "ईमेल"
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 traditional-heading text-center">{content[language].title}</h1>
      <p className="mb-10 text-center">{content[language].description}</p>
      
      <div className="grid md:grid-cols-2 gap-8"> 
        <div className=''>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">{content[language].name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">{content[language].email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">{content[language].message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <div className='flex justify-center'>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              {content[language].submit}
            </button>
            </div>
          </form>
        </div>
        
        <div className='text-center mt-4'>
          <h2 className="text-xl font-semibold mb-4">{content[language].address}</h2>
          <p className="mb-4">
          Shree CVOD Jain Mahajan Mumbai, 226-232 <br /> Narshi Natha St., Bhat Bazaar, Mumbai – 400009
          </p>
          <h2 className="text-xl font-semibold mb-4">{content[language].phone}</h2>
          <p className="mb-4">+91223475133 | +91223455464</p>
          <h2 className="text-xl font-semibold mb-4">{content[language].emailLabel}</h2>
          <p>info@cvodjainmahajan.org</p>
        </div>
      </div>
    </div>
  )
}

