const loginForm =
    document.getElementById("loginForm");


// ===============================
// NORMAL LOGIN
// ===============================

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;


        const message =
            document.getElementById("message");


        if (!email || !password) {

            message.textContent =
                "Please enter email and password.";

            return;
        }


        /*
            TEMPORARY DEMO LOGIN

            Later backend authentication
            will replace this.
        */

        localStorage.setItem(
            "privacyPrintUser",
            email
        );


        message.textContent =
            "Login successful.";


        setTimeout(() => {

            window.location.href =
                "dashboard.html";

        }, 700);

    }
);



// ===============================
// GOOGLE LOGIN
// ===============================

function handleGoogleLogin(response) {

    console.log(
        "Google credential received"
    );


    /*
        IMPORTANT:

        response.credential is a Google ID token.

        For the final application,
        we will send this token to our
        Node.js backend.

        Backend will verify it.

        DO NOT trust the token only
        from frontend.
    */


    const credential =
        response.credential;


    if (!credential) {

        document.getElementById(
            "message"
        ).textContent =
            "Google login failed.";

        return;
    }


    /*
        TEMPORARY:

        We are storing the token only
        so we can test that Google
        authentication actually worked.

        We will remove this later
        when backend authentication
        is connected.
    */

    localStorage.setItem(
        "googleCredential",
        credential
    );


    localStorage.setItem(
        "privacyPrintUser",
        "Google User"
    );


    document.getElementById(
        "message"
    ).textContent =
        "Google login successful.";


    setTimeout(() => {

        window.location.href =
            "dashboard.html";

    }, 700);

}