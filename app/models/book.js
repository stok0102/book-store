import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  price: DS.attr(),
  publishDate: DS.attr(),
  genre: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  feedbacks: DS.hasMany('feedback', { async: true }),

  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.books.[]', function() {
    return this.get('shoppingCart').includes(this);
  })
});
