fetch("db.json")
  .then(response=> {
      let data = response;
    return data.json();
  })
  .then(data => {
    appendData(data);
  })
  .catch(err => {
    console.log(err);
  });

  console.log(data);
  var data = document.getElementById("jsonData");

  for (let i = 0; i < data.length; i++) {

  }

  var div = document.createElement("div");
//   div.innerHTML = "Name"