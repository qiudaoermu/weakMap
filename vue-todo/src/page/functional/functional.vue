<template>
  <div id="app">
    <List :items="['Wonderwoman', 'Ironman']" :item-click="item => (clicked = item)"
    />
    <p>Clicked hero: {{ clicked }}</p>
  </div>
</template>
<script>
import List from "./functional-child.vue";

export default {
  name: "App",
  data: () => ({ clicked: "" }),
  components: { List }
};
</script>
