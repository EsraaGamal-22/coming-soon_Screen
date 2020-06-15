const form=document.getElementById("form1");
const email=document.getElementById("email");
function CheckEmail()
{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(email.value)===false||email.value==="")
    {
        
     document.getElementById("err").style.visibility="visible";
     document.getElementById("imerror").style.visibility="visible";
     document.getElementById("email").style.border="0.5px solid hsl(0, 93%, 68%)";
     
     
    }
}
form.addEventListener("submit",event => {
    // method to prevent the default behavior and avoid a form submit to reload the page
    event.preventDefault();
    CheckEmail();
  });