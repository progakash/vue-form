<template>
<div id="form-body" class="col-md-8 offset-2">

    <MyInputApp 
        v-model="username"
        placeholder="Enter username"
        type="email" 
    />

    <br><br><hr><br><br>
    
    <p>Name: {{ username }}</p>

</div>
</template>

<script> 
//Here:: import input component
import MyInputApp from '../FormGenerate/MyInputApp.vue'

export default{
    name: 'InputPageApp',
    components: {MyInputApp},
    data()
    {
        return {
            username: '',
        }
    }
}
</script>
<style scoped>
    #form-body{
        /* border: 1px solid #000; */
        margin-top:20px;
    }
    p{
        text-align:left;
    }
</style>