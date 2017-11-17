'use strict';

(function ($, window, document) {
  /**
   * This is a description for Module object.
   *
   * @namespace Module
   * @author Ultron
   */

  var Module = {

    /**
     * Initialize object
     * @function init
     * @memberof Module
     */

    init: function init() {
      this.cache();
      this.events();
    },


    /**
     * Cache reusable data
     * @function cache
     * @memberof Module
     */

    cache: function cache() {
      this.$win = $(window);
      this.$doc = $(document);
    },


    /**
     * Attach event listeners
     * @function events
     * @memberof Module
     */

    events: function events() {
      var _this = this;

      this.$doc.on('click.ui.custom_namespace', '.js-trigger', function (event) {
        return _this.myClickHandler(event);
      });

      this.$doc.on('resize.ui.custom_namespace', function (event) {
        return _this.myResizeHandler(event);
      });
    },


    /**
     * Handle click event
     * @function myClickHandler
     * @memberof Module
     */

    myClickHandler: function myClickHandler() {
      console.log('Click handler'); // eslint-disable-line
    },


    /**
     * Handle `window` resize event
     * @function myResizeHandler
     * @memberof Module
     */

    myResizeHandler: function myResizeHandler() {
      console.log('Resize handler'); // eslint-disable-line
    }
  };

  Module.init();
})(jQuery, window, document);