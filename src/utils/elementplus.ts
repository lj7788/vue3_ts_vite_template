//import ElementPlus from 'element-plus'
//import 'element-plus/theme-chalk/index.css'
//import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as Icons from '@element-plus/icons-vue'

export default (app:any)=>{
    for(const[key,it] of Object.entries(Icons)){
        console.log(key)
        app.component(key,it);
    }
  //  app.use(ElementPlus,{
  //      locale:zhCn
  //  })
}