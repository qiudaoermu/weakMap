<template>
  <div>
    <el-row :gutter="13">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-col :span="12">
          <el-form-item label="输入框" prop="field101">
            <el-input v-model="formData.field101" placeholder="请输入输入框" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="下拉选择" prop="field103">
            <el-select v-model="formData.field103" placeholder="请选择下拉选择" clearable :style="{width: '100%'}">
              <el-option v-for="(item, index) in field103Options" :key="index" :label="item.label"
                :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="开关" prop="field104" required>
            <el-switch v-model="formData.field104"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field101: undefined,
        field103: undefined,
        field104: false
      },
      rules: {
        field101: [{
          required: true,
          message: '请输入输入框',
          trigger: 'blur'
        }],
        field103: [{
          required: true,
          message: '请选择下拉选择',
          trigger: 'change'
        }]
      },
      field103Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return;
        // TODO 提交表单
      });
    },
    resetForm() {
      this.$refs['elForm'].resetFields();
    }
  }
};

</script>
<style>
</style>
