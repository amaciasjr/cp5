<template>
  <div>
    <h1>Blue Spruce</h1>
    <h2>{{ name }}</h2>
    <img v-bind:src="imagePath"/>
    <p>Photo By: <a href="https://www.flickr.com/photos/37467370@N08/7707225642/in/photolist-cK4xEJ-5omyc1-fLotFA-cK4wPC-gp9spx-52aZ7E-DTvgUL-czLDiy-Dn2E7b-czLDvS-czLDqu-gwNWkB-8D7yn1-qLq59o-aVkvMF-jsnikK-gwPxeH-e2LSpB-gwPBhx-71mtCX-dYxGm8-dCPbhU-iRc6eR-NsjsYf-JgwqA7-dd6aaX-Jgwqy3-rEEhmN-dd6bUe-4gZSN3-9eF5Re-JDe3ZE-cvhLS1-okiFfk-rm85YY-aSL7FP-dd683M-skcfgF-9Ma9NU-szotKq-aiG3QT-qkXVB7-qkXNV1-sk51L7-rhTxcy-q7yRNp-7pFW6e-qonvBR-r1q5vL-po267s">Greg Geobel</a></p>
    <h3>The Blue Spruce is native to the Rocky Mountains. An interesting fact is that Colorado made this the state tree on March 7, 1939.</h3>
    <p><a href="https://github.com/lsteinhorst/260lab3">GitHub</a></p>
  </div>
</template>

<script>
 export default {
   name: 'Blue Spruce',
   data () {
     return {
       imagePath: '/static/images/bluespruce.jpg'
     }
   }
 }
</script>

<style scoped>
 img {
     max-width: 500px;
 }
div {
     text-align: center;
 }
</style>
