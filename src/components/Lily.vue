<template>
  <div>
    <h1>Lily</h1>
    <h2>{{ name }}</h2>
    <img v-bind:src="imagePath"/>
    <p>Photo By: <a href="https://www.flickr.com/photos/matsuyuki/2641937758/in/photolist-52sC41-aey1rL-52SNoy-6bVGBB-8hyku9-26FTbr-6T4n31-nMAY3p-3groNT-vxwCeR-ahy15N-cR9bwf-8cRhMG-3vhjtr-6uPSjy-8cRiQW-227Dye-9T57Fv-9T7XV5-52PxZD-nPs7wf-JLpVJx-Pyao3-o3qyr9-c1oUEh-GNosAb-24RpWm-c2AWaS-PyaoG-4VsRm8-8njzEr-51Dciw-3iNVL-6wzc7t-cdwZRU-bsrszM-acBmpT-9ZNt6i-4XL7j6-YvpiE-acEaV7-adTisF-hEkKUW-6AfNCQ-7vMTyp-6DtNhW-4W8GHR-4EtksM-fn1r2D-6JUZQr">Toshiyuki IMAI</a></p>
    <h3>The Lily is also known by the name of Lilium. Thy are mostly found in the northern hemisphere and they are important symbols throughout most cultures in the world.</h3>
  </div>
</template>

<script>
 export default {
   name: 'Lily',
   data () {
     return {
       imagePath: '/static/images/lily.jpg'
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
