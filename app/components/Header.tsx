'use client'

import React, { useState } from 'react'
import { Menu, X, BarChart3 } from 'lucide-react'
import PreorderModal from './PreorderModal'
import { recordPreorderClick } from '../../lib/supabase'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePreorderClick = async () => {
    await recordPreorderClick('ai-work-tracker')
    setIsModalOpen(true)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">AI 업무 트래커</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">기능</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">작동방식</a>
            <a href="#screenshots" className="text-gray-600 hover:text-primary-600 transition-colors">스크린샷</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">가격</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary-600 transition-colors">로그인</button>
            <button 
              onClick={handlePreorderClick}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              무료 체험 시작
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">기능</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">작동방식</a>
              <a href="#screenshots" className="text-gray-600 hover:text-primary-600 transition-colors">스크린샷</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">가격</a>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full text-left text-gray-600 hover:text-primary-600 transition-colors mb-2">
                  로그인
                </button>
                <button 
                  onClick={handlePreorderClick}
                  className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  무료 체험 시작
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Preorder Modal */}
      <PreorderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service="ai-work-tracker"
      />
    </header>
  )
} 