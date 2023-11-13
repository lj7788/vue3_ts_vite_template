import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from '@/utils/elementplus'
import i18n from '@/lang/index'

// TODO 对vue进行类型补充说明，不然在vue页面使用的时候会报错
declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$tryToJson: Function;
	}
}


const app = createApp(App)
app.config.globalProperties.$tryToJson=(s:any,o:any)=>{
    if(s){
        try{
            return  JSON.parse(s);
        }catch(e){
            return o;
        }
    }
    return o;
}
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.mount('#app')
