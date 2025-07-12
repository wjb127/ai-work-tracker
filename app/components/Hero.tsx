'use client'

import React, { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import PreorderModal from './PreorderModal'
import { recordPreorderClick } from '../../lib/supabase'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePreorderClick = async () => {
    await recordPreorderClick('ai-work-tracker')
    setIsModalOpen(true)
  }
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline - Simple + Clean */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI로 업무 효율성을
            <br />
            <span className="text-primary-600">극대화하세요</span>
          </h1>

          {/* Subheadline - Clear + Simple */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            매일 업무를 기록하고 AI가 분석하여 개인 맞춤형 생산성 개선 조언을 제공합니다.
            <br />
            <span className="font-semibold text-gray-800">팀 관리와 개인 업무 최적화를 한 번에</span>
          </p>

          {/* CTA Buttons - Simple */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={handlePreorderClick}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors flex items-center"
            >
              무료 체험 시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
              <Play className="mr-2 h-5 w-5" />
              데모 영상 보기
            </button>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-gray-500 mb-8">업무 효율성 혁신을 위한 AI 솔루션</p>
          </div>
        </div>
      </div>

      {/* Preorder Modal */}
      <PreorderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service="ai-work-tracker"
      />
    </section>
  )
} 