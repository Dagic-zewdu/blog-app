<template>
  <BasicLayout :loading="loading" :error="error">
    <Form
      v-if="blog"
      :author="blog.author"
      :title="blog.title"
      :post="blog.post"
      :image="blog.image"
    />
    <FourOFour v-else />
  </BasicLayout>
</template>

<script>
import { getBlog } from '../../api/blog/blog.api';
import BasicLayout from '../Layouts/basicLayout.vue';
import FourOFour from '../Layouts/404.vue';
import Form from './Form.vue';

export default {
  name: 'EditPost',
  data() {
    return {
      id: this.$route.params.id,
      loading: true,
      blog: null,
      error: false,
    };
  },
  async created() {
    try {
      this.loading = true;
      this.blog = await getBlog(this.id);
    } catch (err) {
      this.error = err.message;
    }
  },
  components: {
    FourOFour,
    BasicLayout,
    Form,
  },
};
</script>

<style lang="scss" scoped></style>
