const React = require('react');  // 분리를 할때 마다 npm에서 react를 불러와 줘야 함
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('권정열');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]){
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue( e.target.value );
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                {/* <label htmlFor="wordInput">글자를 입력하세요.</label><br/> */}
                <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
    
}

module.exports = WordRelay; // 파일을 쪼개는 경우 위의 import와 맨 밑에 이 부분을 꼭 추가해줘야 함
// 맨 위에서는 쪼갠 파일을 가져오는 것 맨 밑에는 바깥에서 이 쪼갠 파일을 사용 가능하도록 해주는 것임