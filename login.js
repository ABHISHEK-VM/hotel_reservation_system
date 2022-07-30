function validate(){  
    var password=document.form-modal.psw.value;  
    var username=document.form-modal.uname.value;  
    

    var name = "admin@123";
    var pass = "12345";

    if(username == name){  
        return true;  
        }  
        else{  
        alert("Enter the correct username");  
        return false;  
        }  


    if(password== pass){  
    return true;  
    }  
    else{  
    alert("Incorrect password");  
    return false;  
    }  
    }  