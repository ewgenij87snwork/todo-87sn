<template>
  <div class="todo" v-if="!selected" :style="style">
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

      bla: "background: teal",
      style: {
        "--color0": this.todo.colors[0],
        "--color1": this.todo.colors[1]
      }
    };
  }
};
</script>

<style lang="scss">
// ГРАДИЕнт на право
/* 
Чтобы получить цвета из пропса:
  - в template биндим стили :style="style"
  - в data() уже делаем css-переменные:
      style: {
        "--color0": this.todo.colors[0],
        "--color1": this.todo.colors[1]
      }
  - в <style> используем так:
      background: linear-gradient(var(--color0), var(--color1)) padding-box;
*/

.todo {
  border-radius: 0.5rem;
  background: rgb(140, 166, 186);
  padding: 0.5rem;
  // height: calc(100% - 2rem);
  font: 1.2em/ 1.375 trebuchet ms, verdana, sans-serif;

  // for some beautiful
  border: solid 0.5rem transparent;
  box-sizing: border-box;
  background: linear-gradient(#dbdbdb, #fff) content-box,
    linear-gradient(var(--color0), var(--color1)) padding-box,
    linear-gradient(#fff, #dcdcdc) border-box;
}
.todo_body {
  // margin-bottom: 1rem;
}
</style>