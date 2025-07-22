'use client'

import React from 'react'
import { Clock, Brain, BarChart3, Target, Users, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import CountUp from './CountUp'

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: '⏰ 시간 도둑 실시간 감시',
      description: '매 15분마다 "지금 뭐하고 있나요?" 알림. 카카오톡 확인, 커피 타임, 멍때리기까지 모든 시간 도둑을 잡아냅니다. 하루 평균 47분 절약!',
      color: 'from-red-400 to-pink-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      icon: Brain,
      title: '🧠 AI 돈 계산기',
      description: '회의 30분 = 15만원, 메일 확인 10분 = 5만원. AI가 모든 활동을 돈으로 환산해서 보여줍니다. 돈이 새는 구멍을 실시간으로 발견!',
      color: 'from-blue-400 to-purple-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: BarChart3,
      title: '📊 낭비 레이더',
      description: '빨간불 켜진 업무는 즉시 중단! 불필요한 회의, 중복 업무, 비효율적인 프로세스를 한눈에 시각화. 월 평균 320만원 절약 효과!',
      color: 'from-green-400 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Target,
      title: '🎯 목표 달성 추적기',
      description: '계획 vs 실제 달성률을 실시간 비교. 목표 달성률 80% 이하면 즉시 알림! 팀 생산성 평균 42% 향상 입증!',
      color: 'from-orange-400 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: Users,
      title: '👥 팀 효율성 스코어',
      description: '누가 진짜 일하고 누가 시간만 때우는지 한눈에! 개인별 생산성 점수로 공정한 평가와 보상 시스템 구축 가능!',
      color: 'from-indigo-400 to-purple-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: Shield,
      title: '🔒 기업 보안 철통방어',
      description: '엔터프라이즈급 보안 시스템으로 데이터를 안전하게 보호합니다. 암호화된 데이터 전송과 저장으로 안심하고 사용하세요!',
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/50 to-transparent dark:via-primary-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium"
          >
            🚀 핵심 기능
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="text-red-600 dark:text-red-400">시간 도둑</span>을 잡는{' '}
            <span className="gradient-primary bg-clip-text text-transparent">6가지 방법</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI가 24시간 감시하며{' '}
            <span className="font-bold text-primary-600 dark:text-primary-400">돈 먹는 하마</span>들을 실시간으로 찾아냅니다.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                className={`group relative p-8 rounded-2xl ${feature.bgColor} hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <motion.div 
                  className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-300 dark:group-hover:border-primary-600 rounded-2xl transition-colors duration-300"></div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Benefits Highlight */}
        <AnimatedSection className="mt-20" delay={0.6}>
          <motion.div 
            className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              💰 AI 업무 트래커로 얻을 수 있는{' '}
              <span className="gradient-primary bg-clip-text text-transparent">핵심 혜택</span>
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '💰',
                  title: '비용 절약',
                  description: '불필요한 회의와 중복 업무를 식별하여 인건비를 절약하고, 효율적인 업무 배분으로 리소스를 최적화합니다.',
                  color: 'green',
                  gradient: 'from-green-400 to-emerald-600'
                },
                {
                  icon: '⏰',
                  title: '시간 관리',
                  description: 'AI가 업무 패턴을 분석하여 시간 낭비 요소를 찾아내고, 개인별 최적의 업무 스케줄을 제안합니다.',
                  color: 'yellow',
                  gradient: 'from-yellow-400 to-orange-600'
                },
                {
                  icon: '📊',
                  title: '데이터 기반 의사결정',
                  description: '객관적인 데이터를 바탕으로 팀 성과를 측정하고, 개선점을 명확히 파악하여 전략적 의사결정을 지원합니다.',
                  color: 'orange',
                  gradient: 'from-orange-400 to-red-600'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-2xl">{benefit.icon}</span>
                  </div>
                  <div className={`bg-gradient-to-r ${benefit.gradient} p-3 rounded-xl mb-4`}>
                    <p className="text-white font-bold text-center">{benefit.title}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection className="mt-20" delay={0.8}>
          <motion.div 
            className="bg-gradient-to-r from-blue-600 via-primary-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
            </div>
            
            <div className="relative z-10 text-center mb-8">
              <motion.h3 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                ✨ 실제 사용자들의 성과</motion.h3>
                          <p className="text-blue-100 text-lg">실제 사용자들이 달성한 놀라운 성과들</p>
            </div>
            
            <div className="relative z-10 grid md:grid-cols-4 gap-6">
                            {[
                { 
                  value: 47, 
                  suffix: '%',
                  label: '생산성 향상', 
                  icon: '📈',
                  description: '평균 업무 효율성 증가'
                },
                { 
                  value: 320, 
                  suffix: '만원',
                  label: '월 비용 절약', 
                  icon: '💰',
                  description: '불필요한 업무 제거'
                },
                { 
                  value: 2.5, 
                  suffix: '시간',
                  label: '일일 시간 절약', 
                  icon: '⏰',
                  description: '시간 도둑 차단 효과'
                },
                { 
                  value: 98, 
                  suffix: '%',
                  label: '사용자 만족도', 
                  icon: '⭐',
                  description: '고객 만족도 조사 결과'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">
                    <CountUp 
                      end={stat.value} 
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>
                  <div className="text-lg font-semibold text-blue-100 mb-1">{stat.label}</div>
                  <div className="text-sm text-blue-200">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
} 