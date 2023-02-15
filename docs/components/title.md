title

:::demo 使用`font-size`属性来设置Title的文字大小

```vue
<template>
  <base-title font-size="30px">22</base-title>
  <button @click="handle()">font-size="30px"</button>
</template>

<script setup lang="ts">
// import { reactive, ref } from "vue";
// const formSize = ref("large");
  function handle(){
    console.log('formSize:',1);
  }
  console.log('script')
</script>

<style scoped lang="scss">
h1 {
  color: red;
}
</style>

```

:::