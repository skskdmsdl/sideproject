const React = require('react');  // 분리를 할때 마다 npm에서 react를 불러와 줘야 함
const { Component } = React;

class WordRelay extends Component {
    state = {
        text: 'Hello, webpack',
    };

    render() {
        return <h1>{this.state.text}</h1>;
    };
};

module.exports = WordRelay; // 파일을 쪼개는 경우 위의 import와 맨 밑에 이 부분을 꼭 추가해줘야 함
// 맨 위에서는 쪼갠 파일을 가져오는 것 맨 밑에는 바깥에서 이 쪼갠 파일을 사용 가능하도록 해주는 것임