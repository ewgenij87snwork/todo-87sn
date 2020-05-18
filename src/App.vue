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
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");
* {
  font-family: "Lato", trebuchet ms, verdana, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
