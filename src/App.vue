<template>
  <div>
    <div>
      <data-list>
        <div slot-scope="{ data: projects }">
          <filter-input :projects="projects">
            <template slot="item" scope="props">
              <project-list :data="props.data"></project-list>
            </template>
          </filter-input>
        </div>
      </data-list>
    </div>
  </div>
</template>

<script>
import DataList from "./components/DataList";
import FilterInput from "./components/FilterInput";
import ProjectList from "./components/ProjectList";

export default {
  name: `Project`,
  components: {
    DataList,
    FilterInput,
    ProjectList
  }
};
</script>
<style></style>
