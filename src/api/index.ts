import request from './request'
// 获取blog列表信息
export const getBlog = () => request({ url: '/getblog?page=1', method: 'get' })

//发布blog文章
export const addBlog = (data: object) => request({ url: '/addblog', method: 'post', data })