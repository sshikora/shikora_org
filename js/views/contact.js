var contactView = contactView || {};

contactView = Backbone.View.extend({

  el: '#contact',
  contactTemplate: Handlebars.compile($("#contact-template").html()),
  events: {},

  initialize: function() {
    this.contact = $('#contact');
    this.render();

  },

  render: function() {

    this.contact.html(this.contactTemplate({}));

  }

  
})