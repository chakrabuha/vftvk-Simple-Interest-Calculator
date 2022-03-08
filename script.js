function compute()
{
    var principal = document.getElementById("principal").valueAsNumber;
    if (principal>0)
    {
        var rate = document.getElementById("rate").valueAsNumber;
        var years = parseInt(document.getElementById("years"));
        var interest = (principal * years * rate) /100;
        var amount= principal+interest;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"

    }
    else
        alert("Enter valid amount");
}
