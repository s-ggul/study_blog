# Study Blog & 3D Gallery

블로그 겸 3D 미술관 겸 포트폴리오 페이지입니다.

## 🚀 기능

- **블로그**: MDX 기반 마크다운 블로그 시스템
- **3D 미술관**: THREE.js와 React Three Fiber를 활용한 인터랙티브 3D 갤러리
- **포트폴리오**: 프로젝트 경험과 기술 스택 소개
- **관리자 페이지**: 블로그 포스트 작성/수정/삭제 기능

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **3D Graphics**: THREE.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS, shadcn/ui
- **Blog**: MDX, @next/mdx
- **Animation**: Framer Motion
- **Deployment**: Vercel

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🎨 주요 컴포넌트

- **Navigation**: 반응형 네비게이션 바
- **Gallery3D**: 인터랙티브 3D 갤러리
- **BlogPage**: 블로그 포스트 목록
- **AdminPage**: 관리자 포스트 관리
- **PortfolioPage**: 포트폴리오 소개

## 🌐 페이지 구조

- `/` - 홈페이지
- `/blog` - 블로그 목록
- `/gallery` - 3D 미술관
- `/portfolio` - 포트폴리오
- `/admin` - 관리자 페이지

## 🚀 배포

Vercel을 통한 자동 배포가 설정되어 있습니다.

```bash
# Vercel CLI로 배포
vercel --prod
```

## 📝 블로그 포스트 작성

관리자 페이지(`/admin`)에서 새로운 블로그 포스트를 작성할 수 있습니다. 마크다운
형식을 지원합니다.

## 🎯 향후 계획

- [ ] 블로그 포스트 개별 페이지 구현
- [ ] 더 많은 3D 작품 추가
- [ ] 다크 모드 지원
- [ ] 검색 기능 추가
- [ ] 댓글 시스템 구현
