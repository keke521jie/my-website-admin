<template>
    <div style="border: 1px solid #ccc">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
        <Editor style="height: 500px; overflow-y: hidden;" @onChange="handleChange" :defaultConfig="editorConfig" :mode="mode" v-model="valueHtml"
            @onCreated="handleCreated" />
    </div>
</template>
<script lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted,defineEmits } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import type { IDomEditor,IEditorConfig  } from '@wangeditor/editor'
export default {
    components: { Editor, Toolbar },
    emits:['getBlog'],
    setup(props,ctx) {
        // 编辑器实例，必须用 shallowRef
        const editorRef = shallowRef()

        // 内容 HTML
        const valueHtml = ref('<h1>今儿学到了什么，给大家分享点什么？</h1>')

        const toolbarConfig = {}
        
        const editorConfig: Partial<IEditorConfig> = {
            placeholder: '请输入内容...',
          
        }

        const handleChange = (editor: IDomEditor) => {
            ctx.emit('getBlog',valueHtml.value)
        }

        // 组件销毁时，也及时销毁编辑器
        onBeforeUnmount(() => {
            const editor = editorRef.value
            if (editor == null) return
            editor.destroy()
        })

        const handleCreated = (editor: any) => {
            editorRef.value = editor // 记录 editor 实例，重要！
        }

        return {
            editorRef,
            valueHtml,
            mode: 'default', // 或 'simple'
            toolbarConfig,
            editorConfig,
            handleCreated,
            handleChange
        };
    }
}
</script>

<style></style>