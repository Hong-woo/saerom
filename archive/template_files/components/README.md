# SAEROM 컴포넌트 라이브러리

## 🎯 목적
새로운 페이지 개발 시 일관된 UI/UX를 제공하고 개발 효율성을 높이기 위한 재사용 가능한 컴포넌트 모음입니다.

## 📁 컴포넌트 구조
```
components/
├── buttons/          # 버튼 컴포넌트
├── forms/           # 폼 컴포넌트
├── tables/          # 테이블 컴포넌트
├── modals/          # 모달 컴포넌트
├── navigation/      # 네비게이션 컴포넌트
├── cards/           # 카드 컴포넌트
└── layout/          # 레이아웃 컴포넌트
```

## 🚀 사용 방법

### 1. 버튼 컴포넌트
```html
<!-- 기본 버튼 -->
<button type="button" class="btn btn-primary">기본 버튼</button>

<!-- 크기별 버튼 -->
<button type="button" class="btn btn-primary btn-sm">작은 버튼</button>
<button type="button" class="btn btn-primary btn-lg">큰 버튼</button>

<!-- 색상별 버튼 -->
<button type="button" class="btn btn-secondary">보조 버튼</button>
<button type="button" class="btn btn-success">성공 버튼</button>
<button type="button" class="btn btn-danger">위험 버튼</button>
<button type="button" class="btn btn-warning">경고 버튼</button>
```

### 2. 폼 컴포넌트
```html
<!-- 입력 필드 -->
<div class="form-group">
    <label for="username" class="form-label">사용자명 <span class="required">*</span></label>
    <input type="text" id="username" class="form-input" placeholder="사용자명을 입력하세요">
</div>

<!-- 셀렉트 박스 -->
<div class="form-group">
    <label for="category" class="form-label">카테고리</label>
    <select id="category" class="form-select">
        <option value="">선택하세요</option>
        <option value="1">카테고리 1</option>
        <option value="2">카테고리 2</option>
    </select>
</div>

<!-- 텍스트 영역 -->
<div class="form-group">
    <label for="description" class="form-label">설명</label>
    <textarea id="description" class="form-textarea" placeholder="설명을 입력하세요"></textarea>
</div>
```

### 3. 테이블 컴포넌트
```html
<!-- 기본 테이블 -->
<div class="table-container">
    <table class="data-table">
        <thead>
            <tr>
                <th><input type="checkbox" id="selectAll"></th>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>상태</th>
                <th>관리</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="checkbox" class="row-checkbox"></td>
                <td>1</td>
                <td><a href="#" class="text-link">샘플 제목</a></td>
                <td>관리자</td>
                <td>2024.01.01</td>
                <td><span class="status-badge status-success">완료</span></td>
                <td>
                    <button class="btn btn-sm btn-primary">수정</button>
                    <button class="btn btn-sm btn-danger">삭제</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

### 4. 모달 컴포넌트
```html
<!-- 모달 트리거 -->
<button type="button" class="btn btn-primary" data-modal="exampleModal">모달 열기</button>

<!-- 모달 -->
<div id="exampleModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h3 class="modal-title">모달 제목</h3>
            <button type="button" class="btn-close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
            <p>모달 내용이 여기에 들어갑니다.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
            <button type="button" class="btn btn-primary">확인</button>
        </div>
    </div>
</div>
```

### 5. 카드 컴포넌트
```html
<!-- 통계 카드 -->
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-icon">
            <i class="icon-document"></i>
        </div>
        <div class="stat-content">
            <h3 class="stat-title">진행중</h3>
            <p class="stat-subtitle">진행중인 항목</p>
            <span class="stat-number">30건</span>
        </div>
    </div>
    <!-- 추가 카드들... -->
</div>
```

## 🎨 스타일 가이드

### 색상 시스템
- **Primary**: #495EF4 (주요 액션)
- **Secondary**: #666666 (보조 액션)
- **Success**: #22c55e (성공 상태)
- **Warning**: #f59e0b (경고 상태)
- **Danger**: #ef4444 (위험 상태)

### 간격 시스템
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px

### 폰트 시스템
- **sm**: 14px
- **base**: 16px
- **lg**: 18px
- **xl**: 20px
- **2xl**: 24px

## 📝 개발 가이드라인

### 1. 네이밍 컨벤션
- 클래스명은 kebab-case 사용
- BEM 방법론 적용
- 의미있는 이름 사용

### 2. 접근성
- 모든 인터랙티브 요소에 적절한 라벨 제공
- 키보드 네비게이션 지원
- 스크린 리더 호환성

### 3. 반응형 디자인
- 모바일 우선 설계
- 브레이크포인트: 768px, 1024px, 1280px

## 🔧 커스터마이징

### CSS 변수 사용
```css
:root {
    --primary-color: #495EF4;
    --border-radius: 4px;
    --box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### 컴포넌트 확장
```css
/* 기존 컴포넌트 확장 */
.btn-custom {
    @extend .btn;
    background: linear-gradient(45deg, #495EF4, #666666);
}
```

## 📚 추가 리소스
- [디자인 시스템 가이드](./design-system.md)
- [컴포넌트 예시](./examples/)
- [개발자 도구](./dev-tools/)
