<template>
  <Spinner v-if="loading" />
  <div class="error" v-else-if="error && !loading">
    <h1 class="text-4xl">{{ error }}</h1>
  </div>
  <slot v-else />
</template>

<script>
import Spinner from './spinner.vue';

export default {
  components: { Spinner },
  name: 'BasicLayout',
  props: {
    loading: Boolean,
    error: Boolean || String,
  },
};
</script>

<style lang="scss" scoped></style>
