import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  comment: DS.attr(),
  rating: DS.attr(),
  book: DS.belongsTo('book', { async: true}),
});
