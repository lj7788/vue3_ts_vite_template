import en from './en' // 英文语言配置
import zhCN from './cn' // 中文语言配置

import { createI18n } from 'vue-i18n'

const config = localStorage.getItem('config') // 当前使用的语言类型
let lang = 'cn'
if (config) {    
  lang = JSON.parse(config).lang || 'cn'
}
const i18n = createI18n({
  legacy: false, // componsition API需要设置为false 
  locale: lang,
  globalInjection: true, // 可以在template模板中使用$t
  messages: {
    en,
    cn:zhCN
  }
})

export default i18n;