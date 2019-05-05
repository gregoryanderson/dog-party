function hideText () {
  var whereGo = document.getElementById("hidden");
  if (whereGo.style.display === "none") {
    whereGo.style.display = "block";
  } else {
    whereGo.style.display = "none";
  }
}

function hideText2 () {
  var whereGo = document.getElementById("hidden2");
  if (whereGo.style.display === "none") {
    whereGo.style.display = "block";
  } else {
    whereGo.style.display = "none";
  }
}

function hideText3 () {
  var whereGo = document.getElementById("hidden3");
  if (whereGo.style.display === "none") {
    whereGo.style.display = "block";
  } else {
    whereGo.style.display = "none";
  }
}


function changeName (){
	var nameInput = document.querySelector ('.dog-input')
	var newName = nameInput.value;
	document.getElementById("name-changer").innerHTML= newName;
}