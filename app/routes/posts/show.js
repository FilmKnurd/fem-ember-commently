import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Route, inject } = Ember;

export default Route.extend({
    currentUser: inject.service(),
    draft: stateFor('post-info', 'currentModel'),

    model({ id }) {
        return this.store.findRecord('post', id);
    },

    actions: {
        postComment(post, body) {
            alert(body);
            let author = this.get('currentUser.user');
            let comment = this.store.createRecord('comment', { author, post, body });

            comment.save().then(() => {
                let draft = stateFor('post-info', post);
                draft.set('comment', '');
            });
        }
    }
});