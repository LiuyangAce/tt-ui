import { defineClientConfig } from '@vuepress/client';
import BaseTitle from '../../packages/components/title.vue';

export default defineClientConfig({
  enhance({ app }) {
    // 注册组件
    app.component('BaseTitle', BaseTitle);
  }
});