import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function PhotoGallery() {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(null)

  const content = {
    en: {
      title: "Photo Gallery",
      description: "Explore moments from our community events and gatherings.",
      closeModal: "Close"
    },
    gu: {
      title: "ફોટો ગેલેરી",
      description: "અમારા સમુદાયના કાર્યક્રમો અને મેળાવડાઓના ક્ષણોની ઝલક જુઓ.",
      closeModal: "બંધ કરો"
    },
    hi: {
      title: "फोटो गैलरी",
      description: "हमारे सामुदायिक कार्यक्रमों और समारोहों के क्षणों का अन्वेषण करें।",
      closeModal: "बंद करें"
    }
  }

  // Mock data for gallery images
  const images = [
    { id: 1, src: "/placeholder.svg?height=300&width=400", alt: "Community gathering" },
    { id: 2, src: "/placeholder.svg?height=300&width=400", alt: "Annual function" },
    { id: 3, src: "/placeholder.svg?height=300&width=400", alt: "Youth event" },
    { id: 4, src: "/placeholder.svg?height=300&width=400", alt: "Cultural program" },
    { id: 5, src: "/placeholder.svg?height=300&width=400", alt: "Religious ceremony" },
    { id: 6, src: "/placeholder.svg?height=300&width=400", alt: "Charity drive" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 traditional-heading">{content[language].title}</h1>
      <p className="mb-6">{content[language].description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="cursor-pointer" onClick={() => setSelectedImage(image.src)}>
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover rounded-lg" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-3xl max-h-full">
            <img src={selectedImage || "/placeholder.svg"} alt="Selected" className="max-w-full max-h-[90vh] object-contain" />
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-4 bg-white text-black px-4 py-2 rounded"
            >
              {content[language].closeModal}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
