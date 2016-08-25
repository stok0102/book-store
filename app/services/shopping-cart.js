import Ember from 'ember';

export default Ember.Service.extend({
  books: [],
  // id: 0,
  currentTotal: 0,
  add(book) {
    // this.set('id', this.get('id')+1);
    // this.get('books').pushObject({book: book, quantity: });


    if (this.books.includes(book)) {
      book.incrementProperty('quantity');
    } else {
      this.get('books').pushObject(book);
      book.quantity = 1;
    }
    // this.total();
  },
  remove(book) {
    this.get('books').removeObject(book);
  }

  // total() {
  //   for (var i = 0; i < this.books.length; i++) {
  //     this.currentTotal += (this.books[i].quantity * this.books[i].price);
  //   }
  // }
});
