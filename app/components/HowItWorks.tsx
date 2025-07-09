'use client'

import React, { useState } from 'react'
import { PenTool, Database, Bot, Users, CheckCircle } from 'lucide-react'
import PreorderModal from './PreorderModal'
import { recordPreorderClick } from '../../lib/supabase'

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePreorderClick = async () => {
    await recordPreorderClick('ai-work-tracker')
    setIsModalOpen(true)
  }
  const steps = [
    {
      icon: PenTool,
      title: '📝 일일 업무 입력',
      description: '매일 업무 내용, 소요 시간, 난이도를 간편하게 입력하고 프로젝트별로 분류합니다.',
      details: ['업무 내용 상세 기록', '정확한 시간 측정', '5단계 난이도 선택', '카테고리별 분류']
    },
    {
      icon: Database,
      title: '📊 데이터 축적 & 시각화',
      description: '입력된 데이터가 자동으로 축적되어 엑셀 형태 테이블과 차트로 시각화됩니다.',
      details: ['자동 데이터 저장', '엑셀 형태 관리', '시각화 차트 생성', '트렌드 분석']
    },
    {
      icon: Bot,
      title: '🤖 AI 분석 & 개인 리포트',
      description: '축적된 데이터를 AI가 분석하여 개인 맞춤형 생산성 개선 조언을 제공합니다.',
      details: ['업무 패턴 분석', '생산성 개선 조언', '시간 최적화 제안', '개인 맞춤 인사이트']
    },
    {
      icon: Users,
      title: '👥 팀 관리 & 팀 리포트',
      description: '팀 리더는 팀원들의 데이터를 조회하고 팀 전체 AI 분석 리포트를 확인할 수 있습니다.',
      details: ['팀원 데이터 조회', '팀 생산성 분석', '업무 배분 최적화', '팀 AI 리포트']
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 실제 서비스 사용 플로우
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            개인 업무 입력부터 팀 리더 관리까지, 실제 서비스가 어떻게 작동하는지 확인해보세요.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full">
            <div className="flex justify-between items-center px-32">
              <div className="w-1/4 h-0.5 bg-primary-300"></div>
              <div className="w-1/4 h-0.5 bg-primary-300"></div>
              <div className="w-1/4 h-0.5 bg-primary-300"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              지금 바로 시작해보세요
            </h3>
            <p className="text-gray-600 mb-8">
              설정은 5분이면 충분합니다. 30일 무료 체험으로 AI 업무 트래커의 강력함을 경험해보세요.
            </p>
            <button 
              onClick={handlePreorderClick}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              무료 체험 시작하기
            </button>
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