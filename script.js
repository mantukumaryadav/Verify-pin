var PinDetails = {
    "pin":"kumar@440"

}
var error = 3;
function SubmitClick(){
    var pin = document.getElementById("Pin").value;
    if(PinDetails.pin === pin){
        document.write("Login Sccess");
    }
    else{
            error--;
            document.getElementById("msg").innerHTML = `${error} attempts left`;
            if(error === 0){
                document.getElementById("msg").innerHTML = "Blocked";
                document.getElementById("Submit").disabled = "true";
                
            }
    }
}