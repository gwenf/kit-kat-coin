module.exports = {
  "moduleFileExtensions": [
    "js",
    "vue"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    // '^.+\\.vue$': 'vue-jest',
    // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    // '^.+\\.js$': 'babel-jest'
  },
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}

// {
//   moduleFileExtensions: [
//     'js',
//     'json',
//     'vue'
//   ],
//   transform: {
    // '^.+\\.vue$': 'vue-jest',
    // // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    // // '^.+\\.js$': 'babel-jest'
//   },
//   moduleNameMapper: {
//     // '^@/(.*)$': '<rootDir>/src/$1'
//   },
//   snapshotSerializers: [
//     'jest-serializer-vue'
//   ]
// }
