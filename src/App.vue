<!-- App.vue -->
<template>
  <div id="app">
    <!-- click 하면 setTest 호출 -->
    <button @click="setDispatchTest">dispatch</button><br>
    <button @click="setCommitTest">commit</button><br>
    <!-- state값을 바로 사용할 수 있다 -->

    dispatch action 비동기 값 : {{test1}}<br>
    commit mutation 동기 값 : {{test2}}<br>
    [모듈 접근]<br>
    <button @click="setUser">commit (setUser)</button><br>
    {{this.$store.state.userStore.userName}}<br>
    {{this.$store.state.userStore.userAge}}<br>
  </div>
</template>

<script>
//사용할 map helper를 import해준다
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  name: 'app',
  computed: {
    //사용할 state값을 넣어준다. state는 computed에 넣는 것을 권장
    ...mapState(['test1', 'test2'])
  },
  methods: {
    //사용할 action과 mutation을 선언
    ...mapActions(['TIME']),
    ...mapMutations(['SET_TEST2']),
    ...mapMutations('userStore', ['setName']),
    setDispatchTest() {
      //action 사용
      this.TIME('test1');
      //this.$store.dispatch('TIME', 'test1');
    },
    setCommitTest() {
      //mutation 사용this.SET_TEST2('test2');
      //this.$store.commit('SET_TEST2', 'test2');
    },
    setUser() {
      console.log("click set User!!");
      this.setName('테스트');
      //this.$store.commit('userStore/setName', '테스트');
    }
  }
}
</script>