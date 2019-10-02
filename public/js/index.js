$(".pageSwap2").hide();
var userID = localStorage.getItem("userId")
console.log(userID);


// var API = {
//   saveExample: function (example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getId: function () {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function (id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     var $examples = data.map(function (example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function () {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function () {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons




$("#seePhones").on("click", function (event) {
  event.preventDefault();
  console.log("get all clicked");

  $.get("/api/allPhones", function (phoneData) {
    console.log(phoneData);
    $(".pageSwap2 .pageSwap2Content").empty();
    phoneData.forEach(phone => {
      var col = $("<div>").addClass("col-4 hovereffect")
      var overlay = $("<div>").addClass("overlay")
      var img = $("<img>").attr("src", "https://www.boostmobile.com/amp/img/lg-stylo-4/carousel/4.jpg").addClass("phone card-img-top img-responsive").attr("alt", `${phone.brand} ${phone.model}`)
      var brand = $("<h3>").text(`${phone.brand} ${phone.model}`)
      var cond = $("<h4>").text(`${phone.phone_condition}`).addClass("h4-product")
      var btn = $("<button>").text("SWAP IT").addClass("btn see-more")
      overlay.append(brand)
      overlay.append(cond)
      overlay.append(btn)
      col.append(img)
      col.append(overlay)
      $(".pageSwap2 .pageSwap2Content").append(col)
    });
    $(".pageSwap1").hide();
    $(".pageSwap2").show();

  })

})

  $("#seePhones2").on("click", function (event) {
    event.preventDefault();
    console.log("get all clicked");
  
    $.get("/api/allPhones", function (phoneData) {
      console.log(phoneData);
      $(".pageSwap2 .pageSwap2Content").empty();
      phoneData.forEach(phone => {
        var col = $("<div>").addClass("col-4 hovereffect")
        var overlay = $("<div>").addClass("overlay")
        var img = $("<img>").attr("src", "https://www.boostmobile.com/amp/img/lg-stylo-4/carousel/4.jpg").addClass("phone card-img-top img-responsive").attr("alt", `${phone.brand} ${phone.model}`)
        var brand = $("<h3>").text(`${phone.brand} ${phone.model}`)
        var cond = $("<h4>").text(`${phone.phone_condition}`).addClass("h4-product")
        var btn = $("<button>").text("SWAP IT").addClass("btn see-more")
        overlay.append(brand)
        overlay.append(cond)
        overlay.append(btn)
        col.append(img)
        col.append(overlay)
        $(".pageSwap2 .pageSwap2Content").append(col)
      });
      $(".pageSwap1").hide();
      $(".pageSwap2").show();
  
    })
  

})



