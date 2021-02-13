document.addEventListener("DOMContentLoaded", function(){
  var table = document.getElementsByTagName('table')[0];
  var lastTr = table.rows[table.rows.length - 1];
  var link = lastTr.cells[3].children[0].href;

  var latestLink = document.getElementById('latest_link');
  latestLink.href = link;
  latestLink.text = link;

  var bodies = table.tBodies;
  var yearLinks = document.getElementsByClassName('year-link');
  for (var i = 0; i < bodies.length; i++) {
    yearLinks[i].text = yearLinks[i].text + " (" + bodies[i].rows.length + ")";
  }
});
