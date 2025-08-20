import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safaris Adventure - Professional Road Transport Services in Kenya | Wedding, Airport, Events",
  description: "Premium road transport services in Nairobi, Kenya. Professional drivers for weddings, airport transfers, private hire, ceremonies, camping, and adventure trips. Available 24/7 with customer comfort as our priority.",
  
  keywords: [
    "transport services Kenya",
    "wedding car hire Nairobi",
    "airport transfers Nairobi",
    "private vehicle hire Kenya",
    "professional drivers Kenya",
    "event transportation",
    "funeral transport services",
    "camping transport",
    "road trip services",
    "Safaris Adventure Kenya"
  ],
  
  authors: [{ name: "Safaris Adventure" }],
  creator: "Safaris Adventure",
  publisher: "Safaris Adventure",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://safaris-adventrue.vercel.app', // Replace with actual domain
    title: 'Safaris Adventure - Road Services Anywhere, Anytime',
    description: 'Professional transport services in Kenya. Wedding cars, airport transfers, private hire, and adventure trips with experienced drivers. Book now via WhatsApp!',
    siteName: 'Safaris Adventure',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Replace with your actual image
        width: 1200,
        height: 630,
        alt: 'Safaris Adventure - Professional Transport Services',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Safaris Adventure - Professional Road Transport Services Kenya',
    description: 'Wedding transport, airport transfers, private hire & adventure trips. Professional drivers available 24/7. Book via WhatsApp!',
    images: ['https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'], // Replace with your actual image
    creator: '@SafarisAdventure', // Replace with actual Twitter handle if exists
  },
  
  category: 'business',
  
  other: {
    'contact:phone_number': '+254702308649',
    'contact:email': 'safarisadventure03@gmail.com',
    'business:contact_data:street_address': 'Nairobi, Kenya',
    'business:contact_data:locality': 'Nairobi',
    'business:contact_data:region': 'Nairobi County',
    'business:contact_data:country_name': 'Kenya',
  },
  
  alternates: {
    canonical: 'https://safaris-adventure.vercel.app', // Replace with actual domain
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
