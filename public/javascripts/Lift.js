var Lift = Backbone.Model.extend({
  initialize: function() {
  },
  prUrl: function() {
    return '/pr/' + this.get('_id');
  },
  finishUrl: function() {
    return '/updateDay/';
  },
  saveForLater: function() {
    return '/saveForLater/';
  },
  editUrl: function() {
    return '/edit/' + this.get('_id');
  }

});
