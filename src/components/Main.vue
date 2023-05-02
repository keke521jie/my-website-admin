<template>
    <el-button @click="changeIsCollapse" size="small" class="btns"><el-icon><Open /></el-icon></el-button>
    <router-view></router-view>
</template>

<script setup lang="ts">
import {Open} from '@element-plus/icons-vue'
import { usePublicStore } from '@/stores/public';
const publicStore = usePublicStore()
const changeIsCollapse = ()=>{
    publicStore.changeIsCollapse()
}
</script>

<style>
.btns{
    font-size: 20px;
    color: skyblue;
    margin-bottom: 20px;
}
</style>