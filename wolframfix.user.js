// ==UserScript
// @name        Wolfram Alpha fix
// @namespace   fuckwolfram
// @description copy plaintext representations from WA
// @include http://www.wolframalpha.tld/*
// @include http://wolframalpha.tld/*
// ==/UserScript==

//remove class attribute from textfields with plaintext data that prevents highlighting
window.addEventListener('DOMNodeInserted', function(e) {
  var preList = document.getElementsByTagName('pre');
  for (var i = 0; i < preList.length; i++) {
    var item = preList[i];
    if (item.className == 'disabled') {
      item.removeAttribute('class');
    }
  }
}, false);
