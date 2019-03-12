const configs = require('@bluebase/code-standards/jest.config');

module.exports = Object.assign(configs, {
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.stories.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!**/__stories__/**',
    '!**/components/**',
  ],
});