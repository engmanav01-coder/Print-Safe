const searchForm =
    document.getElementById("searchForm");

const operatorResult =
    document.getElementById("operatorResult");

const operatorMessage =
    document.getElementById(
        "operatorMessage"
    );


searchForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const jobId =
            document.getElementById(
                "jobId"
            ).value.trim();


        if (!jobId) {

            operatorMessage.textContent =
                "Enter a print code.";

            return;
        }


        operatorMessage.textContent =
            "Searching for print job...";


        setTimeout(function () {

            showJob(jobId);

        }, 700);

    }
);


function showJob(jobId) {

    document.getElementById(
        "resultJobId"
    ).textContent =
        jobId.toUpperCase();


    document.getElementById(
        "studentName"
    ).textContent =
        "Student";


    document.getElementById(
        "operatorFile"
    ).textContent =
        "assignment.pdf";


    operatorResult.classList.remove(
        "hidden"
    );


    operatorMessage.textContent =
        "Print job found.";

}


// MARK PRINTING

document
    .getElementById("printingBtn")
    .addEventListener(
        "click",
        function () {

            operatorMessage.textContent =
                "Job marked as printing.";

        }
    );


// PRINT

document
    .getElementById("printBtn")
    .addEventListener(
        "click",
        function () {

            operatorMessage.textContent =
                "Opening document for printing...";

            // Backend ke baad yahan actual PDF open hoga.

        }
    );


// PRINTED

document
    .getElementById("printedBtn")
    .addEventListener(
        "click",
        function () {

            operatorMessage.textContent =
                "✓ Document marked as printed.";

        }
    );