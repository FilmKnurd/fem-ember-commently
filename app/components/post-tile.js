import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';


const { Component } = Ember;

export default Component.extend({
    classNames: ['post-tile'],
    classNameBindings: ['hasDraft'],
    draft: stateFor('post-info', 'model'),

    hasDraft: Ember.computed.bool('draft.comment')
});