// packages/components/title/index.ts
import Title from './src/title.vue';
import type { App } from 'vue';

Title.install = (app: App): void => {
  app.component(Title.name, Title);
};
export const baseTitle = Title;
export default Title;