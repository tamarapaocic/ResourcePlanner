var selectTeam = document.getElementsByTagName("select")[0];
var selectYear = document.getElementsByTagName("select")[1];
var buttonShow = document.getElementById("show");
var buttonSave = document.getElementById("save");


selectTeam.addEventListener('click', getSelectedTeam);

selectYear.addEventListener('click',  getSelectedYear);

filter.addEventListener('click', toggleFieldset);

buttonShow.addEventListener('click', setMain);

bodyMainTable.addEventListener('click', setPopup);

buttonSave.addEventListener('click', saveData);
