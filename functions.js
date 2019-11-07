

/* This function tries to determine if there is already a name in storage by determining if the current value in storage is null or nothing. If it is null, it starts the next function storeEvent() which inserts the inputted name for the first time on the button click.

If there is a name already in storage, then it retrieves that name and displays it with a button that can delete that name in storage.
*/
function storeName() {
  //determine if there is a name or not in storage
  if (localStorage.getItem("fullName") == null){
  //this retrieves the button by it's id and listens for a click on it. On click it activates storeEvent
  document.getElementById("btn").addEventListener("click", storeEvent, false);
} else {
  //this displays the already storaged name and gives an option to delete it by including a removeName() function
    document.getElementById("nameArea").innerHTML = "<span class='glyphicon glyphicon-remove' title='Click here and reload to remove this name' id='clicky' onclick='removeName()'></span><span class='speechName'>Hello " + localStorage.getItem("fullName") + "!</span>";
    document.getElementById("clicky").addEventListener("click", removeName, false);
}
}


/*
This function stores the inputted value from the text field into localStorage and then retrieves it to be displayed in a desiginated html tag with .innerHTML along with a function to remove it.
*/
function storeEvent() {

//retrieves a value string from the text field
  var name1 = document.getElementById("name").value;

  if (name1 == ""){
    return;
  }

  //sets the name in the local storage with the input from the text field
  localStorage.setItem("fullName", name1);

//displays the innerHTML with name that was put into localStorage along with an x to remove it
 document.getElementById("nameArea").innerHTML = "<span class='glyphicon glyphicon-remove' title='Click here and reload to remove this name' id='clicky' onclick='removeName()'></span><span class='speechName'>Hello " + localStorage.getItem("fullName") + "!</span>";

}

//this is the function that the above localStorage functions call. This clears the localStorage
function removeName() {
  localStorage.clear();
  location.reload();
}

//this is the function that changes the titles of each convention page on hover over (magfest.html and animeusa.html) by changing it's font size to be bigger on mouse over ahdn then reverting it back to its normal size upon mousing out. This function is on multiple pages so that's why it's in this external javascript file. This completes the c. requirement on Project 3.
function mousing(){
  var heading = document.getElementById("conventionTitle");
  heading.addEventListener("mouseover", function() {
    document.getElementById("conventionTitle").setAttribute("style", "font-size: 3.5em;");
  });

  heading.addEventListener("mouseout", function() {
    document.getElementById("conventionTitle").setAttribute("style", "font-size: 36px;");
  });

}




/* This is the "do one neat thing" function that replaces each star on click to another star picture that's gold instead. If the user selects the first star, it does the first if statement, if not then second, if not then third, etc.

*/
function changeStarPic(number) {
  if (number == 1){
    //replaces the first star with a gold star if number 1 is choosen
  document.getElementById('star1').innerHTML = '<img src="images/Gold_Star.png" class="starsPicBlank" alt="gold star"/>';
} else if (number == 2) {
 //replaces two stars with gold stars if number 2 is choosen
  document.getElementById('star1').innerHTML = '<img src="images/Gold_Star.png" class="starsPicBlank" alt="gold star" />';
  document.getElementById('star2').innerHTML = '<img src="images/Gold_Star.png" class="starsPicBlank" alt="gold star" />';
} else if (number == 3) {
  //replaces all three stars with gold stars if number 3 is choosen
  document.getElementById('star1').innerHTML = '<img src="images/Gold_Star.png" class="starsPicBlank" alt="gold star" />';
  document.getElementById('star2').innerHTML = '<img src="images/Gold_Star.png" class="starsPicBlank" alt="gold star" />';
  document.getElementById('star3').innerHTML = '<img src="images/Gold_Star.png" class="starsPicBlank" alt="gold star" />';
}

}

//this function is for the purpose of refreshing the page whenever the button that activates it is clicked
function refresh(){
  window.location.reload();
}

//this is the last modified function that simply shows when the last time these files were uploaded to the mason server. It is used to be as a timestamp for when the registration costs were last checked
function lastModified() {
  document.getElementById("modified").innerHTML = "<p class='minorDetail modifiedDate'>" + document.lastModified + "</p>";
}

//sorry about the multiple event listeners. They start various functions on load

window.addEventListener("load", lastModified, false);

window.addEventListener("load", storeName, false);

window.addEventListener("load", mousing, false);

//window.addEventListener("load", rando, false);
