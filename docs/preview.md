# 첫 번째 메인 페이지 시안

## GitHub Pages 자동 배포

현재 작업 폴더의 `develop` 브랜치를 배포 소스로 사용한다. GitHub 저장소 Settings → Pages에서 `Deploy from a branch`, `develop`, `/(root)`를 설정한다. `develop`에 push하면 GitHub가 자동으로 정적 사이트를 배포한다. 별도 빌드나 사용자 정의 Actions 워크플로는 필요하지 않다.

실제 사이트 소스는 루트 `index.html`과 `assets/`다. `.nojekyll`은 Jekyll 처리 없이 정적 파일을 제공하도록 한다. `sites/`는 이전 Sites 시도용 체크아웃으로 Git 추적에서 제외한다.

HTML/CSS/Vanilla JavaScript로 구현한 디자인 검토용 시안이다. 사용자 요청으로 Sites에 공유본을 배포한다. 최종 GitHub Pages 배포는 별도 단계다.

## 공유본 관리

상태: 공개 배포 실패. 아직 외부 공유 가능한 URL이 없다.

- Sites 오류: `Unauthorized` (공개 설정 및 소유자 권한 확인 완료, 배포 단계에서 실패)
- 저장된 버전 ID: `appgprj_6ad877974bd08191bbc4e98148d766dd~appgver_71e3d30da048819180ce340f16ed5c0f`
- 실패한 배포 ID: `appgdep_6ad8783faf248191bb9fe2c834ca1156`
- GitHub 대안 확인: 현재 저장된 인증 정보로는 `sunz98/sunz98` 저장소 읽기만 가능하며 push/admin 권한이 없다. Pages는 활성화되지 않았다. 적절한 계정 인증 후 진행해야 한다.

- Sites 프로젝트: `appgprj_6ad877974bd08191bbc4e98148d766dd`
- 배포용 체크아웃: `sites/portfolio-preview`
- 호스팅 설정: `sites/portfolio-preview/.openai/hosting.json`
- 공개 범위: 링크를 가진 누구나 열람 가능
- 수정 시 루트의 `index.html`과 `assets/`를 배포용 `dist/`에 동기화한 뒤 같은 Sites 프로젝트를 갱신한다. 새 프로젝트를 만들지 않는다.

## 실행

저장소 루트에서 `python3 -m http.server 8000 --bind 127.0.0.1`을 실행하고 http://127.0.0.1:8000 에 접속한다.

## 구현한 기능

- 반응형 레이아웃, 모바일 메뉴와 Escape 닫기
- 프로젝트 선택 및 내용 전환, 설명 펼치기
- 부드러운 앵커 이동, 키보드 포커스, 동작 감소 설정 반영
- JavaScript 없이도 모든 프로젝트 본문과 앵커 링크 제공

## 검증

- JavaScript 문법 검사 통과
- 브라우저에서 모바일 메뉴 열기·이동 후 닫기, 프로젝트 전환, 설명 펼치기 확인
- 1440px / 390px 화면에서 문서 가로 넘침 없음 확인
- PC·모바일 시각 확인 완료. 모든 기기와 보조기술에 대한 종합 검수는 후속 단계에서 수행한다.

## 미확정 사항

소개 문구, 프로젝트별 상세 정보, 교육·활동 이력, 연락처, GitHub 주소, PDF 이력서. 프로젝트 상세 페이지는 후속 단계에서 작성한다. 현재 그래픽은 프로젝트를 구분하기 위한 장식이며 실제 시스템 아키텍처가 아니다.

현재 글꼴은 Google Fonts의 Noto Sans KR을 사용하며, 연결 실패 시 시스템 글꼴로 표시된다. 최종 글꼴과 자체 호스팅 여부는 디자인 확정 시 결정한다.
