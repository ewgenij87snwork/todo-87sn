<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.name">
        <todo :todo="todo" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Todo from "./Todo.vue";
export default {
  components: {
    Todo
  },
  computed: {
    ...mapState(["todos"])
  }
};
</script>

<style>
</style>