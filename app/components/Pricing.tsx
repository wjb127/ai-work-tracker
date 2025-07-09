'use client'

import React, { useState } from 'react'
import { Check, Star, Zap, Building2 } from 'lucide-react'
import PreorderModal from './PreorderModal'
import { recordPreorderClick } from '../../lib/supabase'

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePreorderClick = async () => {
    await recordPreorderClick('ai-work-tracker')
    setIsModalOpen(true)
  }
  const plans = [
    {
      name: 'Starter',
      price: '무료',
      period: '영구',
      description: '소규모 팀을 위한 기본 기능',
      icon: Star,
      features: [
        '팀원 최대 5명',
        '기본 업무 기록',
        '주간 리포트',
        '이메일 지원',
        '데이터 보관 30일'
      ],
      limitations: [
        'AI 분석 기능 제한',
        '고급 시각화 미제공'
      ],
      buttonText: '무료로 시작하기',
      buttonStyle: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
      popular: false
    },
    {
      name: 'Professional',
      price: '29,000원',
      period: '월',
      description: '성장하는 팀을 위한 완전한 솔루션',
      icon: Zap,
      features: [
        '팀원 최대 50명',
        '고급 AI 분석',
        '실시간 대시보드',
        '맞춤형 리포트',
        '우선 지원',
        '데이터 보관 1년',
        'API 접근',
        '고급 시각화'
      ],
      limitations: [],
      buttonText: '14일 무료 체험',
      buttonStyle: 'bg-primary-600 text-white hover:bg-primary-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '맞춤 견적',
      period: '',
      description: '대기업을 위한 엔터프라이즈 솔루션',
      icon: Building2,
      features: [
        '무제한 팀원',
        '완전한 AI 분석 스위트',
        '전용 계정 관리자',
        '24/7 전화 지원',
        '온프레미스 배포',
        '맞춤형 통합',
        'SSO 및 고급 보안',
        '무제한 데이터 보관'
      ],
      limitations: [],
      buttonText: '영업팀 문의',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Concrete & Emotional */}
        <div className="text-center mb-16">
          <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8 max-w-4xl mx-auto">
            <p className="text-red-800 font-bold text-lg">
              ⚠️ 경쟁사는 이미 시작했습니다. 당신만 뒤처지고 있어요!
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">하루 20만원</span> vs <span className="text-green-600">월 2만원</span>
            <br />
            뭘 선택하시겠어요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="font-bold text-red-600">매일 손실되는 20만원</span>을 막으려면 <span className="font-bold text-green-600">월 2만원</span>만 투자하세요.
            <br />
            <span className="text-gray-800 font-semibold">ROI 1000%! 이보다 확실한 투자는 없습니다.</span>
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button className="px-6 py-2 rounded-md bg-primary-600 text-white font-medium">
              월간 결제
            </button>
            <button className="px-6 py-2 rounded-md text-gray-600 hover:text-gray-900 font-medium">
              연간 결제 (20% 할인)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-primary-600' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    가장 인기
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-2">/ {plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, limitationIndex) => (
                  <li key={limitationIndex} className="flex items-center opacity-60">
                    <div className="h-5 w-5 mr-3 flex-shrink-0 flex items-center justify-center">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-500 text-sm">{limitation}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handlePreorderClick}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            자주 묻는 질문
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">무료 체험 기간 동안 모든 기능을 사용할 수 있나요?</h4>
              <p className="text-gray-600 text-sm">네, Professional 플랜의 모든 기능을 14일 동안 제한 없이 사용하실 수 있습니다. 신용카드 등록도 필요 없습니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">언제든지 플랜을 변경할 수 있나요?</h4>
              <p className="text-gray-600 text-sm">언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경 사항은 다음 결제 주기부터 적용됩니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">데이터 보안은 어떻게 보장되나요?</h4>
              <p className="text-gray-600 text-sm">SOC 2 Type II 인증과 ISO 27001 표준을 준수하며, 모든 데이터는 암호화되어 안전하게 보관됩니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">온프레미스 배포가 가능한가요?</h4>
              <p className="text-gray-600 text-sm">Enterprise 플랜에서는 온프레미스 배포를 지원합니다. 자세한 내용은 영업팀에 문의해 주세요.</p>
            </div>
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