const pdfInput =
    document.getElementById("pdfInput");

const selectedFile =
    document.getElementById("selectedFile");

const uploadBtn =
    document.getElementById("uploadBtn");

const uploadMessage =
    document.getElementById("uploadMessage");

const activeJob =
    document.getElementById("activeJob");

const jobFileName =
    document.getElementById("jobFileName");

const jobCode =
    document.getElementById("jobCode");

const countdown =
    document.getElementById("countdown");

const welcomeUser =
    document.getElementById("welcomeUser");


// USER

const user =
    localStorage.getItem("privacyPrintUser");

if (user) {

    welcomeUser.textContent =
        `Hello, ${user}`;

}


// LOGOUT

document
    .getElementById("logoutBtn")
    .addEventListener("click", function () {

        localStorage.removeItem(
            "privacyPrintUser"
        );

        window.location.href =
            "index.html";

    });


// FILE SELECT

pdfInput.addEventListener(
    "change",
    function () {

        const file =
            pdfInput.files[0];

        if (!file) {

            selectedFile.textContent =
                "No file selected";

            return;
        }


        if (file.type !== "application/pdf") {

            selectedFile.textContent =
                "Please select a PDF file.";

            pdfInput.value = "";

            return;
        }


        if (file.size > 10 * 1024 * 1024) {

            selectedFile.textContent =
                "File is larger than 10 MB.";

            pdfInput.value = "";

            return;
        }


        selectedFile.textContent =
            file.name;

    }
);


// UPLOAD

uploadBtn.addEventListener(
    "click",
    function () {

        const file =
            pdfInput.files[0];


        if (!file) {

            uploadMessage.textContent =
                "Please select a PDF first.";

            return;
        }


        uploadMessage.textContent =
            "Uploading document...";


        setTimeout(function () {

            createDemoJob(file.name);

        }, 800);

    }
);


// CREATE DEMO JOB

function createDemoJob(fileName) {

    const randomNumber =
        Math.floor(
            1000 + Math.random() * 9000
        );


    const randomLetters =
        Math.random()
            .toString(36)
            .substring(2, 5)
            .toUpperCase();


    const code =
        `PRT-${randomNumber}${randomLetters}`;


    jobCode.textContent =
        code;


    jobFileName.textContent =
        fileName;


    activeJob.classList.remove(
        "hidden"
    );


    uploadMessage.textContent =
        "Document uploaded successfully.";


    startCountdown(30 * 60);

}


// COUNTDOWN

function startCountdown(seconds) {

    let remaining =
        seconds;


    function updateTimer() {

        const minutes =
            Math.floor(
                remaining / 60
            );


        const secs =
            remaining % 60;


        countdown.textContent =
            `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;


        if (remaining <= 0) {

            clearInterval(timer);

            countdown.textContent =
                "EXPIRED";

            return;
        }


        remaining--;

    }


    updateTimer();


    const timer =
        setInterval(
            updateTimer,
            1000
        );

}