import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap() {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(45.523225, -122.681453),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }
});
