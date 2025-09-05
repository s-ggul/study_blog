# ESLint & Prettier 규칙 가이드

이 문서는 프로젝트에서 사용하는 ESLint와 Prettier 규칙에 대한 상세한
가이드입니다.

## 📋 목차

- [ESLint 규칙](#eslint-규칙)
- [Prettier 설정](#prettier-설정)
- [커밋 전 검사](#커밋-전-검사)
- [VS Code 설정](#vs-code-설정)
- [명령어 가이드](#명령어-가이드)
- [문제 해결](#문제-해결)

## 🔍 ESLint 규칙

### React 관련 규칙

| 규칙                       | 설정  | 설명                                     |
| -------------------------- | ----- | ---------------------------------------- |
| `react/react-in-jsx-scope` | `off` | Next.js에서는 React import가 불필요      |
| `react/prop-types`         | `off` | TypeScript를 사용하므로 PropTypes 불필요 |

### TypeScript 관련 규칙

| 규칙                                 | 설정    | 설명                                                     |
| ------------------------------------ | ------- | -------------------------------------------------------- |
| `@typescript-eslint/no-unused-vars`  | `error` | 사용하지 않는 변수 에러 (단, `_`로 시작하는 변수는 제외) |
| `@typescript-eslint/no-explicit-any` | `warn`  | `any` 타입 사용 시 경고                                  |

### 일반 규칙

| 규칙           | 설정    | 설명                                     |
| -------------- | ------- | ---------------------------------------- |
| `no-console`   | `warn`  | `console.log` 사용 시 경고               |
| `no-debugger`  | `error` | `debugger` 사용 시 에러                  |
| `prefer-const` | `error` | 재할당되지 않는 변수는 `const` 사용 강제 |
| `no-var`       | `error` | `var` 사용 금지, `let` 또는 `const` 사용 |

## 🎨 Prettier 설정

### 기본 설정

```json
{
  "semi": true, // 세미콜론 사용
  "trailingComma": "es5", // ES5에서 허용되는 trailing comma
  "singleQuote": false, // 더블 쿼트 사용
  "printWidth": 80, // 한 줄 최대 80자
  "tabWidth": 2, // 탭 크기 2칸
  "useTabs": false, // 스페이스 사용
  "bracketSpacing": true, // 객체 리터럴 괄호 내부 공백
  "bracketSameLine": false, // JSX 닫는 괄호를 새 줄에
  "arrowParens": "avoid", // 화살표 함수 매개변수 괄호 생략 가능
  "endOfLine": "lf" // Unix 스타일 줄바꿈
}
```

### 파일별 특별 설정

- **Markdown 파일**: `proseWrap: "always"` - 긴 줄 자동 줄바꿈
- **JSON 파일**: `printWidth: 120` - 더 넓은 줄 길이 허용

## 🔒 커밋 전 검사

### Husky + lint-staged 설정

커밋 시 자동으로 실행되는 검사:

1. **TypeScript/JavaScript 파일** (`.ts`, `.tsx`, `.js`, `.jsx`)
   - ESLint 자동 수정 (`eslint --fix`)
   - Prettier 포맷팅 (`prettier --write`)

2. **기타 파일** (`.json`, `.md`, `.css`)
   - Prettier 포맷팅만 적용

### 커밋이 차단되는 경우

- ESLint 에러가 있을 때
- Prettier 포맷팅이 맞지 않을 때
- TypeScript 타입 에러가 있을 때

## 💻 VS Code 설정

### 자동 포맷팅

- **저장 시 자동 포맷팅**: 활성화
- **기본 포맷터**: Prettier
- **ESLint 자동 수정**: 활성화
- **Import 자동 정렬**: 활성화

### 추천 확장 프로그램

- `esbenp.prettier-vscode` - Prettier
- `dbaeumer.vscode-eslint` - ESLint
- `bradlc.vscode-tailwindcss` - Tailwind CSS
- `ms-vscode.vscode-typescript-next` - TypeScript

## 🛠️ 명령어 가이드

### 린트 관련

```bash
# 전체 프로젝트 린트 검사
npm run lint

# 린트 에러 자동 수정
npm run lint:fix

# 특정 파일만 린트 검사
npx eslint src/components/Button.tsx

# 특정 파일 린트 자동 수정
npx eslint src/components/Button.tsx --fix
```

### 포맷팅 관련

```bash
# 전체 프로젝트 포맷팅
npm run format

# 포맷팅 검사 (수정하지 않음)
npm run format:check

# 특정 파일만 포맷팅
npx prettier --write src/components/Button.tsx
```

### 타입 검사

```bash
# TypeScript 타입 검사
npm run type-check
```

## 🚨 문제 해결

### 자주 발생하는 에러

#### 1. `@typescript-eslint/no-unused-vars` 에러

**문제**: 사용하지 않는 변수

```typescript
// ❌ 에러 발생
const unusedVariable = "hello";

// ✅ 해결 방법 1: 변수 제거
// 변수를 사용하지 않는다면 제거

// ✅ 해결 방법 2: 언더스코어 접두사 사용
const _unusedVariable = "hello";
```

#### 2. `no-console` 경고

**문제**: `console.log` 사용

```typescript
// ❌ 경고 발생
console.log("디버그 정보");

// ✅ 해결 방법 1: 제거
// 프로덕션 코드에서는 console.log 제거

// ✅ 해결 방법 2: ESLint 주석으로 무시
// eslint-disable-next-line no-console
console.log("디버그 정보");
```

#### 3. `prefer-const` 에러

**문제**: 재할당되지 않는 변수에 `let` 사용

```typescript
// ❌ 에러 발생
let name = "John";

// ✅ 해결 방법
const name = "John";
```

### 커밋이 실패하는 경우

1. **터미널에서 에러 메시지 확인**
2. **에러가 있는 파일을 수정**
3. **다시 커밋 시도**

```bash
# 에러 수정 후 다시 커밋
git add .
git commit -m "feat: 새로운 기능 추가"
```

## 📚 추가 자료

- [ESLint 공식 문서](https://eslint.org/docs/)
- [Prettier 공식 문서](https://prettier.io/docs/)
- [Husky 공식 문서](https://typicode.github.io/husky/)
- [lint-staged 공식 문서](https://github.com/okonet/lint-staged)

## 🤝 팀 규칙

1. **커밋 전 반드시 린트 검사 통과**
2. **코드 리뷰 시 포맷팅 일관성 확인**
3. **ESLint 에러는 즉시 수정**
4. **Prettier 설정 변경 시 팀 논의 필요**

---

_이 문서는 프로젝트의 코드 품질과 일관성을 유지하기 위한 가이드입니다._
