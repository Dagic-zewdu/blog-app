<template>
  <div class="container mx-auto px-20">
    <BasicLayout :loading="loading" :error="error">
      <h1 class="text-center text-5xl mt-10" v-show="!blogs.length">
        No posts yet!
        <router-link to="/writeblog" class="text-indigo-500">
          <i class="fa-solid fa-pen-to-square text-indigo-500"></i>
          Write you fist post
        </router-link>
      </h1>
      <Blog :key="blog.id" v-for="blog in blogs" :blog="blog" />
    </BasicLayout>
  </div>
</template>

<script>
import { getBlogs } from '@/api/blog/blog.api';
import BasicLayout from '../Layouts/basicLayout.vue';
import Blog from './blog.vue';
export default {
  name: 'MyBlogs',
  data() {
    return {
      loading: true,
      blogs: [],
      error: false,
    };
  },
  async created() {
    try {
      this.loading = true;
      const blogs = await getBlogs();
      this.blogs = blogs.reverse().filter((blog) => blog.author == sessionStorage.id);
      this.loading = false;
    } catch (err) {
      this.error = err.message;
    }
  },
  components: { BasicLayout, Blog },
};
</script>

<style scoped></style>
