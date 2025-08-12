let Kesan=[];
function signup (){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if(name== ""){
        alert("name is required")
        return false;
    }
    if(email== ""){
        alert("email is required")
        return false;
    }
    else if(!email.includes("@gmail.com")){
        alert("Invalid email address");
        return false;
    }

    if(password== ""){
        alert("password is required")
        return false;
    }
    

    let kesanData={
        name,
        email,
        password,
    };

    Kesan.push(kesanData);
    window.localStorage.setItem("data", JSON.stringify(Kesan));
    window.location.href='login.html';

}
function login(){
    let loginEmail=document.getElementById("loginEmail").value;
    let loginPassword=document.getElementById("loginPassword").value;
    let getData=window.localStorage.getItem('data');
    getData=JSON.parse(getData);
     for (var i = 0; i <= getData.length; i++ ){

    if(getData[i].email === loginEmail && getData[i].password === loginPassword ){
    window.location.href='home.html';
    alert("Wellcome To Blog Page")
    }else{
    // window.location.href='home.html';
    alert("Wrong Email and Password")
    };
  };

}