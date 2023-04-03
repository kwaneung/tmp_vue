<!-- Test1.vue -->
<template>
  <div>
    {{test1}}
  </div>
</template>

<script>
console.log("this is Test1.vue");
export default {
  name: "Test1",
  components: {Test11},
  //부모 컴포넌트(App.vue)에서 보냄 test1데이터를 받음
  props: ['test1']
}
</script>