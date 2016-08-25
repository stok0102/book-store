import Ember from 'ember';

export default Ember.Component.extend({
  addNewFeedback: false,
  actions: {
    showFeedbackForm() {
      this.set('addNewFeedback', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        comment: this.get('comment'),
        rating: this.get('rating'),
        book: this.get('book')
      };
      this.set('addNewFeedback', false);
      this.sendAction('save', params);
    }
  }
});
