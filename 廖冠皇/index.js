window.addEventListener("load", indexOnload);
window.addEventListener("scroll", changeIndexClass);

var indexes = document.getElementsByClassName("index");

function indexOnload() {
    for (var i = 0; i < indexes.length; i++) {
        indexes[i].addEventListener("click", function () { scrollToPageN(event) });
    }
}

function scrollToPageN(e) {
    e = event || window.event;
    var pageN = "page" + e.target.id.substr(5);

    document.getElementById(pageN).scrollIntoView({ behavior: 'smooth' });
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