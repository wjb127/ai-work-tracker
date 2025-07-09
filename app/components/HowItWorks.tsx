import React from 'react'
import { PenTool, Zap, TrendingUp, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: PenTool,
      title: '업무 기록',
      description: '팀원들이 일일 업무를 시간대별로 기록하고 난이도와 유형을 선택합니다.',
      details: ['시간대별 업무 로그', '업무 난이도 선택', '업무 유형 분류', '진행 상황 업데이트']
    },
    {
      icon: Zap,
      title: 'AI 분석',
      description: 'AI가 축적된 데이터를 분석하여 업무 패턴과 비효율성을 자동으로 탐지합니다.',
      details: ['패턴 분석', '비효율성 탐지', '리소스 낭비 식별', '개선점 도출']
    },
    {
      icon: TrendingUp,
      title: '인사이트 제공',
      description: '분석 결과를 직관적인 대시보드로 시각화하여 실행 가능한 인사이트를 제공합니다.',
      details: ['대시보드 시각화', '성과 지표 분석', '개선 제안', '목표 설정']
    },
    {
      icon: CheckCircle,
      title: '생산성 향상',
      description: '데이터 기반의 의사결정으로 팀의 생산성을 지속적으로 개선합니다.',
      details: ['생산성 측정', '목표 달성 추적', '지속적 개선', '성과 모니터링']
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            간단한 4단계로 시작하세요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            복잡한 설정 없이 바로 시작할 수 있는 직관적인 프로세스로 팀의 생산성을 향상시키세요.
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
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
              무료 체험 시작하기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 