<template>
  <transition name="fade">
    <div class="task" v-if="!task.deleted">
      <input :id="id" type="checkbox" v-model="task.done" />
      <label :for="id" :style="style">{{task.title}}</label>
      <transition name="fade">
        <span class="task_delete" v-show="task.done && selected" @click="deleteTask({ task })">
          <i class="fa fa-trash"></i>
        </span>
      </transition>
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
  content: "\f00c";
  position: relative;
  display: none;
  margin-right: -18px;
  width: 10px;
  height: 10px;
  padding: 4px;
  border-radius: 5px;
  font: normal normal normal 11px/1 FontAwesome;
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
.task_delete {
  display: var(--selected);
  padding: 0 10px;
  color: #ccc;
  font-size: 16px;
  line-height: 1;
}
.task_delete:active {
  transform: scale(1.3);
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
</style>