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
            jobs:[
                {id:"1",title:"Title 1",detail:"Leader"},
                {id:"2",title:"Title 2",detail:"Senior"},
                {id:"3",title:"Title 3",detail:"Junior"},
            ]
        }
    }
}
</script>

<style>
    .job {
        color: palevioletred;
    }
</style>