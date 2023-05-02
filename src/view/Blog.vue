<template>
    <div class="blog">
        <el-button class="add-btn"><el-icon style="margin-right: 5px;">
                <DocumentAdd />
            </el-icon>添加</el-button>
        <el-table :data="filterTableData" style="width: 100%">
            <el-table-column label="日期" prop="date" />
            <el-table-column label="标题" prop="title" />
            <el-table-column label="主要内容" prop="title" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { DocumentAdd } from '@element-plus/icons-vue'
import { computed, ref, onMounted, reactive } from 'vue'
import { getBlog } from '../api/index'
interface blogItem {
    id: number
    date: string
    content: string
    title: string
}
const search = ref('')
let blogList = reactive<blogItem[]>([])
const filterTableData = computed(() =>
    blogList.filter(
        (data) =>
            !search.value ||
            data.title.toLowerCase().includes(search.value.toLowerCase())
    )
)

onMounted(() => {
    getBlogList()  
})

async function getBlogList() {
    let result = await getBlog()
    if (result.status === 0) {
        result.data.forEach(item=> {
            item.date = item.date.slice(0,10)
        });
        blogList.push(...result.data)
        console.log(blogList);
        
    }
}

const handleEdit = (index: number, row: blogItem) => {
    console.log(index, row)
}

const handleDelete = (index: number, row: blogItem) => {
    console.log(index, row)
}

</script>

<style lang="less">
.blog {
    .add-btn {
        color: skyblue;
    }
}
</style>