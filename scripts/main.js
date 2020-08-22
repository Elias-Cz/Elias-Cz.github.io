
function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("switch").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "projects.txt", true);
  xhttp.send();
}

function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("switch").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "home_info.txt", true);
  xhttp.send();
}

function loadDoc3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("switch").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "form_info.txt", true);
  xhttp.send();
}
