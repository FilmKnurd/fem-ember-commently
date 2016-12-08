import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { default as math, PI } from 'math';

const { Route, inject } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  beforeModel() {
      console.log(math.sqrt(4));
      console.log(PI);
  },
  setupController(controller) {
    this._super(...arguments);

    let instance = Ember.getOwner(this);

    controller.set('pos', instance.lookup('data:location'));
  },

    session: inject.service(),
    actions: {
        logout() {
            this.get('session').invalidate();
        }
    }
});
