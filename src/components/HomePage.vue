<template>
  <div>
    <div v-if="loggedIn">
      <user-feed/>
    </div>
    <div class="a" v-else>
      <welcome-page />
    </div>
  </div>
</template>

<script>
 import WelcomePage from './WelcomePage';
 import UserFeed from './UserFeed';
 export default {
   name: 'HomePage',
   components: {WelcomePage,UserFeed},
   computed: {
     loggedIn: function() {
       return this.$store.getters.loggedIn;
     },
   },
 }
</script>

<style scoped>
.a {
    text-align: center;
    align-items: center;
    align-self: center;
}
</style>
