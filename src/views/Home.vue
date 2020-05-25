<template>
  <div class="home">
    <todo-list />
    <todo-detail />
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
import TodoDetail from "../components/TodoDetail.vue";
export default {
  components: {
    TodoList,
    TodoDetail
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