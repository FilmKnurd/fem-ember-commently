import Ember from 'ember';

const { Service, inject } = Ember;

export default Service.extend({
    store: inject.service(),
    loadUserInfo() {
        let cached = this.get('store').peekRecord('user', 'current');
        let p = cached ? resolve(cached) : this.get('store').findRecord('user', 'current');

        return p.then(user => {
            this.set('user', user);
            return user;
        })
        // return this.get('store').peekRecord('user', 'current') ||
        //     this.get('store').findRecord('user', 'current');
    }
});