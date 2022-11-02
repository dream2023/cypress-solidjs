module.exports = {
  'viewportWidth': 400,
  'viewportHeight': 400,
  'video': false,
  'experimentalFetchPolyfill': true,
  'component': {
    'excludeSpecPattern': [
      '**/__snapshots__/*',
      '**/__image_snapshots__/*',
      'examples/**/*',
    ],
    devServer: {
      bundler: 'vite',
    },
  },
}
