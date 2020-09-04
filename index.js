var names = [
        {
        "firstName": "Aaron",
        "lastName": "Tompkins"
        },
        {
        "firstName": "Angus",
        "lastName": "Wall"
        },
        {
        "firstName": "Damion",
        "lastName": "Clayton"
        },
        {
        "firstName": "Jamie",
        "lastName": "Foord"
        },
        {
        "firstName": "Neil",
        "lastName": "Meiklejohn"
        },
        {
        "firstName": "Alyssa",
        "lastName": "Oh"
        },
        {
        "firstName": "Chris",
        "lastName": "Mitchell"
        },
        {
        "firstName": "Adam",
        "lastName": "Pertofsky"
        },
        {
        "firstName": "Austyn",
        "lastName": "Daines"
        },
        {
        "firstName": "Dan",
        "lastName": "De Winter"
        },
        {
        "firstName": "Lauren",
        "lastName": "Dellara"
        },
        {
        "firstName": "Olivier",
        "lastName": "Bugge Coutte"
        },
        {
        "firstName": "Frank",
        "lastName": "Snider"
        },
        {
        "firstName": "Mikkel",
        "lastName": "Eg Nielsen"
        },
        {
        "firstName": "Akiko",
        "lastName": "Iwakawa-Grieve"
        },
        {
        "firstName": "Carlos",
        "lastName": "Arias"
        },
        {
        "firstName": "David",
        "lastName": "Brodie"
        },
        {
        "firstName": "Louis-Philippe",
        "lastName": "Charette"
        },
        {
        "firstName": "Paul",
        "lastName": "Zucker"
        },
        {
        "firstName": "Ted",
        "lastName": "Guard"
        },
        {
        "firstName": "Zoe",
        "lastName": "Mougin"
        },

    ]

for (i = 0; i < names.length; i++){
    const namesDiv = document.createElement('li');
    namesDiv.className = "data-item";
    namesDiv.innerHTML = names[i].firstName + ' ' + names[i].lastName;
    document.getElementById('data-container').append(namesDiv)
    // console.log(renderInfo)
}


// let hover = false;
// document.getElementById




