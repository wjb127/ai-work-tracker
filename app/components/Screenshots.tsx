import React from 'react'
import { Monitor, Smartphone, Tablet } from 'lucide-react'

export default function Screenshots() {
  const screenshots = [
    {
      title: '📝 일일 업무 입력 시스템',
      description: '매일 업무 내용, 소요 시간, 난이도를 간편하게 입력하고 카테고리별로 분류합니다.',
      image: '/api/placeholder/600/400',
      mockContent: {
        type: 'form',
        fields: ['업무 내용', '소요 시간', '난이도', '카테고리']
      }
    },
    {
      title: '📊 데이터 관리 대시보드',
      description: '엑셀 형태의 데이터 테이블과 시각화 차트로 업무 패턴을 한눈에 파악합니다.',
      image: '/api/placeholder/600/400',
      mockContent: {
        type: 'table',
        data: 'work_entries'
      }
    },
    {
      title: '🤖 개인 AI 분석 리포트',
      description: '축적된 데이터를 바탕으로 AI가 생성하는 맞춤형 업무 개선 제안을 받습니다.',
      image: '/api/placeholder/600/400',
      mockContent: {
        type: 'report',
        insights: ['업무 패턴 분석', '생산성 개선 조언']
      }
    },
    {
      title: '👥 팀 리더 관리 페이지',
      description: '팀원들의 업무 데이터를 조회하고 팀 전체 생산성 분석 및 리소스 배분을 최적화합니다.',
      image: '/api/placeholder/600/400',
      mockContent: {
        type: 'team_dashboard',
        members: ['김개발', '박기획', '이디자인']
      }
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
                          <div className="text-xs text-gray-500">
                            {screenshot.mockContent?.type === 'form' && '업무 입력'}
                            {screenshot.mockContent?.type === 'table' && '데이터 관리'}
                            {screenshot.mockContent?.type === 'report' && 'AI 분석'}
                            {screenshot.mockContent?.type === 'team_dashboard' && '팀 관리'}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-primary-100 rounded"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Dynamic Mock content based on type */}
                    <div className="flex-1 space-y-3">
                      {screenshot.mockContent?.type === 'form' && (
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="space-y-3">
                              <div className="flex space-x-3">
                                <div className="w-1/2">
                                  <div className="text-xs text-gray-500 mb-1">업무 내용</div>
                                  <div className="h-8 bg-gray-100 rounded border text-xs flex items-center px-2">
                                    회원가입 API 개발
                                  </div>
                                </div>
                                <div className="w-1/4">
                                  <div className="text-xs text-gray-500 mb-1">소요 시간</div>
                                  <div className="h-8 bg-gray-100 rounded border text-xs flex items-center px-2">
                                    3.5시간
                                  </div>
                                </div>
                                <div className="w-1/4">
                                  <div className="text-xs text-gray-500 mb-1">난이도</div>
                                  <div className="h-8 bg-gray-100 rounded border text-xs flex items-center px-2">
                                    보통
                                  </div>
                                </div>
                              </div>
                              <div className="flex space-x-3">
                                <div className="w-1/2">
                                  <div className="text-xs text-gray-500 mb-1">카테고리</div>
                                  <div className="h-8 bg-gray-100 rounded border text-xs flex items-center px-2">
                                    개발
                                  </div>
                                </div>
                                <div className="w-1/2">
                                  <div className="text-xs text-gray-500 mb-1">프로젝트</div>
                                  <div className="h-8 bg-gray-100 rounded border text-xs flex items-center px-2">
                                    사용자 인증 시스템
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="px-4 py-2 bg-primary-600 text-white rounded text-xs">
                              저장하기
                            </div>
                          </div>
                        </div>
                      )}

                      {screenshot.mockContent?.type === 'table' && (
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg shadow-sm border">
                            <div className="p-3 border-b">
                              <div className="grid grid-cols-5 gap-2 text-xs font-medium text-gray-700">
                                <div>날짜</div>
                                <div>업무 내용</div>
                                <div>시간</div>
                                <div>난이도</div>
                                <div>카테고리</div>
                              </div>
                            </div>
                            <div className="p-3 space-y-2">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="grid grid-cols-5 gap-2 text-xs text-gray-600">
                                  <div>2025.01.0{i}</div>
                                  <div>API 개발</div>
                                  <div>3.{i}h</div>
                                  <div>보통</div>
                                  <div>개발</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-1/2 h-12 bg-white rounded-lg shadow-sm border flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-sm font-bold text-primary-600">24.5h</div>
                                <div className="text-xs text-gray-500">이번 주</div>
                              </div>
                            </div>
                            <div className="w-1/2 h-12 bg-white rounded-lg shadow-sm border flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-sm font-bold text-green-600">↑15%</div>
                                <div className="text-xs text-gray-500">생산성</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {screenshot.mockContent?.type === 'report' && (
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="flex items-center space-x-2 mb-3">
                              <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                              <div className="text-xs font-medium text-gray-700">AI 분석 결과</div>
                            </div>
                            <div className="space-y-2">
                              <div className="text-xs text-gray-600">
                                • 오전 시간대 생산성이 35% 높습니다
                              </div>
                              <div className="text-xs text-gray-600">
                                • 회의 시간을 20% 줄이면 개발 시간 확보 가능
                              </div>
                              <div className="text-xs text-gray-600">
                                • 복잡한 업무는 오전에 배치하는 것을 권장
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="flex items-center space-x-2 mb-3">
                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                              <div className="text-xs font-medium text-gray-700">개선 제안</div>
                            </div>
                            <div className="space-y-2">
                              <div className="text-xs text-gray-600">
                                • 집중 시간 블록을 2시간으로 설정
                              </div>
                              <div className="text-xs text-gray-600">
                                • 유사 업무 묶어서 처리하기
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {screenshot.mockContent?.type === 'team_dashboard' && (
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="text-xs font-medium text-gray-700 mb-3">팀원 현황</div>
                            <div className="space-y-2">
                              {screenshot.mockContent.members?.map((member, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 bg-primary-100 rounded-full"></div>
                                    <div className="text-xs text-gray-700">{member}</div>
                                  </div>
                                  <div className="flex space-x-2">
                                    <div className="text-xs text-green-600">8.{idx + 1}h</div>
                                    <div className="text-xs text-gray-500">85%</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-1/2 h-12 bg-white rounded-lg shadow-sm border flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-sm font-bold text-primary-600">87%</div>
                                <div className="text-xs text-gray-500">팀 생산성</div>
                              </div>
                            </div>
                            <div className="w-1/2 h-12 bg-white rounded-lg shadow-sm border flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-sm font-bold text-primary-600">3명</div>
                                <div className="text-xs text-gray-500">활성 멤버</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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