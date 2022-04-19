<template>
  <button
    @click="handleClickSignIn"
    class="bg-transparent hover:bg-blue text-blue font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  >
    <i class="fa-brands fa-google"></i>
    sign in
  </button>
</template>

<script>
import { inject, toRefs } from 'vue';
import { signIn } from './auth';
export default {
  name: 'GoogleSignIn',
  data() {
    return {};
  },
  props: {
    setUser: Function,
  },
  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        signIn(
          {
            id: googleUser.getBasicProfile().getId(),
            email: googleUser.getBasicProfile().getEmail(),
            name: googleUser.getBasicProfile().getName(),
            image: googleUser.getBasicProfile().getImageUrl(),
          },
          this.setUser
        );
        location.reload();
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  },
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');
    const handleClickLogin = () => {};
    return {
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
    };
  },
};
</script>

<style lang="scss" scoped></style>
