index.html + index.css (공통 영역)
복사 + 붙여넣기로 새로운 html + css 안에 붙여넣은뒤 작업 (CSS 파일 경로등 수정)



=============매일 해야할 것======================

1. ** 현재 위치 브랜치 확인 ** 
    - 터미널에서 git branch 
2. 메인에서 병합된 코드 받아오기 
    - 터미널에서 git pull origin main
3. 코드 작업
    - 매시간마다 또는 30분마다
    - 커밋메시지 + 커밋/푸쉬

git branch - 현재 위치한 브랜치 확인
git pull origin main - 메인에서 코드 받아오기
git commit -m "커밋메시지" [-m "자세한 설명 등 긴 메시지" - 생략가능]
git push : 커밋한걸 실제 푸쉬
git switch [브랜치명] : 깃허브 브랜치 변경하기



=============커밋 메시지 규칙 ====================


feat: 새로운 기능 추가
fix: 오류 수정
style: CSS, 디자인, 들여쓰기 등 수정
refactor: 기능 변화 없이 코드 구조 개선
docs: README, 문서 수정
chore: 설정, 폴더 정리, 기타 작업
test: 테스트 코드 추가

 
==============예시==========================
git commit -m "feat: 세탁 가이드 화면 구현"
git commit -m "feat: 의류 선택 기능 추가"
git commit -m "fix: 검색 버튼 위치 오류 수정"
git commit -m "style: 세탁 가이드 카드 디자인 수정"
git commit -m "refactor: 의류 목록 렌더링 함수 분리"
git commit -m "docs: 프로젝트 실행 방법 추가"
git commit -m "chore: 이미지 파일 경로 정리"