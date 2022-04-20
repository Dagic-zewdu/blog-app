<template>
  <router-link v-show="!suspense" :to="'/blog/' + blog.id">
    <div class="h-90 bg-gradient-to-r rounded-md mt-4 from-indigo-600 to-purple-600 p-10">
      <p class="text-3xl font-thin text-indigo-50 cursor-pointer">{{ blog.title }}</p>
      <div class="flex items-center mt-4 space-x-4">
        <img class="w-10 h-10 rounded-full cursor-pointer" :src="author.image" alt="" />
        <div>
          <h3 class="text-indigo-50 font-semibold cursor-pointer">{{ author.name }}</h3>
          <p class="text-indigo-50 text-sm font-thin">
            <timeago :datetime="blog.date" />
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { getAuthor } from '@/auth/auth';
import { deleteBlog as DeleteBlog } from '@/api/blog/blog.api';
export default {
  name: 'PurpleCard',
  props: {
    blog: Object,
  },
  data() {
    return {
      suspense: true,
      author: { image: '' },
      user: null,
      date: '',
      post: '',
    };
  },
  async created() {
    const author = await getAuthor(this.blog.author);
    console.log(author);
    this.author = author;
    this.user = await getAuthor();
    this.date = new Date(this.blog.date).toUTCString().slice(0, 16);
    this.post =
      this.blog.post.length > 800
        ? this.blog.post.slice(0, 800) + '..... see more'
        : this.blog.post;
    this.suspense = false;
  },
  methods: {
    async deleteBlog() {
      try {
        if (confirm('Are you sure you wan to delete this blog?')) {
          await DeleteBlog(this.blog.id);
          location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
