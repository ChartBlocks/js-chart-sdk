/*! js-charts-sdk 
 * Copyright (c) 2013 ChartBlocks 
 * Licensed under the MIT license.
 * 2014-02-11 */
(function(window, document){
/**
 * 
 * @param  id chart ID
 * @param options
 * @returns chart
 */
var chart = function(id, options) {
    this.initialize.apply(this, arguments);
    return this;
};
/**
 * 
 * @param {type} id
 * @param {type} options
 * @returns chart
 */
chart.prototype.initialize = function(id, options) {
    this.id = id;
    this.options = options;
    return this;
};
/**
 * 
 * @returns chart
 */
chart.prototype.render = function() {
    var options = this.options, target, targets;

    var iframe = this.iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.src = '//embed.chartblocks.com/1.0/?c=' + this.id;
    iframe.width = options.width;
    iframe.height = options.height;

    if ((targets = document.querySelectorAll(options.target))) {
        if (targets.length > 0) {
            target = targets[0];
            target.appendChild(iframe);
        }
    }
    return this;
};
/**
 * 
 * @type @exp;window@pro;CB
 */
var CB = window.CB = {
};

/**
 * 
 * @param {type} id
 * @param {type} options
 * @returns chart
 */

CB.create = function(id, options) {
    return new chart(id, options);
};})(window, document);