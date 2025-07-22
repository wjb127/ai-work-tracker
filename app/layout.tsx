import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from './components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 업무 트래커 - 스마트한 인력관리 솔루션',
  description: 'AI 기반 업무 분석으로 숨겨진 리소스 낭비를 줄이고 노동 생산성을 높이는 인력관리 SaaS',
  keywords: ['AI', '업무관리', '인력관리', '생산성', 'SaaS', '업무효율성', '팀관리'],
  authors: [{ name: 'AI Work Tracker Team' }],
  creator: 'AI Work Tracker',
  publisher: 'AI Work Tracker',
  metadataBase: new URL('https://ai-work-tracker.com'),
  openGraph: {
    title: 'AI 업무 트래커 - 스마트한 인력관리 솔루션',
    description: 'AI 기반 업무 분석으로 숨겨진 리소스 낭비를 줄이고 노동 생산성을 높이는 인력관리 SaaS',
    url: 'https://ai-work-tracker.com',
    siteName: 'AI Work Tracker',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI 업무 트래커 - 스마트한 인력관리 솔루션',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 업무 트래커 - 스마트한 인력관리 솔루션',
    description: 'AI 기반 업무 분석으로 숨겨진 리소스 낭비를 줄이고 노동 생산성을 높이는 인력관리 SaaS',
    images: ['/og-image.png'],
  },
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
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17182549720"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17182549720');
          `}
        </Script>
        {/* Structured Data */}
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI 업무 트래커",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "AI 기반 업무 분석으로 숨겨진 리소스 낭비를 줄이고 노동 생산성을 높이는 인력관리 SaaS",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "KRW"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "127"
              }
            }
          `}
        </Script>
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 