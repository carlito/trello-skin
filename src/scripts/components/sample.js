// ==UserScript==
// @name         Trello Skin
// @namespace    http://carlito.me
// @version      0.1
// @description  A skin for Trello.
// @author       Carlos
// @match        https://trello.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  var cssId = 'TrelloSkin';

  if (!document.getElementById(cssId))
  {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githubusercontent.com/carlito/trello-skin/master/build/styles/main.min.css';
    link.media = 'all';
    head.appendChild(link);
  }
})();
