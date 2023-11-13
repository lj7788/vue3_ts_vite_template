<template>
  <div>
    {{ txt }}
    <hr/>
    {{ $t("name") }}
    {{ $t("test") }}
    <el-row  :gutter="10">
      <el-col :span="6">
        <el-input v-model="txt"/>
      </el-col>
      <el-col :span="6">
        <el-date-picker v-model="dt" type="date" placeholder="请选择日期" />
      </el-col>
      <el-col :span="6">
        <el-button>
          <el-icon><Edit/></el-icon> Test</el-button>
      </el-col>
    </el-row>    
    <el-icon><Edit/></el-icon>
    <el-icon><Connection /><Edit/></el-icon>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
const txt=ref("haha")
const dt=ref<Date>(new Date())
</script>

<style scoped>

</style>