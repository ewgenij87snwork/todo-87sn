<template>
  <transition name="fade">
    <div class="task" v-if="!task.deleted">
      <input :id="id" type="checkbox" v-model="task.done" />
      <label :for="id" :style="style">{{task.title}}</label>
      <!-- 
        Auso! 
        - Сделать чтобы вмещалось выбранное туду по высоте
        - Настроить редактирование по нажатию на заголовок или на карандаш. Возможно во vue это делается как-то через v-model или аналог InnerText
        - Связать редактирование с созданием массива по отдельно взятому пункту... Массив-буффер: конечный результат записывает в: 1.html; 2.state; 3.localStorage
      -->
      <div class="task-buttons_wrap">
        <span class="task-buttons" v-show="selected">
          <i class="fas fa-pencil-alt"></i>
        </span>
        <span class="task-buttons" v-show="selected">
          <i class="fas fa-reply"></i>
        </span>
        <transition name="fade">
          <span class="task-buttons" v-show="task.done && selected" @click="deleteTask({ task })">
            <i class="fa fa-trash"></i>
          </span>
        </transition>
        <span class="task-buttons" v-show="selected">
          <i class="fas fa-share"></i>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";
let gId = 1;
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: `task-${gId++}`
    };
  },
  computed: {
    ...mapState(["selected"]),
    style() {
      return { "--selected": this.selected ? "inline-block" : "none" };
    }
  },
  methods: {
    ...mapMutations(["deleteTask"])
  }
};
</script>

<style lang='scss'>
.task {
  display: flex;
  padding: 12px 0;
  font-size: 16px;
}
.task input {
  display: none;
}
.task label {
  flex: 1;
  line-height: 20px;
}
.task label:before,
.task label:after {
  content: "";
  display: var(--selected);
  margin-right: 20px;
  margin-top: 1px;
  height: 16px;
  width: 16px;
  vertical-align: top;
}
.task label:before {
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
}
.task label:after {
  font: normal normal normal 11px/1 "Font Awesome 5 Free";
  content: "\f00c";
  font-weight: 900;
  position: absolute;
  top: 8px;
  left: 16px;
  display: none;
  margin-right: -18px;

  width: 10px;
  height: 10px;
  padding: 4px;
  border-radius: 5px;
  color: #fff;
  background-color: #ccc;
  float: left;
}
.task input:checked + label:after {
  display: var(--selected);
}
.task input:checked + label {
  color: #9796a0;
}
.task-buttons {
  display: var(--selected);
  padding: 0 10px;
  color: #ccc;
  font-size: 16px;
  line-height: 1;
  transition: all 0.2s ease;
}
.task-buttons:hover {
  color: #6d6d6d;
}
.task-buttons:active {
  transform: scale(0.85);
  color: #222;
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

@media (max-width: 500px) {
  .task-buttons_wrap {
    display: flex;
    flex-direction: column;
    .task-buttons {
      font-size: 1.2rem;
      padding: 0.5rem;
      margin: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 50%;
      background: #fff;
    }
  }
}
</style>