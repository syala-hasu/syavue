import { Vue } from 'vue-property-decorator';
import SyaKeyInputText from './sya-KeyInputText/SyaKeyInputText.vue'
import { PluginObject} from 'vue';

export const syavue:PluginObject<any> = {
  install(vue: typeof Vue, options?: any): void {
    Vue.component('sya-key-input-text', SyaKeyInputText)
  }
}

