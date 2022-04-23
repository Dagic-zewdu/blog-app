<template>
  <div class="container mx-auto lg:px- px-5">
    <BasicLayout :loading="loading" :error="error">
      <FilterAuthors :setAuthor="setFilter" />
      <h1 class="text-center text-5xl mt-10" v-show="!blogs.length"> No posts yet! </h1>
      <div class="md:flex space-y-3 md:space-y-0 md:space-x-4 mt-6">
        <PupleCard :key="blog.id" v-for="blog in first_blogs" :blog="blog" />
      </div>
      <Blog :key="blog.id" v-for="blog in last_blogs" :blog="blog" />
    </BasicLayout>
  </div>
</template>

<script>
import { getBlogs } from '@/api/blog/blog.api';
import BasicLayout from '../Layouts/basicLayout.vue';
import Blog from './blog.vue';
import FilterAuthors from './filterAuthors.vue';
import PupleCard from './pupleCard.vue';
export default {
  name: 'Blogs',
  data() {
    return {
      loading: true,
      blogs: [],
      first_blogs: [],
      last_blogs: [],
      error: false,
    };
  },
  async created() {
    try {
      this.loading = true;
      const blogs = await getBlogs();
      let b = blogs.reverse();
      this.blogs = b;
      this.first_blogs = b.slice(0, 2);
      this.last_blogs = b.slice(2, blogs.length + 1);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = err.message;
    }
  },
  components: { BasicLayout, Blog, FilterAuthors, PupleCard },
  methods: {
    setFilter(blogs) {
      let b = blogs.reverse();
      this.blogs = b;
      this.first_blogs = b.slice(0, 2);
      this.last_blogs = b.slice(2, blogs.length + 1);
    },
  },
};
</script>

<style scoped></style>
