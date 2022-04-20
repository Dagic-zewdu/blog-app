import httpCommon from '@/httpCommon'

export const getBlogs=async ()=>{
    let res=await httpCommon.get('/blogs')
    return res.data
}

export const getBlog=async id=>{
    let res=await httpCommon.get(`/blogs/${id}`)
    return res.data
}

export const addBlog=async (blog)=>{
   let res=await httpCommon.post('/blogs',{...blog,date:Date.now()})
    return res.data
}

export const editBlog=async (id,blog)=>{
    let res=await httpCommon.put(`/blogs/${id}`,blog)
    return res. data
}

export const deleteBlog=async (id)=>{
    let res=await httpCommon.delete(`/blogs/${id}`)
    return res. data
}