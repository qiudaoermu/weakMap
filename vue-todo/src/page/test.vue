<template>
    <div>
        <button @click.prevent="submit">
            button
        </button>
    </div>
</template>
<script>
export default {
  methods: {
    submit() {
      console.log("submit");
    }
  }
};
</script>
<style>
</style>
