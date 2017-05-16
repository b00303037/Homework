// index
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

// hw01

// hw02

// hw03

// hw04

// hw05
window.addEventListener("load", hw05Onload);

var selects = document.getElementsByTagName("select");

function hw05Onload() {
    createYearOption();
    createMonthOption();
    createDateOption();
    showInfo();

    document.getElementById("year").addEventListener("change", createDateOption);
    document.getElementById("month").addEventListener("change", createDateOption);

    for (var i = 0; i < selects.length; i++) {
        selects[i].addEventListener("change", showInfo);
    }
}

var minYear = 2010,
	maxYear = 2020;

function createYearOption() {
    var years = "";

    for (var i = minYear; i <= maxYear; i++) {
        years = years.concat("<option>" + i + "</option>");
    }

    document.getElementById("year").innerHTML = years;
}

function createMonthOption() {
    var months = "";

    for (var i = 1; i <= 12; i++) {
        months = months.concat("<option>" + i + "</option>");
    }

    document.getElementById("month").innerHTML = months;
}

function createDateOption() {
    var yearValue = document.getElementById("year").value;
    var monthValue = document.getElementById("month").value;

    var dates = checkDates(yearValue, monthValue);
    document.getElementById("date").innerHTML = dates;
}

function checkDates(yearValue, monthValue) {
    var dates = "";
    for (var i = 1; i <= 28; i++) {
        dates = dates.concat("<option>" + i + "</option>");
    }

    if (monthValue == 2 && (yearValue % 4 != 0 || (yearValue % 100 == 0 && yearValue % 400 != 0))) { return dates; }
    dates = dates.concat("<option>29</option>");
    if (monthValue == 2 && (yearValue % 400 == 0 || (yearValue % 4 == 0 && yearValue % 100 != 0))) { return dates; }
    dates = dates.concat("<option>30</option>");
    if (monthValue == 4 || monthValue == 6 || monthValue == 9 || monthValue == 11) { return dates; }
    return dates.concat("<option>31</option>");
}

function showInfo() {
    var yearValue = document.getElementById("year").value;
    var monthValue = document.getElementById("month").value;
    var dateValue = document.getElementById("date").value;

    document.getElementById("info").innerHTML = "您選擇的日期是: " + yearValue + " 年 " + monthValue + " 月 " + dateValue + " 日";
}