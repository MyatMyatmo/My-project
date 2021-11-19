<template>
  <div v-if="job">
    <h1>title - {{job.title}}</h1>
    <p>detail - {{job.detail}}</p>
  </div>
</template>

<script>
export default {
  props:['id'], //to flow data
  // data(){
  //   return{
  //     id:this.$route.params.id //$route use with prameter
  //   }
  // }
  data(){
    return{
      job:null
    }
  },
  mounted(){
      fetch("http://localhost:3000/jobs/"+this.id)
      .then((response)=>{
          //return response value
          return response.json();
      })
      .then((data)=>{
          this.job = data;
      })
      .catch((err)=>{
          console.log(err.message);
      })
  }
}
</script>

<style>

</style>