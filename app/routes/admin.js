import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newBook = this.store.createRecord('book', params);
      newBook.save();
      this.transitionTo('index');
    }
  }
});
