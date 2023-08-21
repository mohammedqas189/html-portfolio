

function choice()
{
    if(document.getElementById("q1a1").checked)
    {
      document.getElementById("a1").style.color = "green";
      alert("Correct! Proceed to the next question :)")

    }
    else if(document.getElementById("q1a2").checked)
    {
      document.getElementById("a2").style.color = "red";
      alert("Wrong! Choose another answer :(")

    }
    else if(document.getElementById("q1a3").checked)
    {
      document.getElementById("a3").style.color = "red";
      alert("Wrong! Choose another answer :(")
    }
}

function choice2()
{
    if(document.getElementById("q2a1").checked)
    {
      document.getElementById("aa1").style.color = "red";
      alert("Incorrect! Try Again")
    }
    else if(document.getElementById("q2a2").checked)
    {
      document.getElementById("aa2").style.color = "red";
      alert("Nope! Again")

    }
    else if(document.getElementById("q2a3").checked)
    {
      document.getElementById("aa3").style.color = "green";
      alert("Wow! You are a genius! Correct Answer!")
    }
}

function choice3()
{
    if(document.getElementById("q3a1").checked)
    {
      document.getElementById("aaa1").style.color = "red";
      alert("Sorry, but no. Choose Again")
    }
    else if(document.getElementById("q3a2").checked)
    {
      document.getElementById("aaa2").style.color = "green";
      alert("You are right on! Good Job!")

    }
    else if(document.getElementById("q3a3").checked)
    {
      document.getElementById("aaa3").style.color = "red";
      alert("Unfortunately, you are wrong on this one :(")
    }
}

function choice4()
{
    if(document.getElementById("q4a1").checked)
    {
      document.getElementById("4a1").style.color = "red";
      alert("Sorry, but no. Choose Again")
    }
    else if(document.getElementById("q4a2").checked)
    {
      document.getElementById("4a2").style.color = "green";
      alert("You are right on! Good Job!")

    }
    else if(document.getElementById("q4a3").checked)
    {
      document.getElementById("4a3").style.color = "red";
      alert("Mistake! But dont worry, you can try again")
    }
}


function choice5()
{
    if(document.getElementById("q5a1").checked)
    {
      document.getElementById("5a1").style.color = "green";
      alert("We have a winner! Congratulations :)")
    }
    else if(document.getElementById("q5a2").checked)
    {
      document.getElementById("5a2").style.color = "red";
      alert("Wrong! Choose another answer :(")

    }
    else if(document.getElementById("q5a3").checked)
    {
      document.getElementById("5a3").style.color = "red";
      alert("Wrong! Choose another answer :(")
    }
}


function choice6()
{
    if(document.getElementById("q6a1").checked)
    {
      document.getElementById("6a1").style.color = "red";
      alert("Sorry, but not even close. Try Again!")

    }

     else if(document.getElementById("q6a2").checked)
    {
      document.getElementById("6a2").style.color = "red";
      alert("Wrong! Choose another answer :(")
    }

     else if(document.getElementById("q6a3").checked)
    {
      document.getElementById("6a3").style.color = "green";
      alert("Wonderful Performance! You will become a great writer one day!")
    }


}
