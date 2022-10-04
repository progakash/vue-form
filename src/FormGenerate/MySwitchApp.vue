<template>
<!-- Child Component :  here props value binding with class -->
<div style="text-align:center" id="switch-style" @click="changeSwitchValue">
    <span :class="{ 'switch-on': modelValue, 'switch-off': !modelValue}"></span>
</div>
</template>

<script>

export default {
  name: 'MySwitchApp',
  props: ["modelValue"],
  methods:{
    changeSwitchValue()
    {
        console.log(this.modelValue);
        this.$emit('update:modelValue', !this.modelValue);
    }
  }
}
</script>


<style scoped>
/* .switch-inner{
    background-color:#ccc;
    width:72px;
    border-radius: 29px;
    padding:2px;
    
} */
.switch-off {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
.switch-on {
  height: 25px;
  width: 25px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}
#switch-style{
    margin:20px 0px 20px 0px;
}
</style>