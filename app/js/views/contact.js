define(['backbone', 'text!templates/contact.html'], 

  function( Backbone, contactPage ) {

  var ContactView = Backbone.View.extend({

    el: '#contact',
    contactTemplate: function() {
      // this.contactTemplate = Handlebars.compile(compilePage);
    },

    events: {},

    initialize: function() {
      this.contact = $('#contact');
      debugger;
      this.contactTemplate = Handlebars.compile(contactPage);

      this.render();
    },

    render: function() {
      debugger;
      this.contact.html(this.contactTemplate({}));
    }
  })

  return ContactView;
});
