import Ember from 'ember';

const { Controller, run: { debounce } } = Ember;

export default Ember.Controller.extend({
    queryParams: ['search'],
    search: '',

    actions: {
        updateSearch(value) {
            console.log(value);
            this.set('search', value ? value : '');
            debounce(this, '_refreshRoute', 300);
        }
    },

    _refreshRoute() {
        this.send('_updateSearch');
    }
});
