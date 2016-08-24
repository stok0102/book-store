import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },
  actions: {
    save(params) {
      var newBook = this.store.createRecord('book', params);
      newBook.save();
      this.transitionTo('index');
    },
    update(book, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          book.set(key,params[key]);
          console.log(params[key]);
        }
      });
      book.save();
      this.transitionTo('admin');
    },
    destroyBook(book) {
      book.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
