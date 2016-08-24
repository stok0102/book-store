import Ember from 'ember';

export default Ember.Service.extend({
  books: [],

  add(book) {
    this.get('books').pushObject(book);
  },

  remove(book) {
    this.get('books').removeObject(book);
  }
});
