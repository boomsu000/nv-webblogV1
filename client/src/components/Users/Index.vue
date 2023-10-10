<style>
.buttonnn {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button6 {background-color: #ff0000;color: rgb(255, 255, 255);} 
.button1 {background-color: #79da1f;color: rgb(255, 255, 255);} 
.button5 {background-color: #266e6e;color: rgb(255, 255, 255);} 
h1 {
  font-size: 50px;
}
h4 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
.alignleft {
	float: left;
}
.alignright {
	float: right;
}
</style>
<template>
  
    <div><hr width="100000px;" color="#52a9be" size="10"> 
      <div id="textbox">
        <p class="alignleft"></p>
        <p class="alignright"><button  class="buttonnn button5" @click="navigateTo('/musers')">กลับ</button>
          <button class="buttonnn button1" @click="navigateTo('/user/create')"><b>เพื่มสมาชิก</b></button>
          <button v-on:click="logout" class="buttonnn button6"><b>Logout</b></button></p>
      </div>
      <h1>Get All Users</h1><hr width="100000px;" color="#52a9be" size="10"> 
      <div><h2>จำนวนผู้ใช้ {{ users.length }}</h2></div><hr>
      <div v-for="i in users" v-bind:key="i.id">
        <div>ชื่อ: {{ i.name }}</div>
        <div>นามสกุล: {{ i.lastname }}</div>
        <div>status: {{ i.status }}</div>
        <div>type: {{ i.type }}</div>
        
        <div><button v-on:click="navigateTo('/user/'+i.id)">ดูข้อมูลผู้ใช้</button></div>
        <div><button @click="navigateTo('/user/edit/'+i.id)">edit user</button></div>
        <div><button @click="deleteUser(i)">delete user</button></div>
        <hr>
      </div>
    </div>
  </template>
  
  <script>
  import UsersService from "@/services/UsersService";
  
  export default {
    data() {
      return {
        users: []
      };
    },
    methods:{
      logout () {
 this.$store.dispatch('setToken', null)
 this.$store.dispatch('setUser', null)
 this.$router.push({
 name: 'login'
 })
},
      navigateTo(route){
        this.$router.push(route)
      },
      async deleteUser(user){
        let result = confirm("Want of delete?")
        if (result){
          try{
            await UsersService.delete(user)
            this.refreshData()
          }catch(err){
            console.log(err)
          }
        }
      },
      async refreshData() {
        this.users = (await UsersService.index()).data;
      }
    },
    async created() {
      try{
        this.users = (await UsersService.index()).data;
      }catch (err){
        console.log(err)
      }
      
    }
  };
  </script>
  
  <style></style>