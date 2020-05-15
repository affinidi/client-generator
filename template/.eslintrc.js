module.exports = {
  rules: {
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/consistent-type-assertions': ['off'],
    '@typescript-eslint/consistent-type-assertions': ['off'],
    '@typescript-eslint/interface-name-prefix': [
      'off',
      {
        prefixWithI: 'always',
      },
    ],
    '@typescript-eslint/no-namespace': ['off', {allowDeclarations: false, allowDefinitionFiles: false}],
  },
}
