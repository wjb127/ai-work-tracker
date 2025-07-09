'use client'

import React, { useState } from 'react'
import { X, Mail, Check, AlertCircle, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { savePreorder } from '../../lib/supabase'

const preorderSchema = z.object({
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: '개인정보 처리방침에 동의해주세요'
  }),
  marketingConsent: z.boolean().optional()
})

type PreorderForm = z.infer<typeof preorderSchema>

interface PreorderModalProps {
  isOpen: boolean
  onClose: () => void
  service: string
}

export default function PreorderModal({ isOpen, onClose, service }: PreorderModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<PreorderForm>({
    resolver: zodResolver(preorderSchema)
  })

  const onSubmit = async (data: PreorderForm) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      await savePreorder(service, data.email, data.marketingConsent || false)
      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error('Preorder submission error:', error)
      setSubmitError('저장 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    setSubmitError(null)
    reset()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                아직 준비중입니다
              </h3>
              <p className="text-gray-600">
                사전예약 시 <span className="font-bold text-green-600">30% 할인 혜택</span>과 
                <span className="font-bold text-blue-600"> 우선 이용권</span>을 받으실 수 있습니다!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 주소
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Privacy Consent */}
              <div className="flex items-start space-x-3">
                <input
                  {...register('privacyConsent')}
                  type="checkbox"
                  id="privacyConsent"
                  className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="privacyConsent" className="text-sm text-gray-700">
                  <span className="font-medium text-red-600">*</span> 개인정보 처리방침에 동의합니다{' '}
                  <button
                    type="button"
                    className="text-primary-600 hover:text-primary-700 underline"
                    onClick={() => window.open('/privacy-policy', '_blank')}
                  >
                    (보기)
                  </button>
                </label>
              </div>
              {errors.privacyConsent && (
                <p className="text-sm text-red-600">{errors.privacyConsent.message}</p>
              )}

              {/* Marketing Consent */}
              <div className="flex items-start space-x-3">
                <input
                  {...register('marketingConsent')}
                  type="checkbox"
                  id="marketingConsent"
                  className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="marketingConsent" className="text-sm text-gray-700">
                  마케팅 정보 수신에 동의합니다 (선택)
                </label>
              </div>

              {/* Submit Error */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-600">{submitError}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    사전예약 중...
                  </>
                ) : (
                  '사전예약 하기'
                )}
              </button>
            </form>

            {/* Benefits */}
            <div className="mt-6 bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">🎁 사전예약 혜택</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• 정식 출시 시 30% 할인 쿠폰</li>
                <li>• 베타 테스트 우선 참여권</li>
                <li>• 1:1 온보딩 세션 무료 제공</li>
                <li>• 출시 알림 우선 발송</li>
              </ul>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              사전예약 완료!
            </h3>
            <p className="text-gray-600 mb-6">
              등록해주신 이메일로 출시 소식과 할인 혜택을 보내드리겠습니다.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              확인
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 