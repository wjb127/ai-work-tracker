import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge - Unexpected */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></span>
            ⚠️ 충격! 한국 직장인 하루 2.5시간이 사라진다
          </div>

          {/* Headline - Simple + Emotional */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">사라지는 시간</span>을 찾아
            <br />
            <span className="text-primary-600 relative">
              돈으로 바꾸세요
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C20 3 40 1 60 2C80 3 100 4 120 2C140 1 160 3 180 4C185 4 190 5 198 6" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.3"/>
              </svg>
            </span>
          </h1>

          {/* Subheadline - Concrete + Credible */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            매일 <span className="font-bold text-red-600">150분씩 증발</span>하는 업무시간. 
            <span className="font-bold text-green-600">연봉 5000만원 직원 1명당 월 208만원</span>이 허공으로 사라집니다.
            <br />
            <span className="font-semibold text-gray-800">500+ 기업이 이미 AI로 이 돈을 되찾았습니다.</span>
          </p>

          {/* CTA Buttons - Emotional + Concrete */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 flex items-center shadow-lg">
              💰 내 돈 되찾기 (무료 14일)
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
              <Play className="mr-2 h-5 w-5" />
              📊 실제 절약 사례 보기
            </button>
          </div>
          
          {/* Urgency Message */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-12 max-w-2xl mx-auto">
            <p className="text-yellow-800 font-medium text-center">
              ⏰ 지금 이 순간에도 돈이 사라지고 있습니다. 하루만 늦어도 <span className="font-bold">20만원 손실!</span>
            </p>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-gray-500 mb-8">이미 <span className="font-semibold text-gray-700">500+</span> 기업이 신뢰하고 사용하고 있습니다</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white h-16 w-32 rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-700 font-bold text-lg">SAMSUNG</span>
              </div>
              <div className="bg-white h-16 w-32 rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-700 font-bold text-lg">LG</span>
              </div>
              <div className="bg-white h-16 w-32 rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-700 font-bold text-lg">KAKAO</span>
              </div>
              <div className="bg-white h-16 w-32 rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-700 font-bold text-lg">NAVER</span>
              </div>
              <div className="bg-white h-16 w-32 rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-700 font-bold text-lg">COUPANG</span>
              </div>
            </div>
            
            {/* Trust badges */}
            <div className="flex justify-center items-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                SOC 2 Type II 인증
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                ISO 27001 준수
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                GDPR 완전 준수
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 