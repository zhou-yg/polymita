/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['./components/**.ts'],
  testMatch: ['**/__test__/*/*.test.ts'],
  modulePathIgnorePatterns: ['/node_modules/', '/dist/', '/mocks/'],
};
