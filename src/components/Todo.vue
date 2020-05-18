<template>
  <div class="todo" v-if="!selected" :style="style">
    <div class="todo_head" :data-pct="todo.category">
      <h2>{{todo.name}}</h2>
      <span class="bookmark"></span>
    </div>
    <div class="todo_body">
      <ul>
        <li v-for="task in todoArr" :key="task.title">
          <task :task="task" />
        </li>
      </ul>
      <span>
        <!-- <i class="fal fa-angle-double-down"></i> -->
        <i class="fas fa-chevron-down"></i>
      </span>
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
  },
  mounted() {
    console.log(this.style.category);
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

/* 
Category -- как бы "вторая стадия пониманя" -- это условное разделение важности Todo по системе "золото, серебро и бронза". 
 */

.todo {
  background: rgb(140, 166, 186);
  padding: 0.25rem;
  cursor: pointer;
  border: solid 0.25rem transparent;
  border-radius: 2rem;
  border-bottom-right-radius: 0px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: inherit;
  border: solid 0.25rem transparent;
  border-radius: 1rem;
  padding: 0.25rem;
  margin: -0.6rem;
  background: linear-gradient(#fff, #f1f1f1) content-box,
    linear-gradient(var(--color0), var(--color1)) padding-box,
    linear-gradient(#fff, #f1f1f1) border-box;
  text-align: center;
  color: #18272c;
  text-indent: 1rem;
  h2 {
    font-weight: 300;
    margin: 0.1rem;
  }
}
.todo_head::before {
  display: grid;
  place-content: center;
  box-sizing: inherit;
  border: solid 0.25rem transparent;
  border-radius: 1rem;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  margin: -0.5rem;
  height: 3rem;
  width: 3rem;
  box-shadow: inset 0 0 1px 1px #efefef, inset 0 1rem grba(#000, 0.1);
  background: linear-gradient(var(--color0), var(--color1)) padding-box,
    linear-gradient(#f1f1f1, #e7e7e7) border-box;
  color: #e2e8eb;
  font-size: 1rem;
  text-indent: 0;
  content: attr(data-pct);
}
.todo_body {
  line-height: 1.44;
  position: relative;
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
  span {
    position: absolute;
    right: -2px;
    bottom: -2px;
    line-height: 1;
    border-radius: 50%;
    height: 20px;
    width: 20px;

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      font-size: 14px;
      color: #9a9faf;
    }
  }
}
</style>