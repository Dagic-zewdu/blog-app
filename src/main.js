import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/tailwind.css'
import 'flowbite';
import gAuthPlugin from 'vue3-google-oauth2';
const clientId= '1007716163290-a30tbenflmomfllrefqki4i7bpg3n6g7.apps.googleusercontent.com'


createApp(App).use(router).use(gAuthPlugin,{
    clientId,
     scope: 'email',
     prompt: 'consent',
     fetch_basic_profile: true

}).mount('#app')
