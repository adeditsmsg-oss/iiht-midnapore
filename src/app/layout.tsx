import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IIHT Midnapore | Best IT Training Institute in Midnapore | CCNA, Cloud, Cybersecurity",
  description:
    "IIHT Midnapore — Leading IT training institute offering CCNA, CCNP, Cloud Computing, Cybersecurity, Python, Java, RHCE & more. 30+ years legacy, 100% placement assistance. Enroll now!",
  keywords: [
    "IIHT Midnapore",
    "IT training Midnapore",
    "computer training institute Midnapore",
    "CCNA course Midnapore",
    "CCNP training West Bengal",
    "cloud computing course Midnapore",
    "cybersecurity training Midnapore",
    "Python course Midnapore",
    "Java training Midnapore",
    "RHCE certification Midnapore",
    "MCSA training Midnapore",
    "best computer institute Midnapore",
    "IT placement Midnapore",
    "hardware networking course Midnapore",
    "SAP training Midnapore",
    "AWS training Midnapore",
    "ethical hacking course Midnapore",
  ],
  authors: [{ name: "IIHT Midnapore" }],
  creator: "IIHT Midnapore",
  publisher: "IIHT Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://iihtmidnapore.com",
    siteName: "IIHT Midnapore",
    title: "IIHT Midnapore | #1 IT Training Institute in Paschim Medinipur",
    description:
      "Launch your IT career with globally recognized certifications from IIHT Midnapore. Master Networking, Cloud Computing & Cybersecurity with 100% placement assistance.",
    images: [
      {
        url: "/images/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "IIHT Midnapore - IT Training Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IIHT Midnapore | Best IT Training Institute in Midnapore",
    description:
      "Master Networking, Cloud Computing & Cybersecurity with globally recognized certifications. 100% placement assistance. Enroll now!",
    images: ["/images/hero-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://iihtmidnapore.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00B7E8" />
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Midnapore" />
        <meta name="geo.position" content="22.4161484;87.3116577" />
        <meta name="ICBM" content="22.4161484, 87.3116577" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "IIHT Midnapore",
              alternateName: "Indian Institute of Hardware Technology - Midnapore",
              url: "https://iihtmidnapore.com",
              logo: "/images/logo.png",
              image: "/images/hero-banner.png",
              description:
                "Leading IT training institute in Midnapore offering CCNA, CCNP, Cloud Computing, Cybersecurity, Python, Java and more with 100% placement assistance.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Near Smart Computer, Dewan Babar Chawk, Judges Court Road, Dharma",
                addressLocality: "Midnapore",
                addressRegion: "West Bengal",
                postalCode: "721101",
                addressCountry: "IN",
              },
              telephone: "+91-8880830077",
              email: "info@iihtmidnapore.com",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 22.4161484,
                longitude: 87.3116577,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.3",
                reviewCount: "56",
                bestRating: "5",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "IIHT Technologies",
                url: "https://www.iiht.com",
              },
              sameAs: [
                "https://www.google.com/maps/place/IIHT+Midnapore/@22.4161484,87.3116577,17z",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT Certification Courses",
                itemListElement: [
                  { "@type": "Course", name: "CCNA & CCNP Networking" },
                  { "@type": "Course", name: "Cloud Computing & AWS" },
                  { "@type": "Course", name: "Cybersecurity & Ethical Hacking" },
                  { "@type": "Course", name: "Python & Java Programming" },
                  { "@type": "Course", name: "Red Hat Linux (RHCE)" },
                  { "@type": "Course", name: "Microsoft MCSA/MCSE" },
                  { "@type": "Course", name: "Hardware & Networking" },
                  { "@type": "Course", name: "SAP & ERP Solutions" },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
