<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
* {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
}
</style>
