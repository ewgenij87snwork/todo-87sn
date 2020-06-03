<template>
  <transition @enter="handleEnter" @leave="handleLeave">
    <div class="todo-detail" v-if="selected" :style="style">
      <h1 style="color: white; cursor: pointer" @click="unselectTodo">back</h1>
      <todo :todo="selected.todo" :active="true" />
      <div class="buttons">
        <!-- 
          Две категории кнопок: при наведении и отдельные
          1. При наведении:
            - на заголовок -- в конце текста "карандаш". 
              -- При клике -- курсор в конце слова и возможность редактировать (innerText?) и 2 кнопки в той же строчке: вперед, назад и отбивка текста справа на ширину этих кнопок. 
              -- Делается через массив с добавлением слов -- т.е. после каждого пробельного символа занесение элемента массива. 
              -- Если достигнут конец массива -- кнопка "вперед" -- неактивная. 
              -- При потере фокуса: данные остаются и кнопки стают невидимыми
            - на таски -- в конце текста карандаш и корзина
          2. Отдельные кнопки:
            - шаг назад <i class="fas fa-history"></i> или  f1da
            - Save & back -- просто слово?...
            - шаг вперед -- тоже только отзеркаленое
              --после появления тудуДетаил выезжают над самой туду.
              -- при прокрутке вниз на они стают фиксированными к верху экрана
        -->
      </div>
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
        "--width": `${this.selected.rect.appWidth > 1100 ? "980px" : "100%"}`
      };
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["unselectTodo"]),
    handleEnter(el) {
      Object.assign(el.style, {
        top: `${this.selected.rect.top}px`,
        left: `${this.selected.rect.left}px`,
        width: `${this.selected.rect.width}px`
        // height: `${this.selected.rect.height}px`
      });
      setTimeout(() => {
        Object.assign(el.style, {
          top: 0,
          left: 0,
          width: `${this.selected.rect.appWidth}px`
          // height: `${this.selected.rect.appHeight}px`
        });
      }, 0);
    },
    handleLeave(el) {
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${this.unselect.rect.appWidth}px`
        // height: `${this.unselect.rect.appHeight}px`
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
.modal-open {
  overflow: hidden;
}

.todo-detail {
  position: fixed;
  background: #000;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  // Эти два свойсвтва добавляются для мобильных экранов. Когда прокручиваешь вниз и достигаешь конца данный контейнер как бы поднимается вверх и делает видимым todo-list
  bottom: -200px;
  padding-bottom: 200px;

  .todo {
    background: #f7f7f7;
    border-radius: 1.4rem;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    width: var(--width);
    display: flex;
    flex-direction: column;
    height: calc(100% - 2.3rem);
  }
  .todo_head {
    background-color: #fff;
    margin-bottom: 0.25rem;
  }
  .todo_body {
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>