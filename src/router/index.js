import About from '../views/About.vue'
import BlogDetails from '../components/Blogs/blogDetails.vue'
import Interactions from '../views/interactions.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddBlog from "../components/Forms/addForm.vue"
import EditBlog from "../components/Forms/editForm.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path: '/interactions',
    name: 'interactions',
    component:Interactions
  },
  {
    path: '/blog/:id',
    name: 'blogDetails',
    component:BlogDetails,
  },
  {
    path: '/writeblog',
    name: 'writeBlog',
    component:AddBlog,
  },
 {
    path: '/editblog/:id',
    name: 'editBlog',
    component:EditBlog,
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
