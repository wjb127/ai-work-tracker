# AI 업무 트래커 - 랜딩페이지

AI 기반 인력관리 SaaS 서비스의 랜딩페이지입니다.

## 기능

- **Hero 섹션**: 서비스 소개 및 주요 가치 제안
- **Features 섹션**: 핵심 기능 소개
- **How It Works 섹션**: 4단계 사용 프로세스
- **Screenshots 섹션**: 제품 인터페이스 미리보기
- **CTA 섹션**: 행동 유도 및 신뢰 지표
- **Footer**: 연락처 및 링크 정보

## 기술 스택

- **Next.js 15** - React 프레임워크
- **TailwindCSS** - 스타일링
- **Lucide React** - 아이콘
- **TypeScript** - 타입 안정성

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

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

## 개발 노트

현재 모든 데이터는 컴포넌트 내부에 하드코딩되어 있습니다. 향후 백엔드 연동 시 API 호출로 교체 예정입니다. 