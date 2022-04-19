<template>
  <BasicLayout :loading="loading" :error="error">
    <Form v-if="user" :author="user.id" />
    <FourOFour v-else />
  </BasicLayout>
</template>

<script>
import { getAuthor } from '../../auth/auth';
import FourOFour from '../Layouts/404.vue';
import BasicLayout from '../Layouts/basicLayout.vue';
import Form from './Form.vue';
export default {
  name: 'AddBlog',
  props: {
    id: String,
  },
  data() {
    return {
      loading: true,
      user: null,
      error: false,
    };
  },
  async created() {
    try {
      const user = await getAuthor();
      this.user = user;
      this.loading = false;
    } catch (err) {
      this.error = err.message;
      this.loading = false;
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
