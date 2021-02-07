const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development', // 개발시에는 development, 배포시에는 production
    devtool: 'eval',  // 개발시에는 eval(webpack이 빌드하는 속도 up), 배포시에는 hedden-source-map
    resolve: {
        extensions: ['.js', '.vue'],  // 확장자 처리가능 (확장자 붙어있는 부분 제거 가능)
    },
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: { // 자바스크립트인 애만 읽는데 아닌 .vue같은 파일을 읽기위해 rules에 작성해줌
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
};