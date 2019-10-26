<template>
  <div>
    <input
      :value="phoneInfo"
      type="number"
      placeholder="手机号"
      @input="handlePhoneChange"
    />
  </div>
</template>
<script>
export default {
  name: "PersonalInfo",
  model: {
    prop: "phoneInfo", // 默认 value
    event: "change" // 默认 input
  },
  props: {
    phoneInfo: String
  },
  methods: {
    handlePhoneChange(e) {
      this.$emit("change", e.target.value);
    }
  }
};
</script>
