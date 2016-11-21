'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var cgUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {

    cgUtils.getNameArg(this,args);

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(ComponentGenerator, yeoman.generators.Base);

ComponentGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [];

    cgUtils.addNamePrompt(this,prompts,'component');

    this.prompt(prompts, function (props) {
        if (props.name){
            this.name = props.name;
        }
        cgUtils.askForModuleAndDir('component',this,true,cb);
    }.bind(this));

};

ComponentGenerator.prototype.files = function files() {

    configName = 'componentComplexTemplates';
    defaultDir = 'templates/complex';

    this.htmlPath = path.join(this.dir,this.name + '.html').replace(/\\/g,'/');;

    cgUtils.processTemplates(this.name,this.dir,'component',this,defaultDir,configName,this.module);

};
