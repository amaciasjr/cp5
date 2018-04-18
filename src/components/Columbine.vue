<template>
  <div>
    <h1>Columbine</h1>
    <h2>{{ name }}</h2>
    <img v-bind:src="imagePath"/>
    <p>Photo By: <a href="https://www.flickr.com/photos/bylauryn/8655422796/in/photolist-ebRiDw-9ALqL6-9B934h-6C1K4u-8j5Snp-4JRUmJ-9ALr1i-6rgg3w-ei1obV-PhdVQ-a3dNex-6i2ZDV-6qjNJR-e7XQ7T-7Kwp1J-JxMDrr-cyXkSQ-aAoaLE-poTZ6a-a4fK2d-8j97cY-6oZWfM-9Mx7DB-87C26J-srzWbg-6zf7b5-9B7yF9-ez6TY-9B7yJb-EbuQmj-a3terd-CJC8f9-7RQUQS-4KZqXF-L9PKq-pCoS9Q-6vc8zm-aNVXmD-UnVF19-4Rj7HG-nNk6WN-aE5Mw6-co3qt3-9TAgx5-bnbGwk-jtTAV-4S416u-4L4EtN-fmu8X-2qzWJ">Lauryn</a></p>
    <h3>The Columbine is native to the Rocky Mountains and is as known by the name of Rocky Mountain Columbione. Due to the beautiful colors of the flower, in 1899, Colorado's Legislature made it the state's flower.</h3>
    <p><a href="https://github.com/lsteinhorst/260lab3">GitHub</a></p>
  </div>
</template>

<script>
 export default {
   name: 'Columbine',
   data () {
     return {
       imagePath: '/static/images/columbine.jpg'
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
