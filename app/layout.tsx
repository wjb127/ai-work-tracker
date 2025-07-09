import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 업무 트래커 - 스마트한 인력관리 솔루션',
  description: 'AI 기반 업무 분석으로 숨겨진 리소스 낭비를 줄이고 노동 생산성을 높이는 인력관리 SaaS',
  keywords: ['AI', '업무관리', '인력관리', '생산성', 'SaaS'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
} 