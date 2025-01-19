import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { Typography, Container, Grid, Box } from '@mui/material'

export default function Footer() {
  const { language } = useLanguage()

  const content = {
    en: {
      contact: "Contact Us",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      rights: "All rights reserved."
    },
    gu: {
      contact: "અમારો સંપર્ક કરો",
      quickLinks: "ઝડપી લિંક્સ",
      followUs: "અમને અનુસરો",
      rights: "બધા અધિકારો સુરક્ષિત."
    },
    hi: {
      contact: "संपर्क करें",
      quickLinks: "त्वरित लिंक",
      followUs: "हमें फॉलो करें",
      rights: "सर्वाधिकार सुरक्षित।"
    }
  }

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {content[language].contact}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +91223475133 | +91223455464<br />
              Email: shrivodjainmahajan@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {content[language].quickLinks}
            </Typography>
            <Link to="/about" className="block hover:underline">About Us</Link>
            <Link to="/forms" className="block hover:underline">Forms</Link>
            <Link to="/member-search" className="block hover:underline">Member Search</Link>
            <Link to="/contact" className="block hover:underline">Contact</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {content[language].followUs}
            </Typography>
            <a href="https://www.youtube.com/@derawasijainmahajan2103" className="block hover:underline">YouTube</a>
            <a href="https://www.facebook.com/DerawasiJainMahajan" className="block hover:underline">Facebook</a>
            <a href="https://www.instagram.com/CVODJainMahajan" className="block hover:underline">Instagram</a>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
          © {new Date().getFullYear()} C.V.O.D Jain Mahajan. {content[language].rights}
        </Typography>
      </Container>
    </Box>
  )
}

