import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Card, CardContent, CardHeader } from '../components/ui/card'
import { Calendar, Users, FileText, Heart } from 'lucide-react'

export default function Home() {
  const { language } = useLanguage()

  const content = {
    en: {
      welcome: "Welcome to C.V.O.D Jain Mahajan, Mumbai",
      description: "Serving the Jain community with dedication and commitment",
      quickLinks: "Quick Links",
      events: "Upcoming Events",
      members: "Member Search",
      forms: "Online Forms",
      donate: "Donate Now",
      news: "Latest News",
      readMore: "Read More"
    },
    gu: {
      welcome: "સી.વી.ઓ.ડી જૈન મહાજન, મુંબઈમાં આપનું સ્વાગત છે",
      description: "જૈન સમુદાયની સેવા સમર્પણ અને પ્રતિબદ્ધતા સાથે",
      quickLinks: "ઝડપી લિંક્સ",
      events: "આગામી કાર્યક્રમો",
      members: "સભ્ય શોધ",
      forms: "ઓનલાઇન ફોર્મ્સ",
      donate: "દાન કરો",
      news: "તાજા સમાચાર",
      readMore: "વધુ વાંચો"
    },
    hi: {
      welcome: "सी.वी.ओ.डी जैन महाजन, मुंबई में आपका स्वागत है",
      description: "जैन समुदाय की सेवा समर्पण और प्रतिबद्धता के साथ",
      quickLinks: "त्वरित लिंक",
      events: "आगामी कार्यक्रम",
      members: "सदस्य खोज",
      forms: "ऑनलाइन फॉर्म",
      donate: "दान करें",
      news: "ताजा समाचार",
      readMore: "और पढ़ें"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-12">
        <img
          src="https://sjc.microlink.io/JE_PH5n8p4YOL1grV2rUTGIM61jgNeAmfR3RiU0lyUP-N-CSf-NqUC8kO7lpW7LNcxKxTpx5YXA1tUINQxJkAw.jpeg"
          alt="CVOD Jain Mahajan Building"
          className="w-full h-[500px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{content[language].welcome}</h1>
            <p className="text-xl mb-8">{content[language].description}</p>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/about"
              size="large"
            >
              {content[language].readMore}
            </Button>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center traditional-heading">{content[language].quickLinks}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <QuickLink
          icon={<Calendar className="h-6 w-6" />}
          title={content[language].events}
          link="/news-events"
        />
        <QuickLink
          icon={<Users className="h-6 w-6" />}
          title={content[language].members}
          link="/member-search"
        />
        <QuickLink
          icon={<FileText className="h-6 w-6" />}
          title={content[language].forms}
          link="/forms"
        />
        <QuickLink
          icon={<Heart className="h-6 w-6" />}
          title={content[language].donate}
          link="/donate"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <h3 className="text-2xl font-semibold">{content[language].events}</h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Annual General Meeting - June 15, 2023</li>
              <li>Youth Leadership Workshop - July 2, 2023</li>
              <li>Community Picnic - July 23, 2023</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-2xl font-semibold">{content[language].news}</h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>New educational scholarship program launched</li>
              <li>Community center renovation completed</li>
              <li>Successful food drive feeds 1000 people</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function QuickLink({ icon, title, link }) {
  return (
    <Link to={link} className="block">
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-center text-center p-6">
          {icon}
          <h3 className="text-xl font-semibold mt-4">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}

