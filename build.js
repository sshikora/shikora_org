({
  baseUrl: 'app',
  name: 'js/app',
  dir: 'app-release',
  paths:{ 
    'jquery': 'js/lib/jquery/jquery',
    'underscore': 'js/lib/underscore/underscore',
    'backbone': 'js/lib/backbone/backbone',
    'text': 'js/lib/require/text'
       },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }  
})