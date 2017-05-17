window.addEventListener("DOMContentLoaded", indexOnload);
window.addEventListener("scroll", changeIndexClass);

var indexes = document.getElementsByClassName("index");
var codeIndexes = document.getElementsByClassName("codeIndex");

function indexOnload() {
    for (var i = 0; i < indexes.length; i++) {
        indexes[i].addEventListener("click", function () { scrollToPageN(event) });
    }

    for (var j = 0; j < codeIndexes.length; j++) {
        codeIndexes[j].addEventListener("click", function () { showTxt(event) });
    }
}

function scrollToPageN(e) {
    e = event || window.event;
    var pageN = "page" + e.target.id.substr(5);

    document.getElementById(pageN).scrollIntoView({ behavior: 'smooth' });
}

function showTxt(e) {
    e = event || window.event;
    var Ncode = e.target.id;
    var N = Ncode.substr(1, 1);
    var codeN = "code" + N;
    var txt = "txt/" + Ncode + ".txt";

    document.getElementById(codeN).src = txt;
}

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