<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.name">
        <todo :todo="todo" :selcted="selected" />
      </li>
      <li></li>
      <li></li>
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
    ...mapState(["todos", "selected"])
  }
};
</script>

<style lang="scss">
.todo-list {
  max-width: 980px;
  margin: 0 auto;
  padding: 1rem;
}

.todo-list > ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 1.5rem;
  align-items: start;
}
</style>