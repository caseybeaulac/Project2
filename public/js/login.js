$(document).ready(function () {

    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var userID;

    $(".see-more").click(function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        console.log(userData)

        if (!userData.email || !userData.password) {
            return;
        }


        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    })
});
//    loginForm.onClick(".see-more", function (event) {
//         event.preventDefault();
//         console.log("btn clickeed")
//         var userData = {
//             email: emailInput.val().trim(),
//             password: passwordInput.val().trim()
//         };

//         if (!userData.email || !userData.password) {
//             return;
//         }


//         loginUser(userData.email, userData.password);
//         emailInput.val("");
//         passwordInput.val("");
//     });


function loginUser(email, password) {
    console.log("login user")
    $.post("/api/login", {
        email: email,
        password: password
    })
        .then(function (user) {
            console.log("user id " + user);
            //userID = userData;
            window.location.replace("/home"); //- shouldnt need this
            //insert get request for "/home" url
            // $.get("/home", function (req, res) {
            //     res.json({
            //         id: req.user.id

            //     });

            //})

        })
        .catch(function (err) {
            console.log(err);
            alert("User not found, please try again.")
        });
}
// });
