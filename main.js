(function() {
  "use strict";

  window.onload = function() {
    addInterests();
    writeText("tyler bonnell", "name");
    $("projects").onclick = function() {
      writeText("projects", "projectsTitle")
    }
  }

  function addInterests() {
    var interests = ["making video games", "corgis", "movies", "not finishing projects",
                     "breakfast food", "CS education/outreach"];
    var spots = document.querySelectorAll(".interest");
    for (var i = 0; i < spots.length; i++) {
      var index = Math.floor(Math.random() * interests.length);
      spots[i].innerHTML = interests[index];
      interests.splice(index, 1);
    }
  }

  // Various fields/functions for the "user typing" effect
  var cursorContainer;
  var writeIndex;
  var cursorInterval;
  var writing;
  var headerTimer;
  function writeText(txt, id) {
    if (id == cursorContainer) return;
    if (cursorContainer) {
      $(cursorContainer).innerHTML = writing;
      if (headerTimer) clearInterval(headerTimer);
      clearInterval(cursorInterval);
    }
    cursorContainer = id;
    writing = txt;
    writeIndex = 0;
    headerTimer = setInterval(function() {
      if (writeIndex > txt.length) {
        clearInterval(headerTimer);
        cursorInterval = setInterval(flashCursor, 500);
      } else {
        $(id).innerHTML = txt.substring(0, writeIndex++) + "|";
      }
    }, 90);
  }
  function flashCursor() {
    var s = $(cursorContainer).innerHTML;
    if (s[s.length - 1] == '|') {
      s = s.substring(0, s.length - 1);
    } else {
      s += "|";
    }
    $(cursorContainer).innerHTML = s;
  }

  function $(el) {
    return document.getElementById(el);
  }
})();
