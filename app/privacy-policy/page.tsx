import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보처리방침</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 개인정보의 처리목적</h2>
              <p>
                AI 업무 트래커는 다음의 목적을 위하여 개인정보를 처리합니다:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>서비스 제공 및 계약 이행</li>
                <li>회원 관리 및 본인 확인</li>
                <li>고객 상담 및 불만 처리</li>
                <li>서비스 개선 및 신규 서비스 개발</li>
                <li>마케팅 및 광고 활용 (동의 시)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 개인정보의 처리 및 보유기간</h2>
              <p>
                개인정보는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시 동의받은 개인정보 보유·이용기간 내에서 처리·보유합니다.
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>회원 정보: 회원 탈퇴 시까지</li>
                <li>서비스 이용 기록: 3년</li>
                <li>마케팅 정보: 동의 철회 시까지</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 처리하는 개인정보의 항목</h2>
              <p>
                다음의 개인정보 항목을 처리하고 있습니다:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>필수항목: 이메일 주소</li>
                <li>선택항목: 마케팅 수신 동의 여부</li>
                <li>자동 수집 항목: 접속 IP 정보, 쿠키, 서비스 이용 기록</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 개인정보의 제3자 제공</h2>
              <p>
                회사는 정보주체의 개인정보를 개인정보의 처리 목적에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 개인정보처리의 위탁</h2>
              <p>
                회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>위탁받는 자: Supabase Inc.</li>
                <li>위탁하는 업무의 내용: 데이터베이스 관리 및 서버 운영</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
              <p>
                정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>개인정보 처리정지 요구권</li>
                <li>개인정보 열람요구권</li>
                <li>개인정보 정정·삭제요구권</li>
                <li>개인정보 처리정지 요구권</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 개인정보 보호책임자</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>개인정보 보호책임자</strong></p>
                <p>이름: 홍길동</p>
                <p>직책: 개인정보보호책임자</p>
                <p>연락처: privacy@ai-work-tracker.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 개인정보 처리방침 변경</h2>
              <p>
                이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                본 방침은 2024년 1월 1일부터 시행됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 