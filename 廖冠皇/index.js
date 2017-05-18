window.addEventListener("load", indexOnload);
window.addEventListener("scroll", changeIndexClass);

var indexes = document.getElementsByClassName("index");
var codeIndexes = document.getElementsByClassName("codeIndex");
var htmls = document.getElementsByClassName("html");

function indexOnload() {
    changeIndexClass();

    for (var i = 0; i < indexes.length; i++) {
        indexes[i].addEventListener("click", function () { runScroll(event) });
    }

    for (var j = 0; j < codeIndexes.length; j++) {
        codeIndexes[j].addEventListener("click", function () { showTxt(event) });
    }

    for (var k = 0; k < htmls.length; k++) {
        var codeN = "code" + (k + 1);
        var txt = "txt/0" + (k + 1) + "_html.txt";
        document.getElementById(codeN).src = txt;
    }
}

function runScroll(e) {
    e = event || window.event;
    var N = e.target.id.substr(5);
    
    scrollTo(document.body, 988 * N, 300);
}

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop == to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
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
    for (var i = 0; i <= 5; i++) {
        var min = 900 + 988 * (i - 1), max = 900 + 988 * i;
        if (i == 0) { min += 88; max += 88; }
        var indexN = "index" + i;
        if ((document.body.scrollTop >= min && document.body.scrollTop < max) ||
            (document.documentElement.scrollTop >= min && document.body.scrollTop < max)) {
            document.getElementById(indexN).classList.add("indexOn");
        } else {
            document.getElementById(indexN).classList.remove("indexOn");
        }
    }
}