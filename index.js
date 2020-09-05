var names = [
  {
    firstName: "Aaron",
    lastName: "Tompkins",
  },
  {
    firstName: "Adam",
    lastName: "Pertofsky",
  },
  {
    firstName: "Akiko",
    lastName: "Iwakawa-Grieve",
  },
  {
    firstName: "Alyssa",
    lastName: "Oh",
  },
  {
    firstName: "Angus",
    lastName: "Wall",
  },
  {
    firstName: "Austyn",
    lastName: "Daines",
  },
  {
    firstName: "Carlos",
    lastName: "Arias",
  },
  {
    firstName: "Chris",
    lastName: "Mitchell",
  },
  {
    firstName: "Damion",
    lastName: "Clayton",
  },
  {
    firstName: "Dan",
    lastName: "De Winter",
  },
  {
    firstName: "David",
    lastName: "Brodie",
  },
  {
    firstName: "Jamie",
    lastName: "Foord",
    hoverEvent: "http://place-puppy.com/400x400",
  },
  {
    firstName: "Frank",
    lastName: "Snider",
  },
  {
    firstName: "Lauren",
    lastName: "Dellara",
  },
  {
    firstName: "Louis-Philippe",
    lastName: "Charette",
  },
  {
    firstName: "Mikkel",
    lastName: "Eg Nielsen",
  },
  {
    firstName: "Neil",
    lastName: "Meiklejohn",
  },
  {
    firstName: "Olivier",
    lastName: "Bugge Coutte",
  },
  {
    firstName: "Paul",
    lastName: "Zucker",
  },
  {
    firstName: "Ted",
    lastName: "Guard",
  },
  {
    firstName: "Zoe",
    lastName: "Mougin",
  }
];

for (i = 0; i < names.length; i++) {
  const namesDiv = document.createElement("li");
  namesDiv.className = "data-item";
  namesDiv.innerHTML = names[i].firstName + " " + names[i].lastName;
  document.getElementById("data-container").append(namesDiv);
  
  const bgImg = names[i].hoverEvent;

//   if hover event exists logic
  if (names[i].hoverEvent) {
      namesDiv.addEventListener("mouseover", () => {
          document.getElementById("data-container").style.backgroundImage = "url(" + bgImg + ")"
    });
  } else {
      namesDiv.addEventListener("mouseleave", () => {
          document.getElementById("data-container").style.backgroundImage = "url()"
    });
  }
}



