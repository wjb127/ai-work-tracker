import React from 'react'
import { BarChart3, Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">AI 업무 트래커</span>
            </div>
            <p className="text-gray-400 mb-6">
              500+ 기업이 신뢰하는 AI 기반 업무 분석 플랫폼으로 팀의 생산성을 35% 향상시키세요.
            </p>
            <div className="text-sm text-gray-500 mb-6">
              <p>사업자등록번호: 123-45-67890</p>
              <p>통신판매업신고: 2024-서울강남-1234</p>
            </div>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">제품</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">기능</a></li>
              <li><a href="#" className="hover:text-white transition-colors">가격</a></li>
              <li><a href="#" className="hover:text-white transition-colors">보안</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">통합</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">지원</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">도움말 센터</a></li>
              <li><a href="#" className="hover:text-white transition-colors">문서</a></li>
              <li><a href="#" className="hover:text-white transition-colors">커뮤니티</a></li>
              <li><a href="#" className="hover:text-white transition-colors">상태 페이지</a></li>
              <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@aiworktracker.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>02-1234-5678 (평일 9-18시)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>서울시 강남구 테헤란로 123, 456호</span>
              </div>
              <div className="text-xs text-gray-500 mt-3">
                <p>고객센터: 1588-1234</p>
                <p>영업문의: sales@aiworktracker.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AI 업무 트래커. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">쿠키 정책</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 