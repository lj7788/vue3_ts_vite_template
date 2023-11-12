<script setup lang="ts">
import {reactive, ref,getCurrentInstance} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import enUs from 'element-plus/es/locale/lang/en'
import {useI18n} from "vue-i18n";
const { proxy } = getCurrentInstance() as any;
const {locale} = useI18n()
const lang=ref<any>(locale.value)
const data=reactive({
  langs:[{
    text:"中文",
    value:'cn'
  },{
    text:"English",
    value:'en'
  }]
})
const doChangeLang=()=>{
  locale.value = lang.value
  
  let obj=proxy.$tryToJson(localStorage.getItem("config"),{});
  obj.lang=lang.value;
  localStorage.setItem('config',JSON.stringify(obj))
}
</script>
<template>
  <el-config-provider :locale="lang=='cn'?zhCn:enUs" >
    <el-select v-model="lang" class="sel-lang" @change="doChangeLang">
      <el-option v-for="(it,idx) in data.langs" :key="idx" :label="it.text" :value="it.value"></el-option>
    </el-select>
  <div class="nav-main">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/page1">Page1</RouterLink>
    <RouterLink to="/page2">Page2</RouterLink>
  </div>
  <RouterView />
</el-config-provider>
</template>

<style scoped lang="less">
.sel-lang{
  width: 100px;
    position: absolute;
    right: 8px;
    top: 8px;
}
.nav-main{
  a{
    display:inline-block;
    margin-left:12px;
  }
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
