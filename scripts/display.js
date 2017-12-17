var titleMainTable = document.getElementById("nameOfTeam");
var fieldset = document.getElementById("tableInFilter");
var bodyMainTable = document.getElementsByTagName("tbody")[2];
var bodyPopupTable = document.getElementsByTagName("tbody")[3];
var theadPopupTable = document.getElementById("popupThead");
var footPopupTable = document.getElementById("popupFoot");
var mainTable = document.getElementById("dataTable");
var headers = document.getElementsByClassName("header");
var filter = document.getElementsByTagName("legend")[0];


function hideFieldset() {
  fieldset.style.display = "none";
  filter.innerHTML = "+ Filter";
}

function showFieldset() {
  fieldset.style.display = "block";
  filter.innerHTML = "- Filter";
}


function hideMainTable() {
  mainTable.style.display = "none";
}

function showMainTable() {
  titleMainTable.innerHTML = selectedTeam + " " + selectedYear;
  mainTable.style.display = "block";
}

/**
 * Clear table.
 * Set data in main table DOM for specific employees
 * @param {Object[]} array - employees data
 */
function readMainTable(array) {
  bodyMainTable.innerHTML = "";
  var rowClass;
  for (var i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      rowClass = "tr-data"
    } else {
      rowClass = "tr-data even"
    }
    bodyMainTable.innerHTML += "<tr class = \"" + rowClass + "\"><th scope=\"row\" class=\"headerRow\">" + array[i].name + "</th><td class = \"call_modal\">" + array[i].sumPerMonth[0] + "</td><td class = \"call_modal\">" +
      array[i].sumPerMonth[1] + "</td><td class = \"call_modal\">" + array[i].sumPerMonth[2] + "</td><td class = \"call_modal\">" + array[i].sumPerMonth[3] + "</td><td class = \"call_modal\">" + array[i].sumPerMonth[4] +
      "</td><td class = \"call_modal\">" + array[i].sumPerMonth[5] + "</td><td class = \"call_modal\">" + array[i].sumPerMonth[6] + "</td><td class = \"call_modal\">" + array[i].sumPerMonth[7] + "</td><td class = \"call_modal\">" +
      array[i].sumPerMonth[8] + "</td><td class = \"call_modal\">" + array[i].sumPerMonth[9] + "</td><td class = \"call_modal\">" + array[i].sumPerMonth[10] + "</td><td class = \"call_modal\">" + array[i].sumPerMonth[11] + "</td></tr>";
  }
}



/**
 * Clear table.
 * Set data in popup DOM for selected employee and month.
 * @param {Object[]} array - employee data
 */
function readPopup(array) {
  var rowClass;
  var numOfProjectsInMonth = array[0].years[0].monthsYear[selectedMonth].projectsMonth.length;
  bodyPopupTable.innerHTML = "";
  theadPopupTable.innerHTML = "";
  footPopupTable.innerHTML = "";

  readPopupHead();

  bodyPopupTable.innerHTML += "<tr class =\"tr-data-projects\"><th scope=\"row\" class=\"headerRow\">" + "Availabe" + "</th><td contenteditable=\"true\">" + array[0].years[0].monthsYear[selectedMonth].available[0] + "</td><td contenteditable=\"true\">" + array[0].years[0].monthsYear[selectedMonth].available[1] + "</td><td contenteditable=\"true\">" +
    array[0].years[0].monthsYear[selectedMonth].available[2] + "</td><td contenteditable=\"true\">" + array[0].years[0].monthsYear[selectedMonth].available[3] + "</td>" + ((mondaysInMonth[4] != null) ? ("<td contenteditable=\"true\">" + array[0].years[0].monthsYear[selectedMonth].available[4] + "</td></tr>") : ("</tr>"))

  for (var p = 0; p < numOfProjectsInMonth; p++) {
    if (p % 2 == 0) {
      rowClass = "tr-data-projects even"
    } else {
      rowClass = "tr-data-projects"
    }
    bodyPopupTable.innerHTML += "<tr class =\"" + rowClass + "\"><th scope=\"row\" class=\"headerRow\">" + array[0].years[0].monthsYear[selectedMonth].projectsMonth[p].name + "</th><td contenteditable=\"true\">" + array[0].years[0].monthsYear[selectedMonth].projectsMonth[p].projectWeeks[0] + "</td><td contenteditable=\"true\">" + array[0].years[0].monthsYear[selectedMonth].projectsMonth[p].projectWeeks[1] +
      "</td><td contenteditable=\"true\">" + array[0].years[0].monthsYear[selectedMonth].projectsMonth[p].projectWeeks[2] + "</td><td contenteditable=\"true\">" + array[0].years[0].monthsYear[selectedMonth].projectsMonth[p].projectWeeks[3] + "</td>" + ((mondaysInMonth[4] != null) ? ("<td contenteditable=\"true\">" + array[0].years[0].monthsYear[selectedMonth].projectsMonth[p].projectWeeks[4] + "</td></tr>") : ("</tr>"))
  }
  readPopupFoot();
}


function readPopupHead() {
  theadPopupTable.innerHTML += "<tr class=\"head\"><th id = \"employeeName\" colspan=\"13\">" + selectedMonthText + " " + selectedYear + " (" + selectedEmployee + ") " + "</th></tr><tr class=\"even\"><th scope=\"col\" class=\"header\">" + "Project(s)" + "</th>" +
    "<th scope=\"col\" class=\"header\">" + mondaysInMonth[0] + "</th><th scope=\"col\" class=\"header\">" + mondaysInMonth[1] + "</th><th scope=\"col\" class=\"header\">" + mondaysInMonth[2] + "</th><th scope=\"col\" class=\"header\">" + mondaysInMonth[3] + "</th>" + ((mondaysInMonth[4] != null) ? ("<th scope=\"col\" class=\"header\">" + mondaysInMonth[4] + "</th></tr>") : ("</tr>"))
}


function readPopupFoot() {
  footPopupTable.innerHTML += "<th scope=\"row\" class=\"headerRow\" id = \"total\">" + "Utilization:" + "</th><td class = \"total-td-projects\"></td></th><td class = \"total-td-projects\"></td></th><td class = \"total-td-projects\"></td></th><td class = \"total-td-projects\"></td>" + ((mondaysInMonth[4] != null) ? ("<td class = \"total-td-projects\"></td></tr>") : ("</tr>"))
}


/**
 * Call modal when one of the cells on main table is clicked.
 * Close when space around modal is clicked.
 */
function displayPopupTable() {
  $(document).ready(function() {
    $(".call_modal").click(function() {
      $(".modal").fadeIn();
      $(".modal_main").show();
    });
  });
  $(document).ready(function() {
    $(".close").click(function() {
      $(".modal").fadeOut();
      $(".modal_main").fadeOut();
    });
  });
}
