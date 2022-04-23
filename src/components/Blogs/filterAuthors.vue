<template>
  <div v-show="!suspense" class="flex justify-end mt-5">
    <div class="mb-3 xl:w-96">
      <select
        :onchange="handleChange"
        class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option selected value="">Filter by authors</option>
        <option value="">All</option>
        <option :key="author.id" v-for="author in authors" :value="author.id">{{
          author.name
        }}</option>
      </select>
    </div> </div
  ><div> </div>
</template>

<script>
import { getAuthors, getAuthorsWork } from '../../api/author/author.api';
export default {
  name: 'FilterAuthor',
  props: {
    setAuthor: Function,
  },
  data() {
    return {
      authors: [],
      suspense: true,
    };
  },
  async created() {
    this.authors = await getAuthors();
    this.suspense = false;
  },
  methods: {
    async handleChange(e) {
      let value = e.target.value;
      let blogs = await getAuthorsWork(value);
      this.setAuthor(blogs);
    },
  },
};
</script>

<style lang="scss" scoped></style>
