import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  price: DS.attr(),
  publishDate: DS.attr(),
  genre: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  quantity: DS.attr(),

  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.books.[]', function() {
    return this.get('shoppingCart').includes(this);
  })
});,
