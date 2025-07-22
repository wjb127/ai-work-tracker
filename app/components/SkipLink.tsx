'use client'

import { motion } from 'framer-motion'

export default function SkipLink() {
  return (
    <motion.a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50 font-medium"
      initial={{ y: -100, opacity: 0 }}
      whileFocus={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      메인 컨텐츠로 바로가기
    </motion.a>
  )
}