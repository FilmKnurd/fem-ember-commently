import Ember from 'ember';

const { Controller, run: { debounce } } = Ember;

export default Ember.Controller.extend({
    queryParams: ['search'],
    search: '',

    actions: {
        // postComment(post, body) {
        //     let author = this.get('currentUser');
        //     let comment = this.store.createRecord({ author, post, body });

        //     comment.save().then(() => {
        //         this.set('draft.comment', '');
        //     });
        // },

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
