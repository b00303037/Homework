window.addEventListener("DOMContentLoaded", indexOnload);
window.addEventListener("scroll", changeIndexClass);

var indexes = document.getElementsByClassName("index");
var htmlClass = document.getElementsByClassName("html");
var cssClass = document.getElementsByClassName("css");
var javascriptClass = document.getElementsByClassName("javascript");

function indexOnload() {
    for (var i = 0; i < indexes.length; i++) {
        indexes[i].addEventListener("click", function () { scrollToPageN(event) });
    }

    for (var j = 0; j < htmlClass.length; j++) {
        htmlClass[j].addEventListener("click", function () { showTxt(event) });
    }
}

function scrollToPageN(e) {
    e = event || window.event;
    var pageN = "page" + e.target.id.substr(5);

    document.getElementById(pageN).scrollIntoView({ behavior: 'smooth' });
}

/*
function showTxt(e) {
    e = event || window.event;
    var codeN = "code" + e.currentTarget.id.substr(6);
    alert(e.currentTarget);
}
*/

function changeIndexClass() {
    for (var i = 1; i <= 5; i++) {
        var min = 900 + 988 * (i - 1), max = 900 + 988 * i;
        var indexN = "index" + i;
        if ((document.body.scrollTop >= min && document.body.scrollTop < max) ||
            (document.documentElement.scrollTop >= min && document.body.scrollTop < max)) {
            document.getElementById(indexN).className = "indexOn";
        } else {
            document.getElementById(indexN).className = "index";
        }
    }
}