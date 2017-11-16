/*
 * grunt-angular-protractor
 * https://github.com/software-engineering/grunt-angular-protractor
 *
 * Copyright (c) 2015 it-schaedler
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {
    var UNDEFINED;

    function specArray(str){
      var pre = '../';
      var arr = str.split(',');
      var res = (pre + arr.join(';' + pre)).split(';');
      return res;
    };

    // Project configuration.
    grunt.initConfig({
        // Configuration to be run (and then tested).
        angular_protractor: {
            task1: {
                //D:\NodeJS\Protractor\config\config_grunt.js
                configFile: path.join(__dirname, 'config', 'config_grunt.js'),
                options: {
                    params :{ 
                     
                    },
                    capabilities: {
                        browserName: grunt.option('browser') === UNDEFINED ? 'chrome' : grunt.option('browser'),
                        shardTestFiles: true,
                        maxInstances: grunt.option('instances') === UNDEFINED ? 1 : grunt.option('instances')
                    },
                    specs: specArray(grunt.option('testspec')),
                    framework: 'jasmine2',
                },
                dest: path.join(__dirname, 'build', 'task1-config.js')
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks(path.join(__dirname, 'config', 'tasks'));
    grunt.registerTask('test', ['angular_protractor']);
};
