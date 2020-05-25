<template>
  <div class="wrap">
    <h1>Page for tests</h1>

    <ul>
      <li>
      



      </li>
      <li>{{bla()}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blaa: 2 + 2
    };
  },

  methods: {
    bla() {
      return this.blaa + 5;
    }
  }
};
</script>
<style>
.wrap {
  margin: 0;
  padding: 0;
  color: #000;
  background-color: #3b9d91;
  height: 100vh;
}
</style>
