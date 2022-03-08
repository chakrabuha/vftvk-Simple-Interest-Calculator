function compute()
{
    var principal = document.getElementById("principal").valueAsNumber;
    if (principal>0)
    {
        var rate = document.getElementById("rate").valueAsNumber;
        var years = parseInt(document.getElementById("years").value);
        var interest = (principal * years * rate) /100;
        var amount= interest;
        var year = new Date().getFullYear()+years;
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"

    }
    else{
        alert("Enter positive value");
        document.getElementById("principal").value="";
        document.getElementById("principal").focus();
    }
}
