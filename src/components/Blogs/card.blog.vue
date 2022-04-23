<template>
  <div v-show="!suspense" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <router-link :to="'/blog/' + blog.id">
      <article class="overflow-hidden rounded-lg shadow-lg">
        <img :src="blog.image" alt="Placeholder" class="block h-auto w-full" />
        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            <p class="no-underline hover:underline text-black"> {{ blog.title }} </p>
          </h1>
          <p class="text-grey-darker text-sm"> {{ date }} </p>
        </header>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
          <div class="flex items-center no-underline hover:underline text-black">
            <img
              class="h-10 w-10 rounded-full"
              :src="author.image"
              :alt="author.name"
              style="cursor: auto"
            />
            <p class="ml-2 text-sm"> {{ author.name }} </p>
          </div>
        </footer>
      </article>
    </router-link>
  </div>
</template>

<script>
import { getAuthor } from '@/auth/auth';
export default {
  name: 'CardBlog',
  props: {
    blog: Object,
  },
  data() {
    return {
      post: this.blog.post.slice(0, 100),
      date: new Date(this.blog.date).toUTCString().slice(0, 16),
      author: { image: '' },
      suspense: true,
    };
  },
  async created() {
    let author = await getAuthor(this.blog.author);
    this.author = author;
    this.suspense = false;
  },
};
</script>

<style lang="scss" scoped></style>
