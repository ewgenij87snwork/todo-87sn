<template>
  <transition @enter="handleEnter" @leave="handleLeave">
    <div class="todo-detail" v-if="selected" :style="style" @click="unselectTodo">
      <todo :todo="selected.todo" />
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Todo from "./Todo.vue";
export default {
  components: {
    Todo
  },
  computed: {
    ...mapState(["selected", "unselect"]),
    style() {
      return {
        "--left": `${
          this.selected.rect.appWidth > 1100
            ? (this.selected.rect.appWidth - 1100) / 2
            : 0
        }px`,
        "--width": `${this.selected.rect.appWidth > 1100 ? "980px" : "100%"}`
      };
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["unselectTodo"]),
    /* Сделать условия стилизации (размещения) Todo. ... По центру должно быть и справа место под размер кнопок редактирования и при дисплеях <600 -- кнопки редактирования вверху

      
       */
    handleEnter(el) {
      Object.assign(el.style, {
        top: `${this.selected.rect.top}px`,
        left: `${this.selected.rect.left}px`,
        width: `${this.selected.rect.width}px`,
        height: `${this.selected.rect.height}px`
      });
      setTimeout(() => {
        Object.assign(el.style, {
          top: 0,
          // top: `${(this.selected.rect.appHeight - this.selected.rect.height) /
          //   2}px`,
          left: 0,
          width: `${this.selected.rect.appWidth}px`,
          height: `${this.selected.rect.appHeight}px`
        });
      }, 0);
    },
    handleLeave(el) {
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${this.unselect.rect.appWidth}px`,
        height: `${this.unselect.rect.appHeight}px`
      });
      setTimeout(() => {
        Object.assign(el.style, {
          top: `${this.unselect.rect.top}px `,
          left: `${this.unselect.rect.left}px `,
          width: `${this.unselect.rect.width}px `,
          height: `${this.unselect.rect.height}px `
        });
      }, 0);
    }
  }
};
</script>

<style lang="scss">
.todo-detail {
  position: fixed;
  background: #000;

  .todo {
    margin-top: 50vh;
    transform: translateY(-75%);
    margin-left: var(--left);
    width: var(--width);
  }
}
</style>