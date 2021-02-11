const path = require('path');  // 노드에서 경로 쉽게 조작하도록 하는 것 (그냥 외우자!!!)

module.exports = {
    name: 'word-relay-setting',
    mode: 'development',  // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // 중요한 부분 -> entry(입력), output(출력)
    entry: {
        // 파일들을 아래파일(output)로 만들어줌(client.jsx에서 word-relay.jsx파일을 불러오기에 따로 적어줄 필요 X)
        app: ['./client'],  
    },
    
    // entry의 파일을 읽고 거기에 moduels(모듈들)을 적용하여 output으로 뺀다!
    module: {
        // 여러 규칙을 적용할 수 있기에 배열형태
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],  // presets 플러그인들의 모음
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },  

    output: {
        path: path.join(__dirname, 'dist'),  // __dirname 는 현재폴더
        filename: 'app.js'
    }
};