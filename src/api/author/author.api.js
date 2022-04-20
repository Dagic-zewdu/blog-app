import httpCommon from '@/httpCommon'
import { getBlogs } from '../blog/blog.api'

export const getAuthors=async ()=>{
    let res=await httpCommon("/authors")
    return res.data
}

export const getAuthorsWork=async (id)=>{
   let blogs=await getBlogs()
   if(!id)
   return blogs;
   let authors_work= blogs.filter(blog=> blog.author == id)
   return authors_work
}