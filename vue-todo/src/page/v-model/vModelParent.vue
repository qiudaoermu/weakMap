<template>
  <div>
    <PersonalInfo v-model="phoneInfo"  />
    phoneInfo： {{ phoneInfo }}
    <br />
  </div>
</template>
<script>
import PersonalInfo from "./vModelChild.vue";
export default {
  components: {
    PersonalInfo
  },
  data() {
    return {
      phoneInfo: "1"
    };
  }
};
</script>
