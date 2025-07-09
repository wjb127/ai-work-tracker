import React from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function CTA() {
  const benefits = [
    '💰 첫 달 무료 + 200% 환불 보장',
    '⚡ 설치 3분, 효과 즉시 확인',
    '🚨 24시간 내 ROI 달성 또는 전액 환불',
    '☎️ 전담 컨설턴트 무료 배정'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="inline-block bg-red-500 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6 animate-pulse">
            🚨 경고! 지금 이 순간에도 돈이 사라지고 있습니다
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-red-300">매일 20만원씩</span> 버리고 있는데
            <br />
            <span className="text-yellow-300">언제까지 모른 척</span> 하실 건가요?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            <span className="text-red-200 font-bold">하루 늦을 때마다 20만원 손실!</span>
            <br />
            삼성, LG, 카카오가 이미 되찾은 <span className="text-yellow-300 font-bold">847억원</span>
            <br />
            <span className="text-white font-semibold">다음 주자는 바로 당신입니다.</span>
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <span className="text-white font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 flex items-center shadow-lg animate-pulse">
              💰 지금 내 돈 되찾기 (무료)
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              📊 손실 계산기 (충격주의)
            </button>
          </div>
          
          {/* Urgency message */}
          <div className="bg-red-500 text-white rounded-lg p-4 mb-8 max-w-3xl mx-auto border-2 border-yellow-400">
            <div className="text-center">
              <p className="font-bold text-lg mb-2">🚨 마지막 경고!</p>
              <p className="text-sm">
                <span className="font-bold">오늘 밤 12시까지</span> 신청하면 
                <span className="text-yellow-300 font-bold"> 첫 3개월 100% 무료</span>
              </p>
              <p className="text-xs mt-2 text-red-200">
                내일부터는 정가 ₩99,000/월 (한정 혜택 종료)
              </p>
            </div>
          </div>
          
          {/* Timer */}
          <div className="bg-black/30 rounded-lg p-4 mb-12 max-w-md mx-auto">
            <p className="text-yellow-300 font-bold text-center mb-2">특가 혜택 종료까지</p>
            <div className="flex justify-center space-x-4 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">23</div>
                <div className="text-xs">시간</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">47</div>
                <div className="text-xs">분</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">32</div>
                <div className="text-xs">초</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-200">활성 기업</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-primary-200">사용자</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-primary-200">서비스 가동률</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="relative mt-20">
        <div className="absolute inset-x-0 bottom-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 text-white">
            <path
              fill="currentColor"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </div>
    </section>
  )
} 