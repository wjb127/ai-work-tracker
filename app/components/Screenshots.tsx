import React from 'react'
import { Monitor, Smartphone, Tablet } from 'lucide-react'

export default function Screenshots() {
  const screenshots = [
    {
      title: '대시보드 개요',
      description: '팀의 전체적인 생산성 지표와 주요 인사이트를 한눈에 확인할 수 있습니다.',
      image: '/api/placeholder/600/400'
    },
    {
      title: '업무 기록 인터페이스',
      description: '직관적인 UI로 업무를 쉽게 기록하고 분류할 수 있습니다.',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'AI 분석 리포트',
      description: 'AI가 분석한 업무 패턴과 개선점을 상세한 리포트로 제공합니다.',
      image: '/api/placeholder/600/400'
    },
    {
      title: '팀 성과 비교',
      description: '팀원별 성과를 비교하고 최적의 업무 배분을 계획할 수 있습니다.',
      image: '/api/placeholder/600/400'
    }
  ]

  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            직관적인 인터페이스로 쉽게 사용하세요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            복잡한 데이터를 이해하기 쉬운 시각적 인터페이스로 제공하여 누구나 쉽게 사용할 수 있습니다.
          </p>
        </div>

        {/* Device Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button className="flex items-center px-4 py-2 rounded-md bg-white shadow-sm text-primary-600">
              <Monitor className="h-4 w-4 mr-2" />
              Desktop
            </button>
            <button className="flex items-center px-4 py-2 rounded-md text-gray-500 hover:text-gray-700">
              <Tablet className="h-4 w-4 mr-2" />
              Tablet
            </button>
            <button className="flex items-center px-4 py-2 rounded-md text-gray-500 hover:text-gray-700">
              <Smartphone className="h-4 w-4 mr-2" />
              Mobile
            </button>
          </div>
        </div>

        {/* Screenshots Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-6 bg-white border">
                {/* Browser mockup */}
                <div className="bg-gray-100 px-4 py-3 border-b flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 mx-4">
                    https://app.aiworktracker.com/dashboard
                  </div>
                </div>
                
                {/* Content area */}
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                          <Monitor className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{screenshot.title}</div>
                          <div className="text-xs text-gray-500">실시간 업데이트</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-primary-100 rounded"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Mock content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex space-x-3">
                        <div className="w-1/3 h-16 bg-white rounded-lg shadow-sm border flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary-600">85%</div>
                            <div className="text-xs text-gray-500">생산성</div>
                          </div>
                        </div>
                        <div className="w-1/3 h-16 bg-white rounded-lg shadow-sm border flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">↑12%</div>
                            <div className="text-xs text-gray-500">이번 주</div>
                          </div>
                        </div>
                        <div className="w-1/3 h-16 bg-white rounded-lg shadow-sm border flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">2.3h</div>
                            <div className="text-xs text-gray-500">절약</div>
                          </div>
                        </div>
                      </div>
                      <div className="h-20 bg-white rounded-lg shadow-sm border p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <div className="text-xs font-medium text-gray-700">주요 인사이트</div>
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-200 rounded w-full"></div>
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {screenshot.title}
              </h3>
              <p className="text-gray-600">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            모든 기기에서 완벽하게 작동합니다
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-6 w-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">데스크톱</h4>
              <p className="text-gray-600 text-sm">
                풀 스크린 대시보드로 모든 데이터를 한눈에 확인
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Tablet className="h-6 w-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">태블릿</h4>
              <p className="text-gray-600 text-sm">
                터치 최적화 인터페이스로 직관적인 조작
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">모바일</h4>
              <p className="text-gray-600 text-sm">
                언제 어디서나 업무 기록과 확인 가능
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 