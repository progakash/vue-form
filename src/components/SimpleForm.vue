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
<h3>List here</h3><button type="button" @click="resutlData">click</button>
<ul>
    <li v-for="item in dataList" :key="item.name">{{ item.name }}</li>
</ul>
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
            },
            file: '',
            dataList: [],
        }
    },
    mounted()
    {
        this.resutlData();
    },
    methods:{
        resutlData()
        {
            this.dataList = [
                {
                    name:'Helo',
                    phone: '39393'
                },
                {
                    name:'Helo1',
                    phone: '56565'
                },
                {
                    name:'Helo2',
                    phone: '32323'
                }
            ]
        },
        onSelectFile(event)
        {
            this.file = event.target.files[0];
            console.log(event.target.files[0]);
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