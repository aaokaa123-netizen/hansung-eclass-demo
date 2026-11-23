# 한성대학교 e-class 스타일 과제 등록 데모 웹페이지

Playwright 기반 웹페이지 자동화 검사에서 **과제 등록 실패 오류 하나만 명확하게 탐지**되도록 설계한 한성 e-class 스타일 데모 사이트입니다.

## 실행 방법

별도 패키지 설치(`npm install`) 없이 Node.js만으로 바로 실행할 수 있습니다.

```bash
cd C:\Users\aaoka\.gemini\antigravity\scratch\hansung-eclass-demo
npm start
```

브라우저 또는 Playwright에서 `http://localhost:3000`으로 접속하세요.

## 의도된 단일 오류 (과제 등록 불가)

- **정상 동작 영역 (오류 0건)**: 페이지 로딩, 강좌 필터링, 탭 전환(`과제 관리` / `나의 강좌` / `공지사항`), 검색, 과제 상세 모달, 파일 선택 등 모든 일반 기능은 콘솔/네트워크 오류 없이 정상 동작합니다.
- **의도된 오류 위치**: `public/app.js`의 `handleAssignmentSubmit()` 함수
  - 서버(`POST /api/assignments`)는 필수 필드 `title`을 요구하지만, 프론트엔드가 오타 키 `assignment_title`을 전송하도록 의도적 결함을 심어 두었습니다.
- **Playwright 자동화 검사로 즉시 탐지되는 신호**:
  1. **네트워크 응답 오류**: `POST /api/assignments` → `HTTP 500 Internal Server Error` (`code: "ASSIGNMENT_REGISTER_FAILED"`)
  2. **콘솔 / 런타임 오류**: `console.error` 출력 및 Unhandled Rejection(`pageerror` 이벤트 발생)
  3. **UI 상태 오류**: 오류 배너(`[role="alert"]`, `#assignment-error-alert`) 노출 및 과제 목록에 신규 과제가 추가되지 않음
