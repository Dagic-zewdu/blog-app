<template>
  <div v-if="!suspense" style="bg-white mt-10 rgb(245 245 245)">
    <div
      class="space-y-4 bg-white mt-10 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0"
      style="cursor: auto"
    >
      <router-link :to="'/blog/' + blog.id" class="group">
        <div class="aspect-w-3 aspect-h-2">
          <img
            class="object-cover h-96 w-full shadow-lg rounded-lg group-hover:opacity-75"
            :src="blog.image"
            alt="Featured Photo"
            style="cursor: auto"
          />
        </div>
      </router-link>

      <div class="sm:col-span-2" style="cursor: auto">
        <div class="flex items-center space-x-3" style="cursor: auto">
          <div class="flex items-center space-x-2" style="cursor: auto">
            <router-link
              v-show="blog.author === user.id"
              :to="'/editblog/' + blog.id"
              class="inline- cursor-pointer hover:bg-indigo-600 hover:text-white items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
              style="cursor: auto"
            >
              <i class="fa-solid text-indigo-600 hover:text-white fa-pencil text-1xl"></i>
            </router-link>

            <span
              v-show="blog.author === user.id"
              @click="deleteBlog"
              class="inline-flex cursor-pointer hover:bg-indigo-600 hover:text-white items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
              style="cursor: auto"
            >
              <i
                class="fa-solid fa-trash hover:text-white text-indigo-600 text-purple text-1xl"
              ></i>
            </span>
          </div>
        </div>

        <div class="mt-2" style="cursor: auto">
          <router-link :to="'/blog/' + blog.id" class="group">
            <h4
              class="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary"
              style="cursor: auto"
              >{{ blog.title }}</h4
            >
          </router-link>

          <router-link
            :to="'/blog/' + blog.id"
            class="mt-1 text-sm font-normal text-skin-base leading-5 whitespace-pre-wrap"
            style="cursor: auto"
          >
            {{ post }}
          </router-link>

          <div class="mt-3 flex items-center font-sans" style="cursor: auto">
            <div class="shrink-0">
              <router-link :to="'/blog/' + blog.id">
                <span class="sr-only">{{ author.name }}</span>

                <img
                  class="h-10 w-10 rounded-full"
                  :src="author.image"
                  :alt="author.name"
                  style="cursor: auto"
                />
              </router-link>
            </div>

            <div class="ml-3">
              <p class="text-sm font-medium text-skin-inverted">
                <router-link :to="'/blog/' + blog.id" class="hover:underline" style="cursor: auto">
                  {{ author.name }}
                </router-link>
              </p>

              <div class="flex space-x-1 text-sm text-skin-muted" style="cursor: auto">
                <time datetime="2022-02-01" style="cursor: auto">{{ date }}</time>

                <span aria-hidden="true">·</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuthor } from '@/auth/auth';
import { deleteBlog as DeleteBlog } from '@/api/blog/blog.api';
export default {
  name: 'Blog',
  props: {
    blog: Object,
  },
  data() {
    return {
      suspense: true,
      author: null,
      user: null,
      date: '',
      post: '',
    };
  },
  async created() {
    this.author = await getAuthor(this.blog.author);
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

<style scoped>
.container {
  margin-top: 5rem;
  max-width: 50%;
}

.space-y-4 {
  padding: 25px;
}
</style>
