<template>
  <header class="bg-white px-8">
    <nav
      class="flex flex-wrap items-center content-center justify-between w-full py-6 md:py-0 px-4 text-lg text-gray-700 bg-white"
    >
      <div>
        <router-link to="/">
          <h1 class="text-4xl">
            <i class="fa-solid fa-pen-to-square"></i>

            <n class="text-indigo-600">Blog</n><b>It</b>
          </h1>
        </router-link>
      </div>
      <i @click="handleToggle" class="fas fa-bars h-6 w-6 cursor-pointer md:hidden block"></i>
      <div
        :class="['w-full md:flex md:items-center md:w-auto ', !toggle ? 'hidden' : '']"
        id="menu"
      >
        <ul
          v-show="user"
          class="pt-4 bg-white text-base text-gray-700 md:flex content-center md:justify-between md:pt-0"
        >
          <li>
            <router-link class="md:p-4 py-2 block hover:text-purple-400" to="/about">
              About
            </router-link>
          </li>
          <li>
            <router-link class="md:p-4 py-2 block hover:text-purple-400" to="/myblog">
              My blogs
            </router-link>
          </li>
          <li>
            <router-link class="md:p-4 py-2 block hover:text-purple-400" to="/writeblog">
              <i class="fa-solid fa-pen-to-square text-1xl"></i>
            </router-link>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex h-full content-center justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              <img v-if="user.image" class="w-10 h-10 rounded-full mx-2" :src="user.image" alt="" />
              {{ user.name }}
              <i class="fa-solid fa-caret-down"></i>
            </button>
            <div
              id="dropdownNavbar"
              class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <div
                    @click="Logout"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul
          v-show="!user"
          class="pt-4 bg-white text-base text-gray-700 md:flex content-center md:justify-between md:pt-0"
        >
          <li>
            <router-link class="md:p-4 py-2 block hover:text-purple-400" to="/about">
              About
            </router-link>
          </li>
          <li class="content-center">
            <GoogleSignIn :setUser="setUser" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { getAuthor } from '@/auth/auth';
import GoogleSignIn from '../../auth/g-sign.vue';
export default {
  name: 'NavBar',
  data() {
    return {
      toggle: false,
      user: '',
    };
  },
  methods: {
    handleToggle() {
      this.toggle = !this.toggle;
    },
    setUser(user) {
      this.user = user;
    },
    Logout() {
      sessionStorage.removeItem('id');
      this.user = false;
      location.reload();
    },
  },
  components: {
    GoogleSignIn,
  },
  async created() {
    this.user = await getAuthor();
  },
  watch: {
    '$route.name': function (route) {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
header {
  min-height: 70px;
  display: flex;
  align-items: center;
}
</style>
