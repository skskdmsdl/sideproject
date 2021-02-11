const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
    // state 선언 방식(class와 다르게 하나씩 분리) : const [state, setState] = 초기값
    // 구구단 컴포넌트 안에 꼭 넣어줘야함(바깥으로 빼면 X)
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second){
            setResult(value + '❗ 정답 🎉');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    // value를 state할때는 setValue를 써주기
    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    console.log('렌더링'); // state가 바뀌면 함수 전체를 다시 실행하기에 조금 더 느릴 수 있음!
    // class -> className
    // for -> htmlFor
    return (
        <> 
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} type="number" value={value} onChange={onChangeInput}/>  
                <button type="submit">입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
}

module.exports = GuGuDan;