var Lift = Backbone.Model.extend({
  initialize: function() {
    this.set('done', 0);
  },
  incrementDone: function() {
    this.set('done', this.get('done') + 1);
    if(this.get('done') === this.get('currentSets')) {
      debugger;
      this.trigger('finishLift');
    }
  },
  decrementDone: function() {
    this.set('done', this.get('done') - 1);
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
