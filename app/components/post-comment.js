import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component } = Ember;

export default Component.extend({
    classNames: ['post-comment'],
    isEditing: false,

    saveComment: task(function * (comment) {
        yield comment.save().then(() => {
            this.set('isEditing', false)
        });
    }),

    actions: {
        edit() {
            this.set('isEditing', true);
        },

        save(comment) {
            this.performTask('saveComment')
        }
    }
});