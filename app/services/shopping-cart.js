import Ember from 'ember';

export default Ember.Service.extend({
  books: [],
  // id: 0,
  currentTotal: 0,
  add(book) {
    // this.set('id', this.get('id')+1);
    // this.get('books').pushObject({book: book, quantity: });


    if (this.books.includes(book)) {
      console.log('in cart');
      book.quantity += 1;
      console.log(book.quantity);
    } else {
      console.log('empty');
      this.get('books').pushObject(book);
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
