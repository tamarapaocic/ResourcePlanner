# ResourcePlanner
Application description

Resource planner is a web application made using Javascript. It covers three entities: teams, employees and projects. 
At startup, it is possible to choose the desired team and the year in Filter. 
Clicking on the Show button a table is displayed with workers belonging to the selected team and their monthly work rates for the selected year.

Clicking on one of the cells popup opens and the table for desired month and the worker is displayed. 
It containes information on how much workers were available in which week, which projects they worked on, and how much they worked on them in relation to the total time spent at work. 
At the end of the table, the percentage of work is calculated for each week. All the popup tables and their cells can be edited. By clicking the Save button the made changes are saved, and the weekly average in the popup table and the monthly average in the main table are refreshed.

Data fromat is JSON. Data is stored with Local Storage. While saved in LS data is kept as a key-value string and when reused it is parsed back to JS object form. Because it is a small amount of data, Local storage is an efficient and easy-to-use api.
The source code is documented with JSDoc.
