import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component } = Ember;

export default Component.extend({
    classNames: ['post-full'],
    draft: stateFor('post-info', 'model'),

    actions: {
        postComment() {
            // let post = this.get('model');
            // post.get('comments').push(this.get('draft.comment'));
            // post.save();
        }
    }
});