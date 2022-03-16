module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // 'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },
      "multiline": {
        "max": 1
      }
    }],
    // 单行属性时，不换行
    "vue/first-attribute-linebreak": ['error', {
      "singleline": "beside"
    }],
    "semi": ["error", "never"],
    "arrow-parens": ["error", "always"], // 箭头函数必须括号
    "vue/comment-directive": "off", // 去掉html的检测
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
