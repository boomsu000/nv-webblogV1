<style>
.buttonnn {
  background-color: #89af4c; /* Green */
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

.button2 {background-color: #469e54;color: rgb(255, 255, 255);}
.button3 {background-color: #f44336;color: rgb(255, 255, 255);} 
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
    <div><center>
      <h1>เพื่มสมาชิก</h1>
      <form v-on:submit.prevent = "createUser">
        <p>ชื่อ:<input type="text" v-model="user.name"></p>
        <p>นามสกุล: <input type="text" v-model="user.lastname"></p>
        <p>email: <input type="text" v-model="user.email"></p>
        <p>password: <input type="text" v-model="user.password"></p>
        <p><button type="submit"><b>ตกลง</b></button></p>
      </form></center>
    </div>
  </template>

  <script>
  import UsersService from "@/services/UsersService";
  
  
  export default {
    
    data() {
      return {
        user: {
          name: "",
          lastname: "",
          email: "",
          password: "",
          status: "active",
          error: null
        }
      };
    },
    methods: {
      async createUser(){
        try{
          await UsersService.post(this.user)
          this.$router.push('/login')
        }
      
        catch(err){
          console.log(err)

            }
      }
    }
  };
  </script>
  <style></style>
  