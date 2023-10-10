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
      <h1>เพื่มหนัง</h1>
      <form v-on:submit.prevent = "created">
        <p>ชื่อหนัง:<input type="text" v-model="muser.moviename"></p>
        <p>ผู้กำกับ: <input type="text" v-model="muser.director"></p>
        <p>ทุน: <input type="text" v-model="muser.budget"></p>
        <p>รายได้: <input type="text" v-model="muser.money"></p>
        <p><button type="submit"><b>เพื่มหนัง</b></button></p>
      </form></center>
    </div>
  </template>

  <script>
  import MovieService from "@/services/MovieService";
  
  
  export default {
    
    data() {
      return {
        muser: {
          moviename: "",
          director: "",
          budget: "",
          money: "",
          status: "active",
          error: null
        }
      };
    },
    methods: {
      async created(){
        try{
          await MovieService.post(this.muser)
          this.$router.push('/musers')
        }
      
        catch(err){
          console.log(err)

            }
      }
    }
  };
  </script>
  <style></style>
  