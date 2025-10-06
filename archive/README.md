# Archive 폴더

이 폴더는 프로젝트에서 필요없는 파일들을 정리한 곳입니다. 나중에 필요에 따라 삭제하거나 복원할 수 있습니다.

## 📁 폴더 구조

### backup_files/
백업 파일들과 이전 버전들
- `html_bk/` - HTML 백업 파일들 (124개 파일)
- `html_org/` - 원본 HTML 파일들 (32개 파일)  
- `html_hong/` - 홍길동 관련 HTML 파일 (1개 파일)
- `index_bk.html` - index.html 백업
- `index_old.html` - index.html 이전 버전
- `index_org.html` - index.html 원본

### reference_files/
참조용 파일들과 문서들
- `reference/` - 참고 문서 및 자료
  - PDF 파일들 (경비/미화 관리단지현황 등)
  - 새롬통합관리시스템 관련 문서
- `demo/` - 데모 HTML 파일들
  - 스마트체크 데모
  - 회계업무 데모
  - UI 컴포넌트 데모
- `saerom menu_*.jpg` - 메뉴 이미지들
- `saerom menu.pdf` - 메뉴 PDF
- `saerom menu.xlsm` - 메뉴 엑셀 파일

### template_files/
템플릿과 개발 가이드 파일들
- `templates/` - HTML 템플릿들
  - `layout_base.html` - 기본 레이아웃 템플릿
  - `page_list.html` - 목록 페이지 템플릿
  - `page_form.html` - 폼 페이지 템플릿
- `components/` - 컴포넌트 라이브러리
  - `README.md` - 컴포넌트 사용 가이드
- `template_base.html` - 기본 템플릿 (루트에 있던 것)
- `template_components.html` - 컴포넌트 템플릿
- `refactor_plan.md` - 리팩토링 계획서

### duplicate_files/
중복된 파일들
- `fonts_css/` - css 폴더에 있던 중복 폰트 파일들 (27개 파일)
  - assets/fonts/에 동일한 폰트들이 있으므로 중복 제거

## 🗑️ 삭제 가능한 파일들

### 즉시 삭제 가능
- `duplicate_files/fonts_css/` - assets/fonts/와 중복
- `backup_files/html_hong/` - 홍길동 관련 파일 (1개만 있음)

### 검토 후 삭제 가능
- `backup_files/html_bk/` - 백업 HTML 파일들 (124개)
- `backup_files/html_org/` - 원본 HTML 파일들 (32개)
- `reference_files/demo/` - 데모 파일들 (필요시 복원 가능)

### 보관 권장
- `reference_files/reference/` - 프로젝트 관련 문서들
- `template_files/` - 개발 가이드 및 템플릿들

## 📊 정리 효과

### 정리 전
- 총 파일 수: 500+ 개
- 프로젝트 루트: 복잡한 구조
- 중복 파일: 다수

### 정리 후
- 메인 프로젝트: 깔끔한 구조
- archive 폴더: 체계적으로 분류
- 중복 제거: 폰트 파일 중복 해결

## 🔄 복원 방법

필요시 다음 명령어로 복원 가능:

```bash
# 백업 파일 복원
move archive\backup_files\html_bk .\html_bk

# 참조 파일 복원  
move archive\reference_files\reference .\reference

# 템플릿 파일 복원
move archive\template_files\templates .\templates
```

## ⚠️ 주의사항

- 이 폴더의 파일들은 프로젝트 동작에 영향을 주지 않습니다
- 삭제하기 전에 반드시 백업을 확인하세요
- 중요한 문서는 별도로 보관하세요
