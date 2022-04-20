<template>
  <BasicLayout :loading="loading" :error="error">
    <div class="relative mt-10">
      <div class="max-w-5xl mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
        <h1
          class="max-w-3xl mx-auto text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
        >
          {{ blog.title }}</h1
        >
        <img class="w-full my-4" :src="blog.image" alt="Sunset in the mountains" />
        <div class="py-5 text-sm font-regular text-gray-900 flex items-center justify-center">
          <span class="mr-3 flex flex-row items-center">
            <i class="fa-solid fa-clock"></i>
            <span class="ml-1"> <timeago :datetime="blog.date" /> </span
          ></span>
          <a href="#" class="flex flex-row items-center text-indigo-600 mr-3">
            <i class="fa-solid fa-user"></i>

            <span class="ml-1">{{ author.name }}</span>
          </a>
          <a href="#" class="flex flex-row items-center hover:text-indigo-600">
            <i class="fa-solid fa-tag"></i>
            <span class="ml-1">active since <timeago :datetime="author.date" /> </span
          ></a>
        </div>
        <hr />
      </div>

      <div class="max-w-5xl w-full mx-auto">
        <div
          class="mt-3 w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
        >
          <div class="">
            <p class="text-base leading-8 my-5 whitespace-pre-wrap"> {{ blog.post }} </p>
          </div>
        </div>
      </div>
    </div>
    <MoreBlog :blogs="author_blog" />
  </BasicLayout>
</template>

<script>
import { getBlog, getBlogs } from '@/api/blog/blog.api';
import BasicLayout from '../Layouts/basicLayout.vue';
import { getAuthor } from '@/auth/auth';
import MoreBlog from './moreBlog.vue';

export default {
  components: { BasicLayout, MoreBlog },
  name: 'BlogDetails',
  data() {
    return {
      id: this.$route.params.id,
      loading: true,
      blog: null,
      error: false,
      author: '',
      author_blog: [],
    };
  },
  async created() {
    try {
      const blog = await getBlog(this.id);
      const blogs = await getBlogs();
      const author = await getAuthor(blog.author);
      this.blog = blog;
      this.author = author;
      this.author_blog = blogs.filter((blog) => blog.author === author.id && blog.id != this.id);
      console.log(blogs, this.id);
      this.loading = false;
    } catch (err) {
      console.log(err);
      this.loading = false;
      this.error = err.message;
    }
  },
  updated() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
