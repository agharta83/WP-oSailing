// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^app/,
      'js/vendor.js': /^node_modules/
      // 'js/vendor.js : /¨(?!app)/ arrive au même résultat
    }
  },
  stylesheets: {
    joinTo: {
      'css/app.css': /^app/,
      'css/vendor.css': /^node_modules/
      // 'css/vendor.css : /¨(?!app)/ arrive au même résultat
    }
  }
};

exports.plugins = {
  browserSync: {
    files: ['*']
  }
};

exports.npm = {
  enabled: true,
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
  },
  styles: {
    'normalize.css': ['normalize.css']
  }
};
