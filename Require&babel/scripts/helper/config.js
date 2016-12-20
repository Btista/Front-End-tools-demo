
/** Require.JS manifest
 * lists relative paths and shims for all JS libraries
 * so they can be loaded in a modular way at runtime, on demand
 */
/*requirejs.config({
    'paths': {
          'es6': 'node_modules/requirejs-babel/es6',
        'babel': 'node_modules/requirejs-babel/babel-5.8.34.min'
    }
    
    
});*/
requirejs.config({
    'baseUrl': '',
    config: {
      es6: {
        resolveModuleSource: function(source) {
          return 'es6!'+source;
        }
      }
    },
    paths: {
        es6: '/node_modules/requirejs-babel/es6',
        babel: '/node_modules/requirejs-babel/babel-5.8.34.min'
    }
});