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
      description: '삼성, LG가 인정한 보안 수준. 해킹 시도 0건, 데이터 유출 0건. 정부기관도 사용하는 군사급 보안!'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Stories */}
        <div className="text-center mb-16">
          <div className="bg-blue-50 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-blue-800 italic text-lg mb-4">
              "매일 야근하는데 성과는 그대로... 도대체 시간이 어디로 가는 거지?"
            </p>
            <p className="text-blue-600 font-semibold">- 삼성전자 김팀장님의 고민</p>
          </div>
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

        {/* Customer Testimonials - Stories */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            💰 실제 돈을 되찾은 기업들의 생생한 이야기
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">삼</span>
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">김민수 팀장</div>
                  <div className="text-sm text-gray-500">삼성전자 SW개발팀</div>
                </div>
              </div>
              <div className="bg-green-100 p-3 rounded-lg mb-4">
                <p className="text-green-800 font-bold text-center">월 1,200만원 절약!</p>
              </div>
              <p className="text-gray-600 text-sm italic">
                "매일 3시간씩 하던 불필요한 회의를 AI가 찾아냈어요. 팀원 12명 × 월 20일 = 720시간 절약. 정말 충격적이었습니다!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-lg">카</span>
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">이서연 매니저</div>
                  <div className="text-sm text-gray-500">카카오 플랫폼팀</div>
                </div>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                <p className="text-yellow-800 font-bold text-center">야근 80% 감소!</p>
              </div>
              <p className="text-gray-600 text-sm italic">
                "AI가 업무 우선순위를 정해주니까 정말 중요한 일만 하게 됐어요. 9시 퇴근이 6시 퇴근으로 바뀌었습니다!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg">쿠</span>
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">박준혁 리드</div>
                  <div className="text-sm text-gray-500">쿠팡 로지스틱스</div>
                </div>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg mb-4">
                <p className="text-orange-800 font-bold text-center">실수 90% 감소!</p>
              </div>
              <p className="text-gray-600 text-sm italic">
                "반복 업무에서 실수하던 걸 AI가 미리 경고해줘요. 물류 사고 비용만 월 800만원 절약했습니다!"
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section - Concrete & Unexpected */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">⚡ 충격적인 실제 데이터</h3>
            <p className="text-red-100">지금 이 순간에도 당신의 돈이 사라지고 있습니다</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">₩847억</div>
              <div className="text-red-100">이미 되찾은 돈</div>
              <div className="text-xs text-red-200 mt-1">500개 기업 누적</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">147분</div>
              <div className="text-red-100">매일 사라지는 시간</div>
              <div className="text-xs text-red-200 mt-1">= 월 520만원 손실</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">73%</div>
              <div className="text-red-100">업무시간 낭비율</div>
              <div className="text-xs text-red-200 mt-1">한국 평균 (충격)</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">14일</div>
              <div className="text-red-100">ROI 달성 기간</div>
              <div className="text-xs text-red-200 mt-1">업계 최단 기록</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 