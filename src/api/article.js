import request from '@/utils/request.js'

// 文章分类列表查询 
export const articleCategoryListService = () => {
    return request.get('/category')
}

// 新增文章分类
export const articelCategoryAddService = (categoryData) => {
    return request.post('/category', categoryData)
}

// 编辑文章分类
export const articleCategoryUpdateService = (categoryData) => {
    return request.put('/category', categoryData)
}

// 删除文章分类
export const articleCategoryDeleteService = (id) => {
    return request.delete('/category?id=' + id)
}

// 文章列表查询
export const artilceListService = (params) => {
    return request.get('/article', { params: params })
}

// 添加文章
export const artilceAddService = (articleData) => {
    return request.post('/article', articleData)
}

// 编辑文章
export const articleUpdateService=(articleData)=>{
    return request.put('/article',articleData)
}

// 删除文章
export const articleDeleteService = (id) => {
    return request.delete('/article?id='+id)
}