/**
 * Set monthly sums for one year on the main table.
 * Set specific data based on selected team and year.
 * @param {Object[]} array - all employees data
 */
function renderMainTable(array) {
  for (var month = 0; month < 12; month++) {
    calculateSumsForMainTable(array, month);
  }
  specificData = getSpecificData(array, selectedYear, selectedTeam);
}


/**
 * Copy employees from one array to another with just the ones that are in selected team and year.
 * Return new data.
 * @param {Object[]} array - all employees data
 * @param {Number} year - selected year by user
 * @param {String} team - selected team by user
 * @returns {Object[]} newArray - filtered employees data
 */
function getSpecificData(array, year, team) {
  var newArray = [];
  for (var i = 0, len = array.length; i < len; i++) {
    var numOfYears = array[i].years.length;

    for (var y = 0; y < numOfYears; y++) {
      if ((array[i].years[y].num == year) && (array[i].team == team)) {
        var item = array[i];
        var obj = {};
        for (var k in item) {
          obj[k] = item[k];
        }
        newArray.push(obj);
      }
    }
  }
  return newArray;
};

/**
 * Set monthly sums for specific month(s) and employee(s)
 * @param {Object[]} array - employees data
 * @param {Number} month - month represented by a number
 */
function calculateSumsForMainTable(array, month) {
  for (var j = 0; j < array.length; j++) {
    delete array[j].sumPerMonth[month];
    var availableInMonth = 0;
    var sum = 0;
    var numOfYears;
    numOfYears = array[j].years.length;
    var numOfWeeks;
    var numOfProjects;
    var total;

    for (var y = 0; y < numOfYears; y++) {
      if (array[j].years[y].num == selectedYear) {
        numOfWeeks = array[j].years[y].monthsYear[month].available.length;
        for (var a = 0; a < numOfWeeks; a++) {
          availableInMonth += parseFloat(array[j].years[y].monthsYear[month].available[a]);
        }
        numOfProjects = array[j].years[y].monthsYear[month].projectsMonth.length;
        for (var k = 0; k < numOfProjects; k++) {
          for (var z = 0; z < numOfWeeks; z++) {
            sum += parseFloat(array[j].years[y].monthsYear[month].projectsMonth[k].projectWeeks[z]);
          }
        }

        total = (sum / availableInMonth) * 100;
        if (isNaN(total) || total == 0) {
          totalFixed = "-";
        } else {
          var totalFixed;
          totalFixed = total.toFixed(1) + "%";
        }
        array[j].sumPerMonth[month] = totalFixed;
        availableInMonth = 0;
        sum = 0;
      }
    }
  }
}


/**
 * Get monthly sums from main table DOM
 * Set total sums per month in footer
 */
function calculateTotalSumsForMainTable() {
  var table = document.getElementById("dataTable"),
    sum = 0;
  var rows = document.getElementsByClassName("tr-data");
  var countRows = 0;
  for (var j = 1; j < 13; j++) {
    for (var i = 0; i < rows.length; i++) {
      if ((rows[i].cells[j].innerHTML != "-")) {
        sum += parseFloat(rows[i].cells[j].innerHTML);
        countRows++;
      }
    }
    sum /= countRows;
    var sumTotal = sum.toFixed(1);
    if (isNaN(sumTotal)) {
      document.getElementsByClassName("total-td")[j - 1].innerHTML = "0.0%";
    } else {
      document.getElementsByClassName("total-td")[j - 1].innerHTML = sumTotal + "%";
    }
    sum = 0;
    countRows = 0;
  }
}



/**
 * Get employee data only for selected employee
 * @param {String} name - name of the employee
 * @returns {Object[]} newArray - employee data only for selected one
 */
function getSpecificDataForPopup(name) {
  var newArray = [];
  for (var i = 0, len = specificData.length; i < len; i++) {
    if (specificData[i].name == name) {
      var item = specificData[i];
      var obj = {};
      for (var k in item) {
        obj[k] = item[k];
      }
      newArray.push(obj);
    }
  }
  return newArray;
};



/**
 * Get weekly sums from the popup DOM
 * Set total sums per week in footer
 */
function calculateTotalSumsForPopupTable() {
  var sum = 0,
    countRows = 0;
  var columnsInProjects = document.getElementById("popupTable").rows[1].cells.length;
  var rowsInProjects = document.getElementsByClassName("tr-data-projects");
  for (var j = 1; j < columnsInProjects; j++) {
    for (var i = 1; i < rowsInProjects.length; i++) {
      sum += parseFloat(rowsInProjects[i].cells[j].innerHTML);
    }
    var sumTotal = sum.toFixed(1);
    var percentage = sumTotal / rowsInProjects[0].cells[j].innerHTML * 100;
    document.getElementsByClassName("total-td-projects")[j - 1].innerHTML = percentage.toFixed(1) + "%";
    sum = 0;
    countRows = 0;
  }
}




/**
 * Generate dates od Mondays per month/year.
 * Return as an array.
 * @param {Number} month - month represented by a number
 * @param {Number} year - year represented by a number
 * @returns {Object[]} mondays - array of Mondays dates
 */
function getDatesOfMondays(month, year) {
  var date = new Date(year, month, 1, 0, 0, 0, 0)
  var day = 0

  // Check if first of the month is a Sunday, if so set date to the second
  if (date.getDay() == 0) {
    day = 2
    date = date.setDate(day)
    date = new Date(date)
  }

  // Check if first of the month is a Monday, if so return the date, otherwise get to the Monday following the first of the month
  else if (date.getDay() != 1) {
    day = 9 - (date.getDay())
    date = date.setDate(day)
    date = new Date(date)
  }

  var day = date.getDate();
  var dayMonth;
  var mondays = [];

  var totalDaysInMonth = getNumberOfDaysInMonth(month + 1, year);
  while (day <= totalDaysInMonth) {
    dayMonth = day + "." + (date.getMonth() + 1) + ".";
    day += 7;
    mondays.push(dayMonth);
  }
  return mondays;
}


/**
 * Get total number of days in month/year
 * @param {Number} month - month represented by a number
 * @param {Number} year - year represented by a number
 * @returns {Number} - number of total days
 */
function getNumberOfDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}



/**
 * Get data from cells in popup.
 * Save them over old values.
 * Save updated array in local storage.
 * @param {Object[]} array - employees data
 */
function save(array) {
  var columnsInProjects = document.getElementById("popupTable").rows[1].cells.length;
  var rowsInProjects = document.getElementsByClassName("tr-data-projects");
  for (var e = 0; e < array.length; e++) {
    if (array[e].name == selectedEmployee) {
      for (var i = 0; i < rowsInProjects.length; i++) {
        for (var j = 1; j < columnsInProjects; j++) {
          if (i == 0) {
            array[e].years[0].monthsYear[selectedMonth].available[j - 1] = rowsInProjects[i].cells[j].innerHTML.trim();
          } else {
            array[e].years[0].monthsYear[selectedMonth].projectsMonth[i - 1].projectWeeks[j - 1] = rowsInProjects[i].cells[j].innerHTML.trim();
          }
        }
      }
    }
  }

  calculateSumsForMainTable(array, selectedMonth);
  localStorage.setItem("updatedMainTable", JSON.stringify(array));
  refreshData();
}

/**
 * Output new sums calculations for updated data
 * in popup and main table
 */
function refreshData() {
  calculateTotalSumsForPopupTable();
  readMainTable(specificData);
  calculateTotalSumsForMainTable();
  displayPopupTable();
}
