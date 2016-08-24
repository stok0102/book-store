import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        price: parseFloat(this.get('price')),
        publishDate: this.get('publishDate'),
        genre: this.get('genre'),
        description: this.get('description'),
        image: this.get('image')
      };
    this.sendAction('save', params);
    }
  }
});
