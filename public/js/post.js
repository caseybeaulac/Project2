var userID = localStorage.getItem("userId")
console.log(userID);

$(document).ready(function () {
  var postForm = $("form.post");
  var brandInput = $("input#brand");
  var modelInput = $("input#model");
  var conditionInput = $("select#condition-select");
  var imeiInput = $("input#imei-number");
  var userID = localStorage.getItem("userId")
  console.log(userID);

  $("#add-btn").click(function (event) {
    console.log("btn clicked")
    event.preventDefault();
    var phoneData = {
      brand: brandInput.val().trim(),
      model: modelInput.val().trim(),
      phone_condition: conditionInput.val(),
      imei: imeiInput.val().trim()
    };

    if (
      !phoneData.brand ||
      !phoneData.model ||
      !phoneData.phone_condition ||
      !phoneData.imei
    ) {
      alert("Please fill in all the fields");
      return;
    }

    postPhone(
      phoneData.brand,
      phoneData.model,
      phoneData.phone_condition,
      phoneData.imei
    );
    brandInput.val(""),
      modelInput.val(""),
      conditionInput.val(""),
      imeiInput.val("");
  });

  function postPhone(brand, model, phone_condition, imei) {
    $.post("/api/post", {
      brand: brand,
      model: model,
      phone_condition: phone_condition,
      imei: imei,
      userID: userID
    })


      .catch(handlePostErr);
  }
  function handlePostErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
