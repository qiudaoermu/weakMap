<template>
  <div>
    <input v-model="name"/>
    <Child></Child>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: ""
    };
  },
  components: {
    Child: {
      template: `<div>{{${this.name}}}</div>`
    }
  }
};
</script>

<style>

</style>
