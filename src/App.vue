<script setup>
import Header from "./components/Header.vue";

</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style>
* {
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F8F9FA;
}
</style>
