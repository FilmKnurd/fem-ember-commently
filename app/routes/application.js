// app/routes/application.js
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { default as math, PI } from 'math';

const { Route, inject, getOwner } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  beforeModel() {
    //   console.log(math.sqrt(4));
    //   console.log(PI);
  },
  setupController(controller) {
    this._super(...arguments);

    let instance = Ember.getOwner(this);

    controller.set('pos', instance.lookup('data:location'));
    controller.set('ua', instance.lookup('data:request').userAgent);
  },

    session: inject.service(),
    currentUser: inject.service(),
    actions: {
        logout() {
            this.get('session').invalidate();
        }
    },
    beforeModel() {
        this._super(...arguments);
        console.log(math, PI);
        if (this.get('session.isAuthenticated')) {
            return this.get('currentUser').loadUserInfo();
        }
    },
    setupController(controller) {
        this._super(...arguments);
        let locObj = getOwner(this).lookup('data:location');
        let reqObj = getOwner(this).lookup('data:request');
        controller.set('loc', locObj);
        controller.set('req', reqObj);
    }
});
