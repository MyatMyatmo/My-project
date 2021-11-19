<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'About'}">About</router-link> |
    <router-link :to="{name: 'Job'}">Job</router-link>
  </div>
  <!-- switch component -->
  <router-view/>
  <button @click="redirect">Redirect</button>
  <button @click="goForward">Go Forward</button>
  <button @click="goBack">Go Back</button>
</template>
<script>
export default {
  methods:{
    goBack(){
      this.$router.go(-1);  // use router
    },
    goForward(){
      this.$router.go(1);
    },
    redirect(){
      this.$router.push({name: 'Home'}) // push you want to go route
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
// "dev": "json-server --watch database/db.json" (json server run shortcut)

// to get api use json server 

// to user json server (call npm package)
//npm package (npm install -g json-server)