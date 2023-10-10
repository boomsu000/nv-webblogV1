<style>
.buttonn {
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
.button11 {background-color: #b6be3c;color: rgb(255, 255, 255);}
.button3 {background-color: #ff0000;color: rgb(255, 255, 255);}
.button2 {background-color: #257de2;color: rgb(255, 255, 255);} 
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
        <p class="alignright"><button class="buttonn button11" @click="navigateTo('/muser/create')"><b>เพื่มหนัง</b></button>
          <button class="buttonn button2" @click="navigateTo('/users')"><b>Manage สมาชิก</b></button>
          <button v-on:click="logout" class="buttonn button3"><b>Logout</b></button></p>
      </div>
      <h1>Get All movie</h1><hr width="100000px;" color="#52a9be" size="10"> 
      <div><h2>จำนวนหนัง {{ musers.length }}</h2></div><hr>
      <div v-for="i in musers" v-bind:key="i.idm">
        <div>ชื่อหนัง: {{ i.moviename }}</div>
        <div>ผู้กำกับ: {{ i.diractor }}</div>
        <div>ทุน: {{ i.budget }}</div>
        <div>รายได้: {{ i.money }}</div>

        <div><button v-on:click="navigateTo('/muser/'+i.idm)">ดูข้อมูลหนัง</button></div>
        <div><button @click="navigateTo('/muser/edit/'+i.idm)">edit หนัง</button></div>
        <div><button @click="deleteMovie(i)">delete หนัง</button></div>
        <hr>
      </div>
    </div>
  </template>
  
  <script>
  import MovieService from "@/services/MovieService";
  
  export default {
    data() {
      return {
        musers: []
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
      async deleteMovie(muser){
        let result = confirm("Want of delete?")
        if (result){
          try{
            await MovieService.delete(muser)
            this.refreshData()
          }catch(err){
            console.log(err)
          }
        }
      },
      async refreshData() {
        this.musers = (await MovieService.index()).data;
      }
    },
    async createdMovie() {
      try{
        this.musers = (await MovieService.index()).data;
      }catch (err){
        console.log(err)
      }
      
    }
  };
  </script>
  
  <style></style>