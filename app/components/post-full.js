import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component, inject: { service } } = Ember;

export default Component.extend({
    currentUser: service(),

    classNames: ['post-full'],
    draft: stateFor('post-info', 'model'),

    actions: {
        deleteComment(comment) {
            comment.destroyRecord();
        },

        // postComment() {
        //     let post = this.get('model');
        //     let user = this.get('currentUser');
        //     let body = this.get('draft.comment');
        //     let comment = this.store.createRecord({ post, body });

        //     comment.save().then(() => {
        //         this.set('draft.comment', '');
        //     });
        // }
    }
});