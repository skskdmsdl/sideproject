const React = require('react');  // 분리를 할때 마다 npm에서 react를 불러와 줘야 함
const { Component } = React;

class WordRelay extends Component {
    state = {
        word: '권정열',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]){
            this.setState({
                result: '딩동댕',
                word: this.state.value,
                value: '',
            });
            this.input.focus();
        } else {
            this.setState({
                result: '땡',
                value: '',
            });
            this.input.focus();
        }
    };

    onChangeInput = (e) => {
        this.setState({ value: e.target.value });
    };

    input;

    onRefInput = (c) => {
        this.input = c;
    };

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay; // 파일을 쪼개는 경우 위의 import와 맨 밑에 이 부분을 꼭 추가해줘야 함
// 맨 위에서는 쪼갠 파일을 가져오는 것 맨 밑에는 바깥에서 이 쪼갠 파일을 사용 가능하도록 해주는 것임