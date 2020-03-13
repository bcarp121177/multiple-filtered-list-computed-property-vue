<template>
  <div>
    <ul v-for="project in data" :key="project.id">
      <li>{{project.name}}</li>
      <li>{{project.stage}}</li>
    </ul>
    <h3>Showing child {{data}}</h3>
  </div>
</template>

<script>
export default {
  name: "ProjecList",
  data() {
    return {
      search: "",
      select: "",
      stages: ["Stage1", "Stage2"]
    };
  },
  props: ["data"]
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
