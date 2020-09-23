function onload(){

    document.getElementById("name").innerHTML = sessionStorage.getItem("fname") + " " +  
    sessionStorage.getItem("mName") + " " + sessionStorage.getItem("lName");
    document.getElementById("address").innerHTML = sessionStorage.getItem("address");
    document.getElementById("phone").innerHTML = sessionStorage.getItem("phone");
    document.getElementById("email").innerHTML = sessionStorage.getItem("email");
    document.getElementById("gender").innerHTML = sessionStorage.getItem("gender");
    
    
}

onload();