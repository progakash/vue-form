<template>
    <div id="form-body" class="col-md-8 offset-2">
        <h1>register page</h1>
        <hr>
        <RootInputApp type="text" name="user-name" size="50"/>
        <hr>
        <RootInputApp type="email" name="email" size="50"/>
        <hr>
        <RootInputApp type="password" name="password" size="50"/>
    </div>
    
</template>

<script>
//import formgenarate
import RootInputApp from '../FormGenerate/RootInputApp.vue'

export default {
   name: 'RegisterApp',
   components: {RootInputApp}
}
</script>

<style scoped>
    #form-body{
        border: 1px solid #000;
        margin-top:20px;
    }
</style>