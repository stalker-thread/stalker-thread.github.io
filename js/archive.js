document.addEventListener("DOMContentLoaded", function(){
  var table = document.getElementsByTagName('table')[0];
  var curLink = table.rows[table.rows.length - 1].cells[3].children[0].href;
  var prevLink = table.rows[table.rows.length - 2].cells[3].children[0].href;

  var redirect = function () {
    console.log(window.location.hash);
    switch (window.location.hash) {
      case "#current":
        console.log('current');
        window.location.replace(curLink);
        break;
      case "#previous":
        console.log('previous');
        window.location.replace(prevLink);
        break;
      default:
        break;
    }
  };

  window.addEventListener("hashchange", redirect);
  redirect();

  var bodies = table.tBodies;
  var yearLinks = document.getElementsByClassName("year-link");
  for (var i = 0; i < bodies.length; i++) {
    yearLinks[i].text = yearLinks[i].text + " (" + bodies[i].rows.length + ")";
  }
});
