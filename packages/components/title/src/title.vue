<template>
  <h1 :style="{ fontSize }">
    <span>
      <slot name="icon" />
    </span>
    <slot> {{ msg }}</slot>
    <!-- {{ msg }} -->
  </h1>
</template>
<script lang="ts">
export default {
  name: 'BaseTitle',
}
</script>
<script setup lang="ts">
defineProps<{ msg?: string; fontSize?: string }>()
</script>
<style scoped lang="scss">
h1 {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
  > span {
    display: flex;
    margin-right: 5px;
    align-items: center;
  }
}
</style>