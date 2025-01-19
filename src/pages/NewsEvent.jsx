import { useLanguage } from '../context/LanguageContext'

export default function NewsEvents() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "News & Events",
      news: "Latest News",
      events: "Upcoming Events"
    },
    gu: {
      title: "સમાચાર અને કાર્યક્રમો",
      news: "તાજા સમાચાર",
      events: "આગામી કાર્યક્રમો"
    },
    hi: {
      title: "समाचार और कार्यक्रम",
      news: "ताजा समाचार",
      events: "आगामी कार्यक्रम"
    }
  }

  // Mock data for news and events
  const newsItems = [
    { id: 1, title: "Community gathering success", date: "2023-05-15" },
    { id: 2, title: "New educational program launched", date: "2023-05-10" },
  ]

  const eventItems = [
    { id: 1, title: "Annual General Meeting", date: "2023-06-20" },
    { id: 2, title: "Youth Leadership Workshop", date: "2023-07-05" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 traditional-heading">{content[language].title}</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 traditional-heading">{content[language].news}</h2>
          <ul className="space-y-4">
            {newsItems.map(item => (
              <li key={item.id} className="border-b pb-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.date}</p>
              </li>
            ))}
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 traditional-heading">{content[language].events}</h2>
          <ul className="space-y-4">
            {eventItems.map(item => (
              <li key={item.id} className="border-b pb-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

