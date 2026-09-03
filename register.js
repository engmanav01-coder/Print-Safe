const registerForm =
    document.getElementById("registerForm");


registerForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("message");


        if (password.length < 6) {

            message.textContent =
                "Password must contain at least 6 characters.";

            return;
        }


        // Temporary frontend storage

        localStorage.setItem(
            "privacyPrintUser",
            name
        );


        message.textContent =
            "Account created successfully.";


        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 700);

    }
);