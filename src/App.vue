<template>
  <div id="app">
  <transition name="fade"></transition>
    <router-view/>

  </div>
 
</template>

<style>
html{
 
   background-image: url("./assets/background.png");
background-color: #c4c8fd;} 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
 
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.fade-enter-active, .fade-leave-active{
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active{
  transition-delay: .25s;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
}

</style>
