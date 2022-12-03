const MODULES = ['studio', 'game-producer', 'partner', 'provider', 'client'];

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '<root>/tsconfig.json',
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // Just not very convenient, sometimes it's messy
    'import/no-named-as-default-member': 0,
    'import/no-restricted-paths': [
      'error',
      {
        zones: MODULES.map(moduleName => ({
          target: `./src/modules/${moduleName}`,
          from: `./src/modules/`,
          except: [`./${moduleName}`, ...MODULES.map(m => `./${m}/shared.ts`)],
          message: `Module ${moduleName} must not depend on other modules`,
        })),
      },
    ],
  },
};
