# SAEROM 프로젝트 리팩토링 계획

## 🎯 목표
- 기존 디자인 유지하면서 코드 일관성 향상
- 개발자 친화적인 구조로 개선
- 유지보수성 및 확장성 증대

## 📋 현재 문제점

### 1. CSS 구조 문제
- `style.css` (34,678줄) - 너무 큰 파일
- `custom.css` (2,042줄) - 중복 스타일 존재
- `global.css` (386줄) - 전역 스타일이 분산
- 클래스명 일관성 부족

### 2. HTML 구조 문제
- 각 페이지마다 동일한 구조 반복
- 접근성 속성 누락
- 시맨틱 마크업 부족

### 3. 컴포넌트 재사용성 문제
- 유사한 UI 요소가 각각 다르게 구현
- 공통 컴포넌트 부재

## 🔧 리팩토링 방안

### 1단계: CSS 구조 개선

#### A. CSS 파일 분리 및 정리
```
css/
├── base/
│   ├── reset.css          # 리셋 스타일
│   ├── variables.css      # CSS 변수 정의
│   └── typography.css     # 폰트 및 텍스트 스타일
├── components/
│   ├── buttons.css        # 버튼 컴포넌트
│   ├── forms.css          # 폼 컴포넌트
│   ├── tables.css         # 테이블 컴포넌트
│   ├── modals.css         # 모달 컴포넌트
│   └── navigation.css     # 네비게이션 컴포넌트
├── layout/
│   ├── header.css         # 헤더 레이아웃
│   ├── sidebar.css        # 사이드바 레이아웃
│   └── main.css           # 메인 콘텐츠 레이아웃
├── pages/
│   ├── dashboard.css      # 대시보드 페이지
│   ├── forms.css          # 폼 페이지
│   └── tables.css         # 테이블 페이지
└── main.css               # 메인 CSS 파일 (import만)
```

#### B. CSS 변수 시스템 구축
```css
:root {
  /* 색상 시스템 */
  --color-primary: #495EF4;
  --color-secondary: #666666;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  
  /* 간격 시스템 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* 폰트 시스템 */
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
}
```

### 2단계: 컴포넌트 표준화

#### A. 버튼 컴포넌트 표준화
```css
/* 기존: btn-black, btn-white, btn-black-02 등 */
/* 개선: 일관된 네이밍 시스템 */
.btn {
  /* 기본 버튼 스타일 */
}

.btn--primary { /* 주요 버튼 */ }
.btn--secondary { /* 보조 버튼 */ }
.btn--success { /* 성공 버튼 */ }
.btn--danger { /* 위험 버튼 */ }
.btn--small { /* 작은 버튼 */ }
.btn--large { /* 큰 버튼 */ }
```

#### B. 폼 컴포넌트 표준화
```css
.form-group {
  /* 폼 그룹 기본 스타일 */
}

.form-label {
  /* 라벨 스타일 */
}

.form-input {
  /* 입력 필드 스타일 */
}

.form-select {
  /* 셀렉트 박스 스타일 */
}
```

### 3단계: HTML 구조 개선

#### A. 공통 레이아웃 템플릿 생성
```html
<!-- include/header.html -->
<header id="header">
  <!-- 헤더 내용 -->
</header>

<!-- include/navigation.html -->
<nav class="main-nav">
  <!-- 네비게이션 내용 -->
</nav>

<!-- include/footer.html -->
<footer id="footer">
  <!-- 푸터 내용 -->
</footer>
```

#### B. 접근성 개선
```html
<!-- 개선 전 -->
<div class="btn">버튼</div>

<!-- 개선 후 -->
<button type="button" class="btn" aria-label="버튼 설명">
  버튼
</button>
```

### 4단계: 개발 가이드라인 수립

#### A. 네이밍 컨벤션
- **BEM 방법론** 적용
- **kebab-case** 사용 (예: `btn-primary`, `form-group`)
- **의미있는 클래스명** 사용

#### B. 컴포넌트 사용 가이드
```html
<!-- 버튼 사용 예시 -->
<button type="button" class="btn btn--primary btn--large">
  주요 작업
</button>

<!-- 폼 사용 예시 -->
<div class="form-group">
  <label for="username" class="form-label">사용자명</label>
  <input type="text" id="username" class="form-input" required>
</div>
```

## 📊 예상 효과

### 1. 개발 효율성 향상
- 컴포넌트 재사용으로 개발 시간 단축
- 일관된 스타일로 디자인 통일성 확보

### 2. 유지보수성 개선
- 모듈화된 CSS로 수정 범위 최소화
- 명확한 네이밍으로 코드 이해도 향상

### 3. 확장성 증대
- 새로운 페이지 추가 시 기존 컴포넌트 활용
- 디자인 시스템 구축으로 일관성 유지

## 🚀 실행 계획

### Phase 1: 분석 및 준비 (1주)
- [ ] 현재 코드 상세 분석
- [ ] 리팩토링 범위 결정
- [ ] 백업 및 버전 관리 설정

### Phase 2: CSS 리팩토링 (2주)
- [ ] CSS 파일 구조 개선
- [ ] 컴포넌트별 스타일 분리
- [ ] CSS 변수 시스템 구축

### Phase 3: HTML 구조 개선 (1주)
- [ ] 공통 템플릿 생성
- [ ] 접근성 개선
- [ ] 시맨틱 마크업 적용

### Phase 4: 테스트 및 문서화 (1주)
- [ ] 전체 페이지 테스트
- [ ] 개발 가이드라인 작성
- [ ] 컴포넌트 문서화

## ⚠️ 주의사항

1. **기존 디자인 유지**: 사용자 경험에 영향을 주지 않도록 주의
2. **점진적 적용**: 한 번에 모든 것을 바꾸지 않고 단계적으로 적용
3. **테스트 필수**: 각 단계마다 충분한 테스트 수행
4. **문서화**: 변경사항을 명확히 문서화하여 팀원들이 이해할 수 있도록 함
