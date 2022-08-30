function formvalidation()
{
    let uname = document.getElementById('username').value;
    let umail = document.getElementById('email').value;
    let upass1 = document.getElementById('password').value;
    let upass2 = document.getElementById('password1').value;
    let uphone = document.getElementById('phone-number').value;
    let date = document.getElementById('birth-date').value;

    let email_format = /^[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z]{2,5}$/;
    let checkEmail = email_format.test(umail);
    let number_format =/^[0-9]{11,13}$/;
    let number = number_format.test(uphone);



    // user name validation

    if (uname.length == 0 || uname.length > 8 || !isNaN(uname)) {
        document.getElementById("sname").innerHTML = `Name must be less than 8 character and can not contain numbers`;
        document.getElementById("sname").style.color = `red`;
        return false;
      } 
      else {
        document.getElementById("sname").innerHTML = `Valid usename`;
        document.getElementById("sname").style.color = `green`;
      }



    //   email validation

    if (checkEmail.length == 0)
      {
        document.getElementById("smail").innerHTML ="Please Insert Your Email";
        document.getElementById("smail").style.color = "red";
        
      } 
      
      else if (checkEmail == true) {
        document.getElementById("smail").innerHTML ="Valid email address.";
        document.getElementById("smail").style.color = "green";
      } 
      
      
      else 
      {
        document.getElementById("smail").innerHTML ="Enter proper Email Address.";
        document.getElementById("smail").style.color = "red";
        return false;
      }


    //   password validation

    if (upass1.length == "" || password.length < 8) {
        document.getElementById("spass").innerHTML = `Password must be more than 8 character`;
        document.getElementById("spass").style.color = `red`;
        return false;
      } 
      else {
        document.getElementById("spass").innerHTML = `Valid password`;
        document.getElementById("spass").style.color = `green`;
        
      }


    //   confirm password

    if (upass1 === upass2)
    {
        document.getElementById('spass1').innerHTML = `Password Match`;
        document.getElementById('spass1').style.color =`green`;

        
    }
    else
    {
        document.getElementById('spass1').innerHTML = `Password Does Not Match`;
        document.getElementById('spass1').style.color =`red`;
        return false;

    }


    // number validation

    if (number == true)
    {
        document.getElementById('sphone').innerHTML = `Number Format Correct`;
        document.getElementById('sphone').style.color =`green`;
        alert('sucessfully');
        
    }
    else
    {
        document.getElementById('sphone').innerHTML = `Please Insert Correct Number Format `;
        document.getElementById('sphone').style.color =`red`;
        

    }





}