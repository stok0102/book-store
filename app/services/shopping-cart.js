import Ember from 'ember';

export default Ember.Service.extend({
  books: [],
  currentTotal: 0,
  add(book) {
    if (book.inCart) {
      console.log('in cart');
      this.set('book.quantity', 2);
    } else {
      this.get('books').pushObject(book);
      console.log('empty');
      book.quantity = 1;
    }
  },
  remove(book) {
    this.get('books').removeObject(book);
  },

  includes(book) {
    return this.get('books').includes(book);
  }
});
