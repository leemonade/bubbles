module.exports = {
  collectCoverage: false,
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    uuid: require.resolve('uuid'),
    '^swiper/css$': '<rootDir>/___mock___/cssStyleMock.js',
  },
  transform: { '^.+\\.(js|jsx)$': 'babel-jest' },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    '/node_modules/(?!swiper|ssr-window|dom7)',
    '/node_modules/swiper/swiper.min.css',
  ],
};
