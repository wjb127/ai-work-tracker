import React from 'react'
import { Clock, Brain, BarChart3, Target, Users, Shield } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: '⏰ 시간 도둑 실시간 감시',
      description: '매 15분마다 "지금 뭐하고 있나요?" 알림. 카카오톡 확인, 커피 타임, 멍때리기까지 모든 시간 도둑을 잡아냅니다. 하루 평균 47분 절약!'
    },
    {
      icon: Brain,
      title: '🧠 AI 돈 계산기',
      description: '회의 30분 = 15만원, 메일 확인 10분 = 5만원. AI가 모든 활동을 돈으로 환산해서 보여줍니다. 돈이 새는 구멍을 실시간으로 발견!'
    },
    {
      icon: BarChart3,
      title: '📊 낭비 레이더',
      description: '빨간불 켜진 업무는 즉시 중단! 불필요한 회의, 중복 업무, 비효율적인 프로세스를 한눈에 시각화. 월 평균 320만원 절약 효과!'
    },
    {
      icon: Target,
      title: '🎯 목표 달성 추적기',
      description: '계획 vs 실제 달성률을 실시간 비교. 목표 달성률 80% 이하면 즉시 알림! 팀 생산성 평균 42% 향상 입증!'
    },
    {
      icon: Users,
      title: '👥 팀 효율성 스코어',
      description: '누가 진짜 일하고 누가 시간만 때우는지 한눈에! 개인별 생산성 점수로 공정한 평가와 보상 시스템 구축 가능!'
    },
    {
      icon: Shield,
      title: '🔒 기업 보안 철통방어',
      description: '엔터프라이즈급 보안 시스템으로 데이터를 안전하게 보호합니다. 암호화된 데이터 전송과 저장으로 안심하고 사용하세요!'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">시간 도둑</span>을 잡는 6가지 방법
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI가 24시간 감시하며 <span className="font-bold text-primary-600">돈 먹는 하마</span>들을 실시간으로 찾아냅니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Highlight */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            💰 AI 업무 트래커로 얻을 수 있는 핵심 혜택
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-lg">💰</span>
              </div>
              <div className="bg-green-100 p-3 rounded-lg mb-4">
                <p className="text-green-800 font-bold text-center">비용 절약</p>
              </div>
              <p className="text-gray-600 text-sm">
                불필요한 회의와 중복 업무를 식별하여 인건비를 절약하고, 효율적인 업무 배분으로 리소스를 최적화합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-yellow-600 font-bold text-lg">⏰</span>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                <p className="text-yellow-800 font-bold text-center">시간 관리</p>
              </div>
              <p className="text-gray-600 text-sm">
                AI가 업무 패턴을 분석하여 시간 낭비 요소를 찾아내고, 개인별 최적의 업무 스케줄을 제안합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 font-bold text-lg">📊</span>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg mb-4">
                <p className="text-orange-800 font-bold text-center">데이터 기반 의사결정</p>
              </div>
              <p className="text-gray-600 text-sm">
                객관적인 데이터를 바탕으로 팀 성과를 측정하고, 개선점을 명확히 파악하여 전략적 의사결정을 지원합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Highlight */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-primary-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">✨ 핵심 기능</h3>
            <p className="text-blue-100">AI 업무 트래커의 주요 특징들</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">🤖</div>
              <div className="text-blue-100">AI 분석</div>
              <div className="text-xs text-blue-200 mt-1">업무 패턴 자동 분석</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">📊</div>
              <div className="text-blue-100">시각화</div>
              <div className="text-xs text-blue-200 mt-1">직관적인 대시보드</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">👥</div>
              <div className="text-blue-100">팀 관리</div>
              <div className="text-xs text-blue-200 mt-1">팀 생산성 최적화</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">🔒</div>
              <div className="text-blue-100">보안</div>
              <div className="text-xs text-blue-200 mt-1">엔터프라이즈급 보안</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 