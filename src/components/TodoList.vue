<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.name">
        <todo :todo="todo" @select="selectTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Todo from "./Todo.vue";
export default {
  components: {
    Todo
  },
  computed: {
    ...mapState(["todos", "selected"])
  },
  methods: {
    ...mapMutations(["selectTodo"])
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  align-items: start;
  align-content: space-evenly;
}
.todo-list > ul > li {
  height: 100%;
}
</style>