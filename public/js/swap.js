var userID = localStorage.getItem("userId")
console.log(userID);

$("#add-btn").on("click", function (event) {
  event.preventDefault();

  // make a newCharacter obj
  var newButtons = {
    // name from name input
    brand: $("#brand").val().trim(),
    // role from role input
    model: $("#model").val().trim(),
    // age from age input
    condition: $("#condition").val().trim(),
    // points from force-points input
    IMEInumber: $("#imei-number").val().trim()
  };
  console.log(newButtons);
  // send an AJAX POST-request with jQuery
  $.post("/api/post", newButtons)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding phone...");
    });

  // empty each input box by replacing the value with an empty string
  $("#brand").val("");
  $("#model").val("");
  $("#condition").val("");
  $("#imei-number").val("");

});