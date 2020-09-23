const myform = document.getElementById("infoForm");


function onSubmit(event){
    event.preventDefault();
    checkForm();

}

function checkForm(){


    var phonePattern = /^[0-9]+$/;
    var text = /^[A-Za-z., ]+$/;
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const fisrt = myform.elements["fName"].value;
    const middle = myform.elements["mName"].value;
    const last = myform.elements["lName"].value;
    const email = myform.elements["email"].value;
    const address = myform.elements["address"].value;
    const phone = myform.elements["phone"].value;

    if(!fisrt.match(text) || !middle.match(text) || !last.match(text) || !email.match(emailPattern) || !phone.match(phonePattern) || address === ""){
        document.getElementById("fName").classList.remove('error');
        document.getElementById("mName").classList.remove('error');
        document.getElementById("lName").classList.remove('error');
        document.getElementById("email").classList.remove('error');
        document.getElementById("phone").classList.remove('error');
        document.getElementById("address").classList.remove('error');

        if(!fisrt.match(text)){
            document.getElementById("fName").classList.add('error');
        }
        if(!middle.match(text)){
            document.getElementById("mName").classList.add('error');
        }
        if(!last.match(text)){
            document.getElementById("lName").classList.add('error');
        }
        if(!email.match(emailPattern)){
            document.getElementById("email").classList.add('error');
        }
        if(!phone.match(phonePattern)){
            document.getElementById("phone").classList.add('error');
        }
        if(address === ""){
            document.getElementById("address").classList.add('error');
        }
    }
    else{
        document.getElementById("fName").classList.remove('error');
        document.getElementById("mName").classList.remove('error');
        document.getElementById("lName").classList.remove('error');
        document.getElementById("email").classList.remove('error');
        document.getElementById("phone").classList.remove('error');
        document.getElementById("address").classList.remove('error');

        const fisrt = myform.elements["fName"].value;
        const middle = myform.elements["mName"].value;
        const last = myform.elements["lName"].value;
        const email = myform.elements["email"].value;
        const gender = myform.elements["gender"].value;
        const address = myform.elements["address"].value;
        const phone = myform.elements["phone"].value;
    
        sessionStorage.setItem("fname", fisrt);
        sessionStorage.setItem("mName", middle);
        sessionStorage.setItem("lName", last);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("gender", gender);
        sessionStorage.setItem("address", address);
        sessionStorage.setItem("phone", phone);
    
        window.location = 'curriculumVitae.html';

    }

}

myform.addEventListener("submit", onSubmit);