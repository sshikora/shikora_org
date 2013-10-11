
require.config({
  baseUrl:"js",
  paths:{ 
    'jquery': 'lib/jquery/jquery',
    'underscore': 'lib/underscore/underscore',
    'backbone': 'lib/backbone/backbone'
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
});

require([
  "jquery",
  "views/contact"
  ],

  function($, ContactView){
    $(function() {
      new ContactView();
    });
  }
);