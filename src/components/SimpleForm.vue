<template>
<p>Name: {{ form.name }}</p>
<form>
  <div class="container">
    <input type="text" placeholder="Enter name" v-model="form.name">
<hr>
    <input type="email" placeholder="Enter Email" v-model="form.email">
<hr>
    <input type="password" placeholder="Enter Password" v-model="form.password">
<hr>
    <input type="file" @change="onSelectFile">
<hr>
    <button type="button" @click="submitData">Register</button>
  </div>
</form>
</template>

<script>
export default {
    name: 'SimpleForm',
    data()
    {
        return {
            form : {
                name:'',
                email:'',
                password:'',
            }
        }
    },
    methods:{
        onSelectFile(event)
        {
            console.log(event.target.files[0]);
        },
        submitData()
        {
            const fd = new FormData();
            fd.append('name', this.form.name);
            fd.append('email', this.form.email);
            fd.append('password', this.form.password);

            console.log(Array.from(fd));
        }
    }
}
</script>

<style>

</style>