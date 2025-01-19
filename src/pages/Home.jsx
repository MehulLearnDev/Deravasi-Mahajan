import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'
import { Button, Typography, Box, Container, Grid } from '@mui/material'
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Calendar, Users, FileText, Heart, Book, NotebookIcon as Lotus, Feather, Globe } from 'lucide-react'

export default function Home() {
  const { language } = useLanguage()

  const content = {
    en: {
      welcome: "Welcome to C.V.O.D Jain Mahajan, Mumbai",
      description: "Preserving Jain values, fostering community growth, and spreading compassion",
      learnMore: "Learn More",
      quickLinks: "Quick Links",
      events: "Upcoming Events",
      members: "Member Search",
      forms: "Online Forms",
      donate: "Donate Now",
      news: "Latest News",
      readMore: "Read More",
      values: "Our Values",
      ahimsa: "Ahimsa (Non-violence)",
      ahimsaDesc: "Respect for all living beings",
      satya: "Satya (Truthfulness)",
      satyaDesc: "Honesty in thoughts, speech, and actions",
      asteya: "Asteya (Non-stealing)",
      asteyaDesc: "Respecting others' possessions",
      aparigraha: "Aparigraha (Non-possession)",
      aparigrahaDesc: "Limiting possessions and attachments",
      initiatives: "Our Initiatives",
      education: "Education",
      educationDesc: "Scholarships and learning programs",
      healthcare: "Healthcare",
      healthcareDesc: "Medical camps and health awareness",
      animalWelfare: "Animal Welfare",
      animalWelfareDesc: "Protection and care for animals",
      culturalPreservation: "Cultural Preservation",
      culturalPreservationDesc: "Promoting Jain art, literature, and traditions",
      upcomingEvents: "Upcoming Events",
      date: "Date",
      time: "Time",
      venue: "Venue"
    },
    gu: {
      welcome: "સી.વી.ઓ.ડી જૈન મહાજન, મુંબઈમાં આપનું સ્વાગત છે",
      description: "જૈન મૂલ્યોનું જતન, સમુદાયની વૃદ્ધિને પ્રોત્સાહન અને કરુણાનો ફેલાવો",
      learnMore: "વધુ જાણો",
      quickLinks: "ઝડપી લિંક્સ",
      events: "આગામી કાર્યક્રમો",
      members: "સભ્ય શોધ",
      forms: "ઓનલાઇન ફોર્મ્સ",
      donate: "દાન કરો",
      news: "તાજા સમાચાર",
      readMore: "વધુ વાંચો",
      values: "અમારા મૂલ્યો",
      ahimsa: "અહિંસા",
      ahimsaDesc: "તમામ જીવિત પ્રાણીઓ પ્રત્યે આદર",
      satya: "સત્ય",
      satyaDesc: "વિચારો, વાણી અને ક્રિયાઓમાં પ્રામાણિકતા",
      asteya: "અસ્તેય",
      asteyaDesc: "અન્યની માલિકીનો આદર કરવો",
      aparigraha: "અપરિગ્રહ",
      aparigrahaDesc: "સંપત્તિ અને આસક્તિઓને મર્યાદિત કરવી",
      initiatives: "અમારી પહેલ",
      education: "શિક્ષણ",
      educationDesc: "શિષ્યવૃત્તિ અને શિક્ષણ કાર્યક્રમો",
      healthcare: "આરોગ્ય સંભાળ",
      healthcareDesc: "તબીબી શિબિરો અને આરોગ્ય જાગૃતિ",
      animalWelfare: "પશુ કલ્યાણ",
      animalWelfareDesc: "પશુઓની સુરક્ષા અને સંભાળ",
      culturalPreservation: "સાંસ્કૃતિક સંરક્ષણ",
      culturalPreservationDesc: "જૈન કલા, સાહિત્ય અને પરંપરાઓને પ્રોત્સાહન",
      upcomingEvents: "આગામી કાર્યક્રમો",
      date: "તારીખ",
      time: "સમય",
      venue: "સ્થળ"
    },
    hi: {
      welcome: "सी.वी.ओ.डी जैन महाजन, मुंबई में आपका स्वागत है",
      description: "जैन मूल्यों का संरक्षण, समुदाय की वृद्धि को बढ़ावा देना और करुणा का प्रसार",
      learnMore: "और जानें",
      quickLinks: "त्वरित लिंक",
      events: "आगामी कार्यक्रम",
      members: "सदस्य खोज",
      forms: "ऑनलाइन फॉर्म",
      donate: "दान करें",
      news: "ताजा समाचार",
      readMore: "और पढ़ें",
      values: "हमारे मूल्य",
      ahimsa: "अहिंसा",
      ahimsaDesc: "सभी जीवित प्राणियों के लिए सम्मान",
      satya: "सत्य",
      satyaDesc: "विचारों, वाणी और कार्यों में ईमानदारी",
      asteya: "अस्तेय",
      asteyaDesc: "दूसरों की संपत्ति का सम्मान करना",
      aparigraha: "अपरिग्रह",
      aparigrahaDesc: "संपत्ति और आसक्तियों को सीमित करना",
      initiatives: "हमारी पहल",
      education: "शिक्षा",
      educationDesc: "छात्रवृत्ति और शिक्षण कार्यक्रम",
      healthcare: "स्वास्थ्य देखभाल",
      healthcareDesc: "चिकित्सा शिविर और स्वास्थ्य जागरूकता",
      animalWelfare: "पशु कल्याण",
      animalWelfareDesc: "पशुओं की सुरक्षा और देखभाल",
      culturalPreservation: "सांस्कृतिक संरक्षण",
      culturalPreservationDesc: "जैन कला, साहित्य और परंपराओं को बढ़ावा देना",
      upcomingEvents: "आगामी कार्यक्रम",
      date: "तिथि",
      time: "समय",
      venue: "स्थान"
    }
  }

  const upcomingEvents = [
    {
      title: "Annual Paryushan Celebration",
      description: "Join us for the most important annual event in Jainism, featuring daily prayers, fasting, and spiritual reflection.",
      date: "August 15-22, 2023",
      time: "6:00 AM - 9:00 PM",
      venue: "CVOD Jain Mahajanwadi"
    },
    {
      title: "Youth Leadership Workshop",
      description: "Empower the next generation of Jain leaders with our interactive workshop focused on community service and personal growth.",
      date: "July 2, 2023",
      time: "10:00 AM - 4:00 PM",
      venue: "Community Center Hall"
    },
    {
      title: "Community Health Camp",
      description: "Free health check-ups and consultations with experienced doctors. Open to all community members.",
      date: "July 23, 2023",
      time: "9:00 AM - 3:00 PM",
      venue: "CVOD Jain School Grounds"
    }
  ];

  return (
    <div className="bg-[#FFF8E1]">
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("https://www.pelago.com/img/products/IN-India/private-transfer-from-udaipur-to-jodhpur-via-jain-temple-kumbhalgarh-fort/f1749b39-0e57-4690-8c27-98fceebf4670_private-transfer-from-udaipur-to-jodhpur-via-jain-temple-kumbhalgarh-fort-xlarge.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'fill',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center', color: 'white' }}>
          <Typography variant="h2" component="h1" gutterBottom className="font-bold">
            {content[language].welcome}
          </Typography>
          <Typography variant="h5" paragraph>
            {content[language].description}
          </Typography>
          <Button
            component={Link}
            to="/about"
            variant="contained"
            size="large"
            sx={{ mt: 2, backgroundColor: '#FFA500', '&:hover': { backgroundColor: '#FF8C00' } }}
          >
            {content[language].learnMore}
          </Button>
        </Container>
      </Box>

      {/* Quick Links Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom className="text-center mb-6 traditional-heading">
          {content[language].quickLinks}
        </Typography>
        <Grid container spacing={4}>
          <QuickLink icon={<Calendar className="h-8 w-8" />} title={content[language].events} link="/news-events" />
          <QuickLink icon={<Users className="h-8 w-8" />} title={content[language].members} link="/member-search" />
          <QuickLink icon={<FileText className="h-8 w-8" />} title={content[language].forms} link="/forms" />
          <QuickLink icon={<Heart className="h-8 w-8" />} title={content[language].donate} link="/donate" />
        </Grid>
      </Container>

      {/* Jain Values Section */}
      <Box sx={{ backgroundColor: '#FFF3E0', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom className="text-center mb-6 traditional-heading">
            {content[language].values}
          </Typography>
          <Grid container spacing={4}>
            <ValueCard icon={<Feather className="h-12 w-12" />} title={content[language].ahimsa} description={content[language].ahimsaDesc} />
            <ValueCard icon={<Lotus className="h-12 w-12" />} title={content[language].satya} description={content[language].satyaDesc} />
            <ValueCard icon={<Book className="h-12 w-12" />} title={content[language].asteya} description={content[language].asteyaDesc} />
            <ValueCard icon={<Globe className="h-12 w-12" />} title={content[language].aparigraha} description={content[language].aparigrahaDesc} />
          </Grid>
        </Container>
      </Box>

      {/* Initiatives Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom className="text-center mb-6 traditional-heading">
          {content[language].initiatives}
        </Typography>
        <Grid container spacing={4}>
          <InitiativeCard title={content[language].education} description={content[language].educationDesc} />
          <InitiativeCard title={content[language].healthcare} description={content[language].healthcareDesc} />
          <InitiativeCard title={content[language].animalWelfare} description={content[language].animalWelfareDesc} />
          <InitiativeCard title={content[language].culturalPreservation} description={content[language].culturalPreservationDesc} />
        </Grid>
      </Container>

      {/* Upcoming Events Section */}
      <Box sx={{ backgroundColor: '#FFF3E0', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom className="text-center mb-6 traditional-heading">
            {content[language].upcomingEvents}
          </Typography>
          <Grid container spacing={4}>
            {upcomingEvents.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="h-full">
                  <CardContent className="flex flex-col justify-between h-full p-6">
                    <div>
                      <Typography variant="h6" component="h3" gutterBottom className="traditional-heading">
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {event.description}
                      </Typography>
                    </div>
                    <div className="mt-4">
                      <Typography variant="body2" color="text.secondary">
                        <strong>{content[language].date}:</strong> {event.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>{content[language].time}:</strong> {event.time}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>{content[language].venue}:</strong> {event.venue}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

function QuickLink({ icon, title, link }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Link to={link} className="block">
        <Card className="hover:shadow-lg transition-shadow text-center h-full">
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <div className="mb-4 text-orange-500">{icon}</div>
            <Typography variant="h6" component="h3" className="traditional-heading">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

function ValueCard({ icon, title, description }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className="text-center h-full">
        <CardContent className="flex flex-col items-center justify-center h-full p-6">
          <div className="mb-4 text-orange-500">{icon}</div>
          <Typography variant="h6" component="h3" gutterBottom className="traditional-heading">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

function InitiativeCard({ title, description }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className="h-full">
        <CardContent className="flex flex-col justify-between h-full p-6">
          <Typography variant="h6" component="h3" gutterBottom className="traditional-heading">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

