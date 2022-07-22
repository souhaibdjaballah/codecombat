module.exports = {
  plugins: ['@babel'],
  extends: [
    'standard',
    'plugin:vue/recommended',
    'plugin:diff/diff'
  ],

  globals: {
    Vue: 'readonly',
    application: 'readonly',
    me: 'readonly',
    noty: 'readonly'
  },

  env: {
    browser: true,
    es2022: true
  },

  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },

  rules: {
    'vue/script-indent': ['warn', 2, {
      baseIndent: 0,
      switchCase: 0,
      ignores: []
    }]
  },

  overrides: [
    // Disable indent in .vue files - this will be handled by vue/script-indent
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
