
import Tips from '../views/share.vue';
import {withKnobs,text} from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue';

// export default { title: 'socialShareTips' };
const story = storiesOf('socialShareTips',module)
story.addDecorator(withKnobs)

story.add('Tips1',()=>({
  components:{Tips},
  props:{
    text1:{
      default:text('Pixcap','Share PixCap on any social media and you will get 60 more seconds for FREE!!')
    }
  },
  template: "<p>{{text1}}</p>",

}))
story.add('Tips2',()=>({
  components:{Tips},
  props:{
    text2:{
      default:text('shareNow','Select Now')
    }
  },
  template: "<p id='select'>{{text2}}</p>",

}))



// export const  Tips1 = () => ({
//   components: { Tips },
//   template: "<p>Share PixCap on any social media and you'll get 60 more seconds for FREE!!</p>",
// });
// export const Tips2 = () => ({
//   components: { Tips },
//   template: "<p id='select'>Select Now</p>",
// });
