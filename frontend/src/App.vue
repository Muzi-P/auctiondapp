<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
    .pl-drawer ul {
    background: none !important;
}
.pl-drawer a {
    color: white !important;
}
.pl-drawer i {
    color: #ffffff !important;
}
.is-mobile .pl-intro {
    padding: 60px 5px 0px 5px;
    text-align: center;
}
.is-mobile .pl-intro h1,
.is-mobile .pl-intro-2 h1 {
    font-size: 3em !important;
    text-shadow: 1px 1px #000;
}
.is-mobile .pl-intro h3,
.is-mobile .pl-intro-2 h3 {
    font-size: 1.6em !important;
    text-shadow: 1px 1px #000;
}
.is-desktop .pl-intro {
    padding: 100px;
    text-align: left;
}
.is-mobile .pl-intro-2 {
    padding: 60px 5px 0px 5px;
    text-align: center;
}
.is-desktop .pl-intro-2 {
    padding: 100px;
    text-align: left;
}
.pl-darkbg-toolbar {
    background-color: #1d3446 !important;
}
.pl-transparentbg-toolbar {
    background: none !important;
    box-shadow: none !important;
}
.logo-center-mobile {
    width: 100% !important;
}
.logo-left-desktop {
    width: auto !important;
    margin-left: 20px;
}
.toolbar__content {
    height: 100% !important;
}
.peer-toolbar .toolbar__side-icon {
    position: fixed;
    top: 3px;
}
.peer-toolbar a {
    color: #fff;
    margin-left: 24px;
    text-decoration: none;
    font-size: 1.1em;
}
.custom-header {
    color: #ffffff;
    font-size: 5em;
    font-weight: 400;
}
}
</style>
