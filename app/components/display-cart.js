import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    remove(book) {
      this.get('shoppingCart').remove(book);
    }
  }
});
