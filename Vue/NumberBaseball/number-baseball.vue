//컴포넌트라고 생각하자
<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm">  <!--v-on:을 @로 치환가능 -->
            <input ref="answer" minlength="4" maxlength="4" v-model="value" /> <!--정확하게 숫자 4개 입력하도록-->
            <button type="submit">입력</button>
        </form>
        <div>시도: {{tries.length}}</div>
        <ul>
            <!-- v-가 붙으면 vue가 통제하는 속성!! 
            v-가 붙은 속성에서는 뒤의 ""안의 부분이 자바스크립트 -->
            <li v-for="t in tries">
                <div>{{t.try}}</div> <!-- t는 객체임 t.try를 통해 객체에 접근하기-->
                <div>{{t.result}}</div>
            </li> 
        </ul>
    </div>
</template>

<script>
// 랜덤하게 숫자 4개 뽑아주는 함수
const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i =0; i < 4; i += 1){
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

export default {
    // data와 methods에는 화면과 밀접한 연관이 있는 것들만 묶어주면 됨
    data() {
        return {
            answer: getNumbers(),  // ex [1, 5, 3, 4]
            tries: [],  // 시도 수
            value: '',  // 입력
            result: '', // 결과
        }
    },
    methods: {
        // 입력버튼 누르면 실행되는 부분
        onSubmitForm() {
            // e.preventDefault();-> submit.prevent로 사용 가능함

            // 문자열과 배열 비교를 위해 join사용
            if(this.value === this.answer.join('')){  // 정답 맞췄으면
                 // 객체 넣기
                this.tries.push({
                    try: this.value,
                    result: '홈런',
                });
                this.result = '홈런';
                alert('홈런⚾🎉 게임을 다시 시작합니다.')
                this.value = '';
                this.answer = getNumbers(); // 게임 초기화
                this.tries = [];
                this.$refs.answer.focus();
            }else {  // 정답 틀렸을 때
                if (this.tries.length >= 9) { // 10번째 시도 -> 실패
                    this.result = `10번 넘게 틀려서 실패❗ 답은 ${this.answer.join(',')}였습니다😜`;
                    alert('게임을 다시 시작합니다.');
                    this.value = '';
                    this.answer = getNumbers();
                    this.tries= [];
                    this.$refs.answer.focus();
                }
                // 화면에 보여지는 애들은 data고 화면과 관련없이 계산식에 쓰이는 애들은 변수!
                let strike = 0;
                let ball = 0;
                const answerArray = this.value.split('').map(v => parseInt(v));  // 문자열을 숫자배열로 바꾸는 코드
                for(let i = 0; i < 4; i += 1){
                    if(answerArray[i] === this.answer[i]) {  // 숫자 자릿수 모두 정답
                        strike++;
                    } else if (this.answer.includes(answerArray[i])){  // 숫자만 정답
                        ball++;
                    }
                }
                this.tries.push({
                    try: this.value,
                    result: `${strike} 스트라이크, ${ball} 볼입니다.`,
                });
            }
            this.value = '';
            this.$refs.answer.focus();
        }
    }
};
</script>

<style>

</style>