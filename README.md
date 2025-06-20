# react
## vite 방식 이용한 react설치 명령어ver 2025
* `npm create vite@latest 생성프로젝트명 -- --template react`
* `cd 프로젝트명`
* `npm install`
* `npm run dev`
------
## 리액트 폴더 삭제명령어(평균 10~20초 정도 소요됨) (rm == remove)
* `rm -r 삭제폴더명`
------
## vite+리액트 설치 후 폴더와 파일 구조
* pubilc, src/assets 이미지, 동영상, 폰트 등 외부파일 관리
* **src 폴더 내에 css, jsx(javascript xml) 리액트용 JS 확장문법**
* index.html 최상위(root) 위치이동금지, 기본위치 그대로 사용
* .gitignore : 깃허브 업로드 시 업로드안되는 보호파일 목록
* package.json, vite.config.js : 리액트 관련 설치 정보 및 세팅정보
------
## jsx 파일 생성 후 다른 jsx 파일에 연결하는 방법
1. `App.jsx` 생성 후 `Main.jsx`를 연결하고 싶다면?
2. `Main.jsx`의 시작줄에서 `import` 방식으로 외부 jsx 연결해야 한다.
* `import 컴포넌트명 from 'jsx상대경로'`;
* 컴포넌트 명은 jsx 파일의 이름과 동일하게 작성한다(대소문자 주의)
* import의 컴포넌트명은 앞으로 이 이름을 쓰겠다는 쯧의 변수 선언과 같다. 호출은 별도로 진행 해야 한다.
3. (위) import 진행 후 원하는 렌더링 위치에 `<컴포넌트명 />`을 작성한다.
* `import App from './App.jsx'` 라면 `<App />`이렇게 작성한다.
4. `Main.jsx`에서 컴포넌트로 연결한 `App.jsx`가 정상적으로 출력되며 리액트 프로그래밍이 진행된다.
------
# jsx 기본 템플릿과 뜻
`
import 외부파일불러오는위치
fumction 컴포넌트명(){
        추가 변수 작성위치
        return (
            <>
                추가HTML태그 작성 위치
            </>
        )
}
export default 컴포넌트명;
`