const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',  // 배포시 production
    devtool: 'eval',  // 배포시 hidden-source-app
    resolve: {
        extensions: [ '.jsx', '.js' ],
    },

    entry: {
        app: ['./client'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR', 'last 2 chrome versions'],  // browserslist
                        },
                    }], 
                    '@babel/preset-react'
                ],
                plugins: [],
            },
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),  // plugin과 rules 최대한 빼고 error메세지 보면서 필요한 것을 추가하는게 좋음
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};