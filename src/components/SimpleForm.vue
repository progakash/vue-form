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
<hr>
List here<button type="button" @click="resutlData">click</button>
<ul>
    <li v-for="item in dataList" :key="item.name">{{ item.title }}</li>
</ul>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SimpleForm',
    data()
    {
        return {
            form : {
                name:'',
                email:'',
                password:'',
            },
            file: '',
            dataList: [],
        }
    },
    // mounted()
    // {
    //     this.resutlData();
    // },
    created()
    {
        this.resutlData();
        this.testFunc();
    },
    methods:{
        async resutlData()
        {
          const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        //    console.log(result.data[0].title);
           this.dataList = result.data;
           console.log(result);

        },
        testFunc()
        {
            console.log('hello');
        },
        onSelectFile($event)
        {
            this.file = $event.target.files[0];
            console.log(this.file.name);
        },
        submitData()
        {
            const fd = new FormData();
            fd.append('name', this.form.name);
            fd.append('email', this.form.email);
            fd.append('password', this.form.password);
            fd.append('file', this.file);

            console.log(Array.from(fd));
        }
    }
}
</script>

<style>

</style>