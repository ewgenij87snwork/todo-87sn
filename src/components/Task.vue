<template>
  <div class="task">{{task.title}}</div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object
    }
  }
};
</script>

<style>
</style>