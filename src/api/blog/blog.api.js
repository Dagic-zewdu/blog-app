import httpCommon from '@/httpCommon'

export const getBlogs=async ()=>{
    let res=await httpCommon.get('/blogs')
    return res.data
}

export const getBlog=async id=>{
    let res=await httpCommon.get(`/blogs/${id}`)
    return res.data
}