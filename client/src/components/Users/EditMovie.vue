<template>
    <div>
      <h1>Edit movie</h1>
      <form v-on:submit.prevent="editUser">
        <p>ชื่อหนัง: <input type="text" v-model="muser.moviename" /></p>
        <p>ผู้กำกับ: <input type="text" v-model="muser.director" /></p>
        <p>ทุน: <input type="text" v-model="muser.budget" /></p>
        <p>รายได้: <input type="text" v-model="muser.money" /></p>
        <p><button type="submit">edit movie</button></p>
        <div><button @click="navigateTo('/musers')">กลับ</button></div>
      </form>
      <hr />
      <div>
        <p>ชื่อหนัง: {{ muser.moviename }}</p>
        <p>ผู้กำกับ: {{ muser.director }}</p>
        <p>ทุน: {{ muser.budget }}</p>
        <p>รายได้: {{ muser.money }}</p>
        <p></p>
      </div>
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
          status: "active"
        }
      };
    },
    methods: {
      async editMovie() {
        try {
          console.log(this.muser)
          await UsersService.put(this.muser)
          this.$router.push("/musers")
        } catch (err) {
          console.log(err)
        }
      }
    },
    async createdMovie() {
      try {
        let muserId = this.$route.params.userId
        this.muser = (await UsersService.show(muserId)).data
      } catch (err) {
        console.log(err)
      }
    }
  };
  </script>
  
  <style></style>