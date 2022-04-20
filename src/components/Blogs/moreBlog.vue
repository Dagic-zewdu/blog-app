<template>
  <div class="container mt-4">
    <h1 class="text-center text-4xl">More Blogs from this author </h1>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <CardBlog v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script>
import CardBlog from './card.blog.vue';
export default {
  name: 'MoreBlogs',
  props: {
    blogs: Array,
  },
  components: { CardBlog },
};
</script>

<style lang="scss" scoped></style>
