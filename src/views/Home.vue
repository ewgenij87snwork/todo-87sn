<template>
  <div class="home">
    <todo-list />
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
export default {
  components: {
    TodoList
  }
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
}
.home {
  background: silver;
  min-height: 100vh;
}
</style>