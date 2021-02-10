import bg from '../views/share.vue'
export default {
  title: 'background',
};
export const toStorybook = () => ({
    components: { bg },
    template: '<div class="elementor">',
  });

  toStorybook.story = {
    name: 'background',
  };