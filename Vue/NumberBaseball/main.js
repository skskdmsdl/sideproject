import Vue from 'vue';
import NumberBaseball from './number-baseball.vue';  // export default에 들어있는 객체 import

// new Vue() -> vue인스턴스
new Vue(NumberBaseball).$mount('#root');