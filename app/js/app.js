
require.config({
  baseUrl:"app",
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
});

require([
  "jquery",
  "js/views/contact"
  ],

  function($, ContactView){
    $(function() {
      new ContactView();
    });
  }
);