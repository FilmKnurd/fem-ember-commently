/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Stew = require('broccoli-stew');
var Filter = require('broccoli-filter');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    function Copywrite(inputNode) {
        Filter.call(this, inputNode);
    };

    Copywrite.prototype = Object.create(Filter.prototype);

    Copywrite.prototype.processString = function(existingString) {
        var copywrite = `/*
         *
         * (c) 2016 Andrew Elster
         * Generated: ${(new Date()).toISOString()}
         */`;

        return copywrite + existingString;
    };

    Copywrite.prototype.extensions = ['js'];
    Copywrite.prototype.target = 'js';

    return new Copywrite(Stew.log(app.toTree()));
};