/*jshint node:true*/
var normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generate a kitten placeholder helper',

  normalizeEntityName: function(entityName) {
    return normalizeEntityName(entityName);
  }

  locals: function(options) {
    // Return custom template variables here.
    return {
      foo: options.entity.options.foo
    };
  }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
