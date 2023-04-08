export default {
  extensionsToTreatAsEsm: ['.jsx'],
  moduleNameMapper: { '^.+\\.css$': '<rootDir>/test/style-mock.js' },
  setupFilesAfterEnv: ['./test/jest-setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}