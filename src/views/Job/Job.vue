<template>
    <h1>Job</h1>
    <div class="job" v-for="job in jobs" :key="job.id">
        <!-- dynamic route param -->
        <router-link :to="{name:'JobDetail', params:{id: job.id}}">
            <h1>{{ job.title }}</h1>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[]
        }
    },
    mounted(){
        fetch("http://localhost:3000/jobs")
        .then((response)=>{
            //return response value
            return response.json();
        })
        .then((datas)=>{
            //push db data
            this.jobs = datas;
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
}
</script>

<style>
    .job {
        color: palevioletred;
    }
</style>
//fetch function ko use yin ever resolve pyan lote pay ya ml