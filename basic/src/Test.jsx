import Header from "./Header.jsx";
import './Test.css';

//컴포넌트 생성 Test(부모컴포넌트)
function Test(){
    return (
        <>
            <Header />
            <Aside />
            <h1>Test 컴포넌트</h1>
        </>
    )
}

//다른컴포넌트에서 해당 Test컴포넌트 사용가능하도록 내보내기 설정
export default Test;

function Aside (){
    return(
        <aside>
            <p style={{backgroundColor:'yellow',color:'red'}}>Aside<br />자식이에요</p>
        </aside>
    )
}