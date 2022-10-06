<template>
    
   <div class="text-input-wrapper">
        <input 
            class="my-input" 
            :type= "type"
            :value= "modelValue"
            @input="handleChange($event.target.value)"
            :placeholder="placeholder"
        >
    </div> 
    <!-- <p>Child View: {{modelValue}}</p> -->
</template>

<script>
export default{
    name: 'MyInputApp',
    props: ['modelValue', 'placeholder','type'],
    methods: {
        handleChange(event)
        {
            //from input $event pass kora mane <> puro inputEvent ke patiye dei
            //from input $event.target pass kora mane <> input ke patiye dei
            console.log(event);
            this.$emit('update:modelValue', event);
        }
    }
}
</script>

<style>
.text-input-wrapper {
    width: 333px;
}
.my-input {
    width:100%;
    padding:12px 20px;
    margin: 8px 0;
    display: inline-block;
    border : 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
.my-input:focus {
    outline:none;
}
.invalid-input {
    border: 1px solid red;
}
p .error-message {
    color: red;
    margin: 0;
    padding: 0;
}
</style>
