<template>
    <div class="addblog">
        <Editor @getBlog="getBlog" /> <!-- // 富文本组件 -->
        <div class="btns"><el-button @click="publishBlog" size="large" type="primary">发布</el-button><el-button size="large"
                type="danger">取消</el-button></div>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import Editor from '@/components/Editor.vue';
import { ref } from 'vue';
import { addBlog } from '@/api/index'

// 收到来自父组件传递的编辑器里的内容
let blog = ref<String>("")
const getBlog = (htmlString: String) => {
    blog.value = htmlString
}

// 点击发布之后的回调函数
const publishBlog = async () => {
    const title = blog.value.split('</h1>')[0].split('<h1>')[1]
    const result = await addBlog({ title, content: blog.value })
    if (result.status === 0) {
        ElMessage(
            {
                message:'发布成功',
                type: 'success'
            }
        )

    }
}


</script>



<style lang="less">
.addblog {
    .btns {
        text-align: center;

        button {
            font-size: 18px;
            margin: 10px;
        }
    }
}
</style>