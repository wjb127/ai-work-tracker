# AI 업무 트래커 - 고급 랜딩페이지

AI 기반 인력관리 SaaS 서비스의 현대적이고 인터랙티브한 랜딩페이지입니다.

## 🚀 주요 기능

### 💫 Core Features
- **Hero 섹션**: 타이핑 애니메이션과 동적 통계가 포함된 임팩트 있는 첫 화면
- **Features 섹션**: 인터랙티브 카드 애니메이션과 CountUp 효과
- **How It Works 섹션**: 4단계 사용 프로세스 가이드
- **Screenshots 섹션**: 제품 인터페이스 미리보기
- **CTA 섹션**: 행동 유도 및 신뢰 지표
- **Footer**: 연락처 및 링크 정보

### ✨ Advanced Features
- **다크모드 지원**: 시스템 설정에 따른 자동 전환
- **애니메이션**: Framer Motion 기반 부드러운 인터랙션
- **스크롤 애니메이션**: 섹션별 등장 애니메이션
- **프로그레스 바**: 스크롤 진행률 표시
- **커서 글로우**: 마우스 추적 글로우 효과
- **CountUp 애니메이션**: 숫자 증가 애니메이션
- **PWA 지원**: 앱처럼 설치 가능
- **반응형 디자인**: 모든 디바이스 최적화

## 🛠 기술 스택

### Frontend
- **Next.js 15** - React 프레임워크
- **TailwindCSS** - 유틸리티 우선 CSS 프레임워크
- **Framer Motion** - 애니메이션 라이브러리
- **TypeScript** - 타입 안정성

### UI/UX
- **next-themes** - 다크모드 지원
- **Lucide React** - 아이콘 라이브러리
- **React Hook Form** - 폼 관리
- **Headless UI** - 접근성 중심 UI 컴포넌트

### Performance & PWA
- **next-pwa** - Progressive Web App
- **React Intersection Observer** - 스크롤 기반 애니메이션

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 🌟 새로운 기능들

### 🎨 Visual Enhancements
- **Glass Morphism**: 반투명 유리 효과
- **Gradient Animations**: 동적 그라디언트 배경
- **Hover Effects**: 마이크로 인터랙션
- **Loading States**: 스켈레톤 로딩 UI

### 🔧 Technical Improvements
- **Performance**: 코드 스플리팅과 레이지 로딩
- **SEO**: 구조화된 데이터와 Open Graph 태그
- **Accessibility**: ARIA 라벨과 키보드 내비게이션
- **Type Safety**: 완전한 TypeScript 지원

### 📱 Mobile First
- **터치 친화적**: 터치 제스처 최적화
- **반응형 애니메이션**: 모바일에서도 부드러운 애니메이션
- **PWA**: 홈 화면에 설치 가능

## 프로젝트 구조

```
ai-work-tracker/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Screenshots.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 주요 섹션

### Hero
- 서비스 핵심 가치 제안
- 무료 체험 CTA
- 소셜 프루프

### Features
- 6개 핵심 기능 소개
- 생산성 향상 통계

### How It Works
- 4단계 사용 프로세스
- 각 단계별 세부 기능

### Screenshots
- 제품 인터페이스 미리보기
- 반응형 디자인 강조

### CTA
- 최종 행동 유도
- 신뢰 지표 및 통계

## 브랜딩

- **브랜드명**: AI 업무 트래커
- **주요 색상**: Primary Blue (#0ea5e9)
- **폰트**: Inter
- **아이콘**: Lucide React

## 사전예약 시스템

### 기능
- 모든 CTA 버튼 클릭 시 사전예약 모달 표시
- 이메일 수집 및 마케팅 동의 수집
- Supabase 연동 (설정 시) 또는 로컬 스토리지 저장

### 설정 방법
1. `.env.local` 파일에 Supabase 정보 입력:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

2. Supabase에서 테이블 생성:
```sql
-- 버튼 클릭 이벤트 저장용
CREATE TABLE preorder_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service TEXT NOT NULL,
  clicked_at TIMESTAMP DEFAULT now()
);

-- 이메일 + 마케팅 수신 동의 저장용
CREATE TABLE preorders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service TEXT NOT NULL,
  email TEXT NOT NULL,
  marketing_opt_in BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);
```

### 개발 모드에서 데이터 확인
Supabase가 설정되지 않은 경우 로컬 스토리지에 저장됩니다.

브라우저 개발자 도구 콘솔에서:
```javascript
// 사전예약 데이터 확인
JSON.parse(localStorage.getItem('preorders') || '[]')

// 클릭 데이터 확인
JSON.parse(localStorage.getItem('preorder_clicks') || '[]')
```

## 개발 노트

현재 모든 데이터는 컴포넌트 내부에 하드코딩되어 있습니다. 향후 백엔드 연동 시 API 호출로 교체 예정입니다. 