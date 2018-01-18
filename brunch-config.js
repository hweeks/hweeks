exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest', 'react']},
  postcss: {
    options: {
      parser: require('postcss-scss'),
    },
    processors: [
      require('autoprefixer')(['last 3 versions'])
    ]
  },
  stylelint: {
    pattern: '^app[\\\/\\\\].*\\\.scss?$'
  }
};

exports.paths = {
  public: './build'
}