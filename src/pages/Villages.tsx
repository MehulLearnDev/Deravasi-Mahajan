import React from 'react';
import { useLanguage } from "../context/LanguageContext";

export default function Villages() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "52-42 Villages",
      description: "Information about our community villages",
      viewWebsite: "View Website",
    },
    gu: {
      title: "૫૨-૪૨ ગામો",
      description: "અમારા સમુદાયના ગામો વિશે માહિતી",
      viewWebsite: "વેબસાઇટ જુઓ",
    },
    hi: {
      title: "52-42 गाँव",
      description: "हमारे समुदाय के गाँवों के बारे में जानकारी",
      viewWebsite: "वेबसाइट देखें",
    },
  };

  // Mock data for villages
  const villages = [
    { id: 1, name: "Village 1", website: "http://village1.com" },
    { id: 2, name: "Village 2", website: "http://village2.com" },
    // Add more villages as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 traditional-heading">
        {content[language].title}
      </h1>
      <p className="mb-6">{content[language].description}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {villages.map((village) => (
          <div key={village.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{village.name}</h2>
            <a
              href={village.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {content[language].viewWebsite}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
