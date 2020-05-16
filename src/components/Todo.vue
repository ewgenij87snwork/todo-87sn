<template>
  <div class="todo" v-if="!selected">
    <div class="todo_head" :style="bla">
      <h2>{{todo.name}}</h2>
      <span class="bookmark"></span>
    </div>
    <div class="todo_body">
      <ul>
        <li v-for="task in todoArr" :key="task.title">
          <task :task="task" />
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import Task from "./Task.vue";
export default {
  components: {
    Task
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean
    }
  },
  data() {
    return {
      todoArr: this.todo.tasks.splice(
        0,
        `${!this.selected ? 2 : this.todo.tasks.length}`
      ),

      bla: "background: teal"
    };
  },
  computed: {}
};
</script>

<style lang="scss">
.todo {
  border-radius: 0.2rem;
  background-color: hsl(206, 25%, 64%);
  padding: 0.5rem;
}
</style>