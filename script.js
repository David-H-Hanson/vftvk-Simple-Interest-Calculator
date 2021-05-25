// Compute the earned interest
function compute()
{
    var principal = document.getElementById("principal").value; // get principal 
    if (principal > 0) {                          // test for valid input
        var rate = document.getElementById("rate").value; // get interest rate
        var years = document.getElementById("years").value; // get number of years
        var interest = principal * years * rate /100; // calculate interest
        var year = new Date().getFullYear()+parseInt(years); // calculate ending year
        // output results (incluing highlighting of numbers)
        document.getElementById("result").innerHTML="If you deposit $<span class='highlight'>" 
            + principal
            + "</span><br> at an interest rate of <span class='highlight'>" + rate
            + "</span>%, <br>you will receive an amount of $<span class='highlight'>" + interest
            + "</span>,<br>in the year <span class='highlight'>" + year + "</span>.";
    } else { // invalid input for principal
        alert("Enter a positive number"); // alert user
        document.getElementById("result").innerHTML=""; // blank out any prior results
        document.getElementById("principal").focus(); // focus on bad input field
    }
}

// Display interest rate beside the slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value; // get slider value
    document.getElementById("rate_val").innerText=rateval+"%"; // write it out to field beside slider
}
        