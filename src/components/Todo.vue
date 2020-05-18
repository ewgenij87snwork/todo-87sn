<template>
  <div class="todo" v-if="!selected" :style="style">
    <div class="todo_head">
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
  background: rgb(140, 166, 186);
  padding: 0.25rem;
  font: trebuchet ms, verdana, sans-serif;
  cursor: pointer;
  border: dashed 0.25rem transparent;
  border-radius: 2rem;
  box-sizing: border-box;
  background: linear-gradient(#fff, #dbdbdb) content-box,
    linear-gradient(var(--color0), var(--color1)) padding-box,
    linear-gradient(#fff, #dcdcdc) border-box;
  transition: all 0.2s ease;
}
.todo:hover {
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.7);
  background: linear-gradient(#fff, #f1f1f1) content-box,
    linear-gradient(var(--color0), var(--color1)) padding-box,
    linear-gradient(#fff, #dcdcdc) border-box;
}
.todo_head {
  box-sizing: inherit;
  border: inherit;
  border-radius: 1rem;
  padding-bottom: 0.25rem;
  margin: -0.6rem;
  background: linear-gradient(var(--color0), var(--color1)) padding-box,
    linear-gradient(#fff, #fff) border-box;
  text-align: center;
  color: #fff;
  h2 {
    font-weight: 300;
  }
}
.todo_body {
  line-height: 1.44;
  li {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
    position: relative;
  }
  li:first-of-type {
    margin-top: 1rem;
  }
  li:first-of-type::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    z-index: 0;
    border-top: 1px solid #ccc;
    box-shadow: 0 1px 1px rgba(255, 255, 255, 1);
  }
  li:last-of-type {
    border-bottom: none;
    box-shadow: none;
  }
}
</style>