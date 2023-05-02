<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="publicStore.isCollapse" router>
        <el-menu-item index="1">
            <el-icon>
                <HomeFilled />
            </el-icon>
            <template #title>首页</template>
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <Monitor />
                </el-icon>
                <span>网站管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/content">首页内容管理</el-menu-item>
                <el-menu-item index="/music">音乐推荐</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <el-icon>
                    <ChatLineRound />
                </el-icon>
                <span>博客管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/blog">博客文章管理</el-menu-item>
                <el-menu-item index="/addblog">添加博客文章</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>
                <el-icon>
                    <document />
                </el-icon>
                <span>文章管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/content">文章管理</el-menu-item>
                <el-menu-item index="/blog">添加文章</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="5">
            <el-icon>
                <setting />
            </el-icon>
            <template #title>修改信息</template>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { usePublicStore } from '@/stores/public';
import {
    Document,
    Setting,
    HomeFilled,
    Monitor,
    ChatLineRound
} from '@element-plus/icons-vue'


const publicStore = usePublicStore()
</script>


<style lang="less">
.el-aside {
    min-height: calc(100vh - 60px);
}

.el-menu-vertical-demo {
    height: 100%;
}

// .el-menu-vertical-demo:not(.el-menu--collapse) {
//     width: 200px;
//     min-height: 400px;
// }</style>