var names = {
    "employees": [
        {
        "firstName": "Aaron",
        "lastName": "Tompkins"
        },
        {
        "firstName": "Angus",
        "lastName": "Wall"
        }
    ]
}
// alert (names.employees.length)
for (i = 0; i < names.length; i++){
    var output = document.getElementById('jsonData');
    jsonData.innerHTML = names.employees[i].firstName + ' ' + names.employees[i].lastName;
}

