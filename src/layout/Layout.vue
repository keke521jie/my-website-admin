<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-container>
                <el-aside width="auto">
                    <Aside />
                </el-aside>
                <el-main>
                    <Main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Aside from '@/components/Aside.vue';
import Main from '@/components/Main.vue'
</script>

<style>
</style>