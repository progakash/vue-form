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
    <!-- <MySwitchApp :switchValue="switchval" @changeSwitchValue="switchval = !switchval"/>
    value: {{ switchval }}
     -->
    
    <MySwitchApp v-model="switchValue"/> value: {{ switchValue }}
    <hr>
    <MySwitchApp v-model="switchValue1"/> value1: {{ switchValue1 }}
    <hr>
    <MySwitchApp v-model="switchValue2"/> value2: {{ switchValue2 }}
</div>
</template>

<script> 
import MySwitchApp from '../FormGenerate/MySwitchApp.vue'
export default{
    name: 'SwitchPageApp',
    components: {MySwitchApp},
    data()
    {
        return {
            switchValue  : true,
            switchValue1 : false,
            switchValue2 : true,
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