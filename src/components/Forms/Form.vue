<template>
  <div class="max-w-screen-md mx-auto p-5">
    <div class="text-center mb-16">
      <p class="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
        <i class="fa-solid fa-pen-to-square"></i>
      </p>
      <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
        Blog app <span class="text-indigo-600">Write your feeling</span>
      </h3>
    </div>

    <form class="w-full" @submit="handleSubmit">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Title
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            v-model="title"
            required
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Add image link
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            v-model="image"
            required
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Your Message
          </label>
          <textarea
            rows="10"
            required
            v-model="post"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
          </textarea>
        </div>
        <p class="text-purple-500 text-xs italic" v-if="saving">Saving...</p>
        <p class="text-red-500 text-xs italic" v-else-if="error">{{ error }}.</p>
        <p class="text-green-500 text-xs italic" v-else-if="success">{{ success }}.</p>

        <div class="flex justify-between w-full px-3">
          <button
            class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>

  <img :src="image" class="w-48 mx-auto my-5" />
</template>

<script>
import { addBlog } from '../../api/blog/blog.api';
export default {
  name: 'Form',
  props: {
    id: String,
    author: String,
    post: String,
    title: String,
    image: String,
  },
  data() {
    return {
      saving: false,
      error: false,
      success: false,
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      if (this.id) {
      } else {
        try {
          this.saving = true;
          await addBlog({
            author: this.author,
            post: this.post,
            title: this.title,
            image: this.image,
          });
          this.saving = false;
          this.success = 'Saved successfully';
          this.post = '';
          this.title = '';
          this.image = '';
          setTimeout(() => {
            this.success = false;
          }, [3000]);
        } catch (err) {}
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
