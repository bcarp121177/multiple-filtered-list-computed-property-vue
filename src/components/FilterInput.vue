<template>
  <div class="hello">
    <select v-model="select">
      <option v-for="(stage, index) in stages" :key="index" :value="stage">{{stage}}</option>
    </select>
    <br>
    <input type="text" v-model="search">
    <slot name="item" :data="filterProjects"></slot>
  </div>
</template>

<script>
export default {
  name: "FilterInput",
  data() {
    return {
      search: "",
      select: "",
      stages: ["Stage1", "Stage2"]
    };
  },
  props: {
    projects: Array
  },
  computed: {
    filterProjects: function() {
      let filtered = this.projects;
      if (this.search) {
        filtered = this.projects.filter(
          p => p.name.toLowerCase().indexOf(this.search) > -1
        );
      }
      if (this.select) {
        filtered = filtered.filter(
          p => p.stage.toLowerCase() === this.select.toLowerCase()
        );
      }
      return filtered;
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
