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
};