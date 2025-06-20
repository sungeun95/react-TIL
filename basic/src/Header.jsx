import './Header.css';

function Header(){
    const num1 = 5;
    const num2 = 3;
    const greeting = '안녕하세요';
    const program = 'JSX'
    const isLogin = false;

    return(
        <header>
            <h1 style={{backgroundColor:'yellow',color:'red'}}>logo</h1>
            <p style={{border : '3px solid #bbb', backgroundColor:'#000',color:'#fff'}}>숫자 {num1}에서 {num2}일 뺀 결과 {num1-num2}</p>
            <p style={{border : '3px solid #000', backgroundColor:'#bbb',color:'#fff'}}>{greeting}, {program} 출력 결과 : {greeting+program}</p>
            {/* const isLogin = false; 일때 p태그에 '로그인필요' 출력하기. 반대로 true면 p태그에 '로그인 성공' 출력하기 */}
            <p>{isLogin ? '로그인 성공' : '로그인 필요'}</p>
        </header>
    )
}

export default Header;