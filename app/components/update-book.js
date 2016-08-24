import Ember from 'ember';

export default Ember.Component.extend({
  updateBookForm: false,
  actions: {
    updateBookForm() {
      this.set('updateBookForm', true);
    },

    update(book) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        price: this.get('price'),
        publishDate: this.get('publishDate'),
        genre: this.get('genre'),
        description: this.get('description'),
        image: this.get('image')
      };
      this.set('updateBookForm', false);
      this.sendAction('update', book, params);
    }
  }
});
