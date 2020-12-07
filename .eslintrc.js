module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['html'],
  extends: [
    'plugin:vue/essential', '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止修改const声明的变量
    'no-const-assign': 2,
    // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-keys': 2,
    // 函数参数不能重复
    'no-dupe-args': 2,
    // 语句强制分号结尾
    semi: ['error', 'always'],
    // 禁止使用console
    'no-console': 'off',
    // 在函数定义中，括号之前，要执行一致的间距
    // 'space-before-function-parentheses': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never'
      }
    ],
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true
      }
    ],
    // 大括号{}间空格
    'object-curly-spacing': ['error', 'never']
  }
};
