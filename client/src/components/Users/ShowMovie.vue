<template>
    <div>
      <h1>Get movie By Id</h1>
      <div>id: {{ muser.id }}</div>
      <div>ชื่อหนัง: {{ muser.moviename }}</div>
      <div>ผู้กำกับ: {{ muser.director }}</div>
      <div>ทุน: {{ muser.budget }}</div>
      <div>เงิน: {{ muser.money }}</div>
      <div>เงิน: {{ muser.status }}</div>
      <div><button @click="navigateTo('/muser/edit/'+muser.idm)">edit movie</button></div>
      <div><button @click="navigateTo('/musers')">กลับ</button></div>
    </div>
  </template>
  
  <script>
  import MovieService from "@/services/MovieService";
  
  export default {
    data() {
      return {
        muser: null
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      }
    },
    async createdMovie() {
      try {
        let muserId = this.$route.params.muserId;
        this.muser = (await MovieService.show(muserId)).data;
        console.log(this.muser);
      } catch (err) {
        console.log(err);
      }
    }
  };
  </script>
  
  <style></style>