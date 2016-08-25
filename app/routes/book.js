import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('book', params.book_id);
  },

  actions: {
    save(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      var book = params.book;
      book.get('feedbacks').addObject(newFeedback);
      newFeedback.save().then(function () {
        return book.save();
      });
      this.transitionTo('book', params.book);
    }
  }
});
