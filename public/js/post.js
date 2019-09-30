$(document).ready(function () {
  var postForm = $("form.post");
  var brandInput = $("input#brand-input");
  var modelInput = $("input#model-input");
  var conditionInput = $("select#condition-input");
  var imeiInput = $("input#imei-input");

  $(".sign-up").click(function (event) {
    console.log("btn clicked")
    event.preventDefault();
    var phoneData = {
      brand: brandInput.val().trim(),
      model: modelInput.val().trim(),
      condition: conditionInput.val(),
      imei: imeiInput.val().trim()
    };

    if (
      !phoneData.brand ||
      !phoneData.model ||
      !phoneData.condition ||
      !phoneData.imei
    ) {
      alert("Please fill in all the fields");
      return;
    }

    postPhone(
      phoneData.brand,
      phoneData.model,
      phoneData.condition,
      phoneData.imei
    );
    brandInput.val(""),
      modelInput.val(""),
      conditionInput.val(""),
      imeiInput.val("");
  });

  function postPhone(brand, model, condition, imei) {
    $.post("/api/post", {
      brand: brand,
      model: model,
      condition: condition,
      imei: imei
    })


      .catch(handlePostErr);
  }
  function handlePostErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
