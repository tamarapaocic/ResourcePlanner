var selectedYear;
var selectedTeam;
var selectedEmployee;
var selectedMonth;
var selectedMonthText;
var mondaysInMonth;
var specificData;
var dataForPopup;
var updatedEmployees;


function getSelectedTeam() {
  selectedTeam = selectTeam.options[selectTeam.selectedIndex].text;
}

function getSelectedYear() {
  selectedYear = selectYear.options[selectYear.selectedIndex].text;
}


/**
 * Show/hide select boxes and button on clicking on Filter
 */
function toggleFieldset() {
  if (filter.innerHTML == '+ Filter' && fieldset.style.display === "none") {
    showFieldset();
  } else if (filter.innerHTML == '- Filter') {
    hideFieldset();
  }
}

/**
 * Get appropriate employees data
 * Generate the main table
 * Display table
 */
function setMain() {
  hideFieldset();

  // Get all emyployees from local storage if they were updated earlier
  updatedEmployees = JSON.parse(localStorage.getItem("updatedMainTable"));

  // If running application first time use employees data or use updatedEmployees if some changes were already made
  if (updatedEmployees == null || typeof updatedEmployees == undefined) {
    renderMainTable(employees);
  } else {
    renderMainTable(updatedEmployees);
  }

  // If specific data is empty hide table and send a warning
  if (specificData.length == 0) {
    hideMainTable();
    alert("No data for selected team/year! Try again please.");
    showFieldset();
    return;
  } else {
    // If it's not empty, show the main table with choosen and calculated data
    showMainTable();
  }
  readMainTable(specificData);
  calculateTotalSumsForMainTable();
  displayPopupTable();
}

/**
 * Set selected data in the popup table
 * @param {Event} event - target event property returns the element that triggered the event
 */
function setPopup(event) {
  // Determine which row and column in main table is clicked
  var rows = document.getElementsByClassName("tr-data");
  var rowsArray = Array.from(rows);
  var rowIndex = rowsArray.findIndex(row => row.contains(event.target));
  var columns = Array.from(rowsArray[rowIndex].querySelectorAll(".call_modal"));
  var columnIndex = columns.findIndex(column => column == event.target);

  selectedMonth = columnIndex;
  selectedMonthText = headers[columnIndex + 1].innerHTML;
  selectedEmployee = bodyMainTable.rows[rowIndex].cells[0].innerHTML;

  dataForPopup = getSpecificDataForPopup(selectedEmployee);
  mondaysInMonth = getDatesOfMondays(selectedMonth, selectedYear);

  readPopup(dataForPopup);
  calculateTotalSumsForPopupTable();
}


/**
 * Save employees data with newly made changes
 */
function saveData() {
  if (updatedEmployees == null) {
    save(employees);
  } else {
    save(updatedEmployees);
  }
}
