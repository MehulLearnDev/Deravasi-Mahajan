import { useLanguage } from "../context/LanguageContext";

export default function KhabarPatrika() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Khabar Patrika",
      description: "Stay updated with our community newsletter.",
      latestIssue: "Latest Issue",
      archives: "Archives",
      readMore: "Read More",
      downloadPDF: "Download PDF",
    },
    gu: {
      title: "ખબર પત્રિકા",
      description: "અમારા સમુદાયના સમાચારપત્ર સાથે અપડેટ રહો.",
      latestIssue: "તાજેતરનો અંક",
      archives: "આર્કાઇવ્સ",
      readMore: "વધુ વાંચો",
      downloadPDF: "PDF ડાઉનલોડ કરો",
    },
    hi: {
      title: "खबर पत्रिका",
      description: "हमारे समुदाय के न्यूज़लेटर के साथ अपडेट रहें।",
      latestIssue: "नवीनतम अंक",
      archives: "पुरालेख",
      readMore: "और पढ़ें",
      downloadPDF: "PDF डाउनलोड करें",
    },
  };

  // Mock data for Khabar Patrika issues
  const latestIssue = {
    title: "May 2023 Issue",
    description:
      "Featuring community updates, upcoming events, and member spotlights.",
    pdfUrl: "/path-to-pdf/may-2023.pdf",
  };

  const archiveIssues = [
    { id: 1, title: "April 2023 Issue", pdfUrl: "/path-to-pdf/april-2023.pdf" },
    { id: 2, title: "March 2023 Issue", pdfUrl: "/path-to-pdf/march-2023.pdf" },
    {
      id: 3,
      title: "February 2023 Issue",
      pdfUrl: "/path-to-pdf/february-2023.pdf",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 traditional-heading">
        {content[language].title}
      </h1>
      <p className="mb-6">{content[language].description}</p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {content[language].latestIssue}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">{latestIssue.title}</h3>
          <p className="mb-4">{latestIssue.description}</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:underline">
              {content[language].readMore}
            </a>
            <a
              href={latestIssue.pdfUrl}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content[language].downloadPDF}
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          {content[language].archives}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archiveIssues.map((issue) => (
            <div key={issue.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">{issue.title}</h3>
              <a
                href={issue.pdfUrl}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content[language].downloadPDF}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
