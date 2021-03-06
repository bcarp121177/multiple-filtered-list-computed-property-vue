export default {
  data() {
    return {
      data: [
        { id: 1, name: "project1", stage: "stage1" },
        { id: 2, name: "project2", stage: "stage2" }
      ]
    };
  },
  render() {
    // Render the default scoped slot and
    // provide data and method properties
    // via the slot scope.
    return this.$scopedSlots.default({
      data: this.data
    });
  }
};
