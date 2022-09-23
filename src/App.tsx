import { defineComponent } from 'vue';
import './App.css'
import { Permission } from './permission';

export default defineComponent({
  props: {
  },
  directives: { Permission },
  setup(props) {
    const role = "user"
    const role2 = ["user"]
    return () => (
      <>
        <div v-permission={['user']}>test1</div>
        <div v-permission="['user']">test1</div>
        <div v-permission={role}>test1</div>
        <div v-permission={[role]}>test1</div>
        <div v-permission={role2}>test1</div>
      </>
    )
  }
})