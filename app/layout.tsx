import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"

const _cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://imagerybyb.com'),
  title: {
    default: "ImageryBYB - Houston Wedding Photographer | Professional Wedding Photography & Engagement Sessions in Texas",
    template: "%s | ImageryBYB Wedding Photography"
  },
  description:
    "Professional wedding photographer in Houston, Texas capturing authentic love stories. Specializing in wedding photography, engagement sessions, couples photography, and special event coverage. Together Forever starts here with ImageryBYB - creating timeless memories that honor your unique love story.",
  keywords: [
    // Core Services
    "wedding photographer Houston",
    "Houston wedding photography",
    "wedding photographer Texas",
    "professional wedding photographer",
    "Houston engagement photographer",
    "engagement photography Houston",
    "couples photography Houston",
    "wedding photography services",

    // Location-based
    "Houston Texas wedding photographer",
    "wedding photographer near me Houston",
    "Texas wedding photographer",
    "Houston TX photographer",
    "local wedding photographer Houston",

    // Service-specific
    "engagement session Houston",
    "together forever session",
    "couples session Houston",
    "bridal photography Houston",
    "wedding day photography",
    "full day wedding coverage",
    "event photography Houston",
    "corporate event photographer Houston",

    // Style & Approach
    "authentic wedding photography",
    "natural wedding photography",
    "emotional wedding photography",
    "candid wedding photographer",
    "storytelling wedding photography",
    "romantic wedding photography",
    "modern wedding photography",
    "artistic wedding photography",

    // Package Features
    "wedding photographer with engagement shoot",
    "professional photo editing",
    "digital gallery wedding photos",
    "full day wedding photographer",
    "multiple location engagement session",

    // Related Services
    "bridal portraits Houston",
    "wedding videography Houston",
    "destination wedding photographer",
    "elopement photographer",
    "intimate wedding photographer",

    // Brand & Specific
    "ImageryBYB",
    "Bilal Gilbert photographer",
    "Bilal wedding photographer",
    "together forever photography",

    // Action-oriented
    "book wedding photographer Houston",
    "hire wedding photographer Texas",
    "affordable wedding photographer Houston",
    "best wedding photographer Houston",
    "top rated wedding photographer",

    // Occasion-specific
    "outdoor wedding photographer",
    "indoor wedding photography",
    "church wedding photographer",
    "venue wedding photography",
    "reception photography",

    // Additional
    "wedding photography packages Houston",
    "engagement photo session",
    "pre-wedding photography",
    "save the date photos",
    "wedding photo gallery",
    "professional wedding photos"
  ],
  authors: [{ name: "Bilal Gilbert" }, { name: "ImageryBYB" }],
  creator: "ImageryBYB",
  publisher: "ImageryBYB",

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
    locale: 'en_US',
    url: 'https://imagerybyb.com',
    siteName: 'ImageryBYB Wedding Photography',
    title: 'ImageryBYB - Houston Wedding Photographer | Professional Wedding Photography',
    description: 'Professional wedding photographer in Houston, Texas capturing authentic love stories. Specializing in wedding photography, engagement sessions, and couples photography. Together Forever starts here.',
    images: [
      {
        url: '/og_images/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'ImageryBYB - Houston Wedding Photographer',
        type: 'image/png',
      },
      {
        url: '/og_images/1080x1080.png',
        width: 1080,
        height: 1080,
        alt: 'ImageryBYB Wedding Photography',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ImageryBYB - Houston Wedding Photographer | Professional Wedding Photography',
    description: 'Professional wedding photographer in Houston, Texas capturing authentic love stories. Specializing in wedding photography, engagement sessions, and couples photography.',
    images: ['/og_images/1200x630.png'],
    creator: '@imagerybyb',
    site: '@imagerybyb',
  },

  icons: {
    icon: [
      {
        url: "/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicons/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicons/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicons/android-chrome-512x512.png",
      },
    ],
  },

  manifest: '/site.webmanifest',

  alternates: {
    canonical: 'https://imagerybyb.com',
  },

  category: 'Photography',

  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://imagerybyb.com',
    name: 'ImageryBYB',
    alternateName: 'Imagery By Bilal',
    image: 'https://imagerybyb.com/og_images/1200x630.png',
    description: 'Professional wedding photographer in Houston, Texas capturing authentic love stories. Specializing in wedding photography, engagement sessions, and couples photography.',
    url: 'https://imagerybyb.com',
    telephone: '',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '29.7604',
      longitude: '-95.3698',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Houston',
      },
      {
        '@type': 'State',
        name: 'Texas',
      },
    ],
    serviceType: [
      'Wedding Photography',
      'Engagement Photography',
      'Couples Photography',
      'Event Photography',
      'Bridal Photography',
    ],
    founder: {
      '@type': 'Person',
      name: 'Bilal Gilbert',
      jobTitle: 'Wedding Photographer',
    },
    sameAs: [
      'https://instagram.com/imagerybyb',
      'https://facebook.com/imagerybyb',
      'https://twitter.com/imagerybyb',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '4',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Christina & Alvaro',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        reviewBody: 'Loved working with Bilal! He made our wedding day extra special with his attention to detail. From my first look with my father to the cake cutting, he has such an amazing team and I will forever be grateful to him for being a part of our day.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Flo & Pierre',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        reviewBody: 'When I tell you as long as this young man is doing photos he will have a customer for life in my family. Bilal is very respectful, professional, he\'s able to bring any of your picture dreams to life.',
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${_inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
