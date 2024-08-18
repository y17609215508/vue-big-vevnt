import request from '@/utils/request.js'

// 文章分类列表查询 
export const articleCategoryListService = ()=>{
    return request.get('/category')
}

// 新增文章分类
export const articelCategoryAddService = (categoryData)=>{
    return request.post('/category',categoryData)
}

// 编辑文章分类
export const articleCategoryUpdate=(categoryData)=>{
    return request.put('category',categoryData)
}

// 删除文章分类
export const articleCategoryDelete=(id)=>{
    return request.delete('/category?id='+id)
}