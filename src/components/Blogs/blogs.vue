<template>
  <div class="container mx-auto px-20">
    <BasicLayout :loading="loading" :error="error">
      <Blog :key="blog.id" v-for="blog in blogs" :blog="blog" />
    </BasicLayout>
  </div>
</template>

<script>
import { getBlogs } from '@/api/blog/blog.api';
import BasicLayout from '../Layouts/basicLayout.vue';
import Blog from './blog.vue';
export default {
  name: 'Blogs',
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
      this.blogs = blogs.reverse();
      this.loading = false;
    } catch (err) {
      this.error = err.message;
    }
  },
  components: { BasicLayout, Blog },
};
</script>

<style scoped></style>
