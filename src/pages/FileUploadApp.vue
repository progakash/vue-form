<template>
<div id="form-body" class="col-md-8 offset-2">
    <h1>My Switch</h1>
    <!-- Parent Component
        props name >> switchValue
        data property >> switchval
        -----------------------
        emit method from child component
        changeSwitchValue which execute inline or method
        here inline 
    -->
    <MySwitchApp :switchValue="switchval" @changeSwitchValue="switchval = !switchval"/>
    value: {{ switchval }}
</div>
</template>

<script> 
import MySwitchApp from '../FormGenerate/MySwitchApp.vue'
export default{
    name: 'FileUploadApp',
    components: {MySwitchApp},
    data()
    {
        return {
            switchval : true,
        }
    }
}
</script>
<style scoped>
    #form-body{
        border: 1px solid #000;
        margin-top:20px;
    }
</style>