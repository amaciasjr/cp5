<template>
  <div id="app">
    <app-header/>
    <app-header2/>
    <router-view/>
    <footer><a href="">CREATIVE PROJECT #5 GITHUB</a></footer>
  </div>
</template>

<script>
 import AppHeader from './components/AppHeader';
 import AppHeader2 from './components/AppHeader2';
 export default {
   name: 'App',
   components: { AppHeader, AppHeader2 }
 }
</script>

<style>
 /* https://color.adobe.com/CS04-color-theme-1994456/?showPublished=true */
 body {
     font-size: 18px;
     padding: 20px 100px 0px 100px;
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     margin-left: auto;
     margin-right: auto;
 }
 button {
     color: green;
     min-width: 100px;
     line-height: 1em;
     border: none;
     border-radius: 5px;
     color: white;
     padding: 5px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 1rem;
     margin: 4px 2px;
 }
 button.primary {
     background-color: green;
 }
 button.alternate {
     background-color: green;
 }
 button:focus {
     outline: none;
 }
 button:hover {
     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
 }
 button:active {
     transform: translateY(4px);
 }
 input {
     height: 20px;
     padding: 10px;
 }
 a {
    color: purple;
    text-decoration: none;
    margin-right: 10px;
}
 .flexWrapper {
     display:flex;
 }
 .flexRight {
     margin-left: auto;
 }
 .error {
     color: #F35537;
 }
 .column {
     width: 800px;
     margin-left: auto;
     margin-right: auto;
 }
 footer{
   margin-left: auto;
   margin-right: auto;
   width: 28%;
 }
</style>
