/*
    This function checks two form fields and displays an error message if either is empty
*/
function validate() {

    if (document.regForm.uname.value == "") {
        alert("Please provide your user name!");
        document.regForm.uname.focus();
        return false;
    }
    if (document.regForm.pwd.value == "") {
        alert("Please key in your password!");
        document.regForm.pwd.focus();
        return false;
    }

    return (true);
}
//check data type number and length
function validate2() {
    //number bu ween 1-12
    if (document.ordForm.colorChoice.value.length != 3) {
        alert("Color should be 3 characters")
        document.ordForm.colorChoice.focus()
        return false;
    }
    if (isNaN(document.ordForm.qty.value) || (document.ordForm.qty.value < 1) ||
        (document.ordForm.qty.value > 12)) {
        alert(
            "Quantity must be number from 1-12!"
        )
        document.ordForm.qty.focus();
        return false;
    }
    return true;

    //

}
//check format email
function validate3() {
    var email = document.ordForm.emailAddr.value;
    let atSign = email.indexOf("@");
    let dotSign = email.indexOf(".");

    if ((atSign < 1) || (dotSign - atSign < 2)) {
        alert("Error in email address")
        document.ordForm.emailAddr.focus();
        return false;
    }
    return true;

}
//bulit in form validation 


