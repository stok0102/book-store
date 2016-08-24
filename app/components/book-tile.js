import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    delete(book) {
      if(confirm("Are you sure you want to delete this book?")) {
        this.sendAction('destroyBook', book);
      }
    },

    addToCart(book) {
      this.get('shoppingCart').add(book);
    }
  }
});
