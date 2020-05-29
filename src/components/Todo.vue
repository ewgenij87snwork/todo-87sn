<template>
  <div class="todo" :style="style" @click="todoClicked" :class="{ todo__selected: selected}">
    <div class="todo_head" :data-pct="todo.category">
      <h2>{{todo.name}}</h2>
      <span class="bookmark"></span>
    </div>
    <div class="todo_body">
      <ul>
        <li v-for="task in todoArr" :key="task.id">
          <task :todo="todo" :task="task" />
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
import { mapState } from "vuex";
import Task from "./Task.vue";
export default {
  components: {
    Task
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(["selected"]),
    todoArr() {
      return this.selected
        ? this.todo.tasks.slice(
            0,
            this.todo.tasks.filter(task => !task.deleted).length
          )
        : this.todo.tasks.slice(0, 2);
    }
  },
  data() {
    return {
      style: {
        "--color0": this.todo.colors[0],
        "--color1": this.todo.colors[1]
      }
    };
  },

  methods: {
    todoClicked() {
      const appRect = document.querySelector("#app").getBoundingClientRect();
      const elRect = this.$el.getBoundingClientRect();
      const todo = this.todo;
      const rect = {};
      rect.top = elRect.top - appRect.top;
      rect.left = elRect.left - appRect.left;
      rect.width = elRect.width;
      rect.height = elRect.height;
      rect.appWidth = appRect.width;
      rect.appHeight = appRect.height;
      this.$emit("select", { rect, todo });

      /* 
        1. Берем размер окна и размер самой туду
        2. Если ширина окна больше 980 пх, то расширяем размер туду до (ш980пх - размер боковых кнопок)
        2.1 Если ширина окна меньше 600 -- то кнопки буду сверх и тогда: ширину туду до размера окна, а высоту -- (высота экрана - размер кнопок ) + Если размер меньше 600 -- убираем внешние отступы и убираем скругление всех углов


        3. В конце -- возвращается "select" вместе с объектом. В родителе вызывается из стора метод, которому передается этот объект.
      */
    }
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
.todo__selected {
  // visibility: hidden;
}
.todo {
  padding: 0.25rem;
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
  .todo_body > span > i {
    font-size: 18px;
    color: #9a9faf;
    top: -25%;
    left: -20%;
    transform: rotate(-45deg);
  }
  .todo_head {
    background: linear-gradient(#fff, #fff) content-box,
      linear-gradient(var(--color0), var(--color1)) padding-box,
      linear-gradient(#fff, #dbdbdb) border-box;
  }
}
.todo_head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: inherit;
  border: solid 0.25rem transparent;
  border-radius: 1.5rem;
  padding: 0.25rem;
  margin: -0.5rem;
  background: linear-gradient(#fff, #f1f1f1) content-box,
    linear-gradient(var(--color0), var(--color1)) padding-box,
    linear-gradient(#fff, #dbdbdb) border-box;
  text-align: center;
  color: #18272c;
  text-indent: 1rem;
  clip-path: inset(0 round 1.5rem);
  h2 {
    font-weight: 300;
    margin: 0.1rem;
    padding-bottom: 0.2rem;
  }
}
.todo_head::after {
  position: relative;
  order: -1;

  display: grid;
  place-content: center;
  box-sizing: inherit;
  border: solid 0.5rem transparent;
  border-radius: 50%;
  margin: -0.5rem;
  margin-left: -0.25rem;
  height: 2.5rem;
  width: 2.5rem;
  box-shadow: inset 0 0 1px 1px #efefef, inset 0 1rem grba(#000, 0.1);
  background: linear-gradient(var(--color1), var(--color0)) padding-box,
    linear-gradient(#cecdcd, #fff) border-box;
  color: #e2e8eb;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-indent: 0.05rem;
  content: attr(data-pct);
}
.todo_head::before {
  content: "";
  position: absolute;
  left: -0.25rem;
  top: -0.25rem;
  width: 3rem;
  height: 3rem;
  border-radius: 0.25rem;
  transform: rotate(45deg);
  box-shadow: 0 0 7px rgba(#000, 0.2);
  background: linear-gradient(
    -45deg,
    transparent calc(50% - 1.5rem),
    #e4e4e4 0,
    #fff calc(50% + 1.5rem),
    transparent 0
  );
}

.todo_body {
  line-height: 1.44;
  position: relative;
  padding-top: 1rem;
  li > .task {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
    position: relative;
    // &:last-of-type {
    //   border-bottom: none;
    //   box-shadow: none;
    //   color: teal;
    // }
  }

  li:first-of-type::before > .task {
    content: "йййй";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    z-index: 100;
    border-top: 1px solid #ccc;
    box-shadow: 0 1px 1px rgba(255, 255, 255, 1);
  }
  li:last-of-type > .task {
    border-bottom: none;
    box-shadow: none;
  }
}
.todo_body > span {
  position: absolute;
  right: -2px;
  bottom: -2px;
  line-height: 1;
  border-radius: 50%;
  height: 20px;
  width: 20px;
}
.todo_body > span > i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 14px;
  color: transparent;
  transition: all 0.3s ease;
}
</style>