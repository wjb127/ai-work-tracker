'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import PreorderModal from './PreorderModal'
import { recordPreorderClick } from '../../lib/supabase'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const phrases = ['업무 효율성을', '팀 생산성을', '시간 관리를', '성과를']
  
  useEffect(() => {
    const currentPhrase = phrases[currentIndex]
    let charIndex = 0
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % phrases.length)
        }, 2000)
      }
    }, 100)
    
    return () => clearInterval(typeInterval)
  }, [currentIndex])

  const handlePreorderClick = async () => {
    await recordPreorderClick('ai-work-tracker')
    setIsModalOpen(true)
  }

  const stats = [
    { icon: TrendingUp, value: '47%', label: '생산성 향상' },
    { icon: Clock, value: '2.5시간', label: '일일 시간 절약' },
    { icon: Users, value: '500+', label: '만족한 팀' },
  ]

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
        <div className="absolute inset-0 animated-gradient opacity-30"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -15, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0] 
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white dark:bg-gray-800 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI 기반 업무 혁신 솔루션</span>
          </motion.div>

          {/* Main Headline with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              AI로{' '}
              <span className="relative">
                <span className="text-primary-600 dark:text-primary-400">
                  {typedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 text-primary-600 dark:text-primary-400"
                >
                  |
                </motion.span>
              </span>
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">
                극대화하세요
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            매일 업무를 기록하고 AI가 분석하여 개인 맞춤형 생산성 개선 조언을 제공합니다.
            <br />
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              팀 관리와 개인 업무 최적화를 한 번에
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              onClick={handlePreorderClick}
              className="group relative bg-primary-600 dark:bg-primary-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">무료 체험 시작하기</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button 
              className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-6 py-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              데모 영상 보기
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group text-center p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
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