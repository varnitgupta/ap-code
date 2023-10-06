function handleSubmit(e){
    e.preventDefault()
    let errors = {
        cfname:1,
        cemail:1,
        cmobile:1,
        cpassword: 1,
        ccnfpassword:1,
        ccnfpasswordm:1
    }
    let canSubmit = 1
    form = document.forms.form1
    let fname = form.fname.value
    let email = form.email.value
    let mobile = form.mobile.value
    let password = form.password.value
    let cnfpassword = form.cnfpassword.value
    let resume = form.resume
    if(fname.trim()==""){
        // alert("Name must be filled out")
        errors.cfname = 1
    }
    else{
        errors.cfname=0
    }
    if(email==""){
        // alert("email must be filled out")
        errors.cemail = 1
    }
    else{
        errors.cemail=0
    }
    
    if (!/^[0-9]{10}$/.test(mobile)) {
        // alert("Invalid mobile number. Please enter a 10-digit phone number.");
        errors.cmobile = 1
    }
    else{
        errors.cmobile=0
    }
    if(password==""){
        errors.cpassword = 1
    }
    else{
        errors.cpassword=0
    }
    if(cnfpassword==""){
        errors.ccnfpassword = 1
    }
    else{
        errors.ccnfpassword=0
    }
    if(password!==cnfpassword){
        errors.ccnfpasswordm = 1
    }
    else{
        errors.ccnfpasswordm=0
    }
    for(let i in errors){
        if(errors[i]==1){
            document.getElementById(String(i)).style.display = "block"          
            canSubmit = 0
        }
        else{
            document.getElementById(String(i)).style.display = "none"         
        }
    }

    if(canSubmit){
        let x=document.getElementById("fname").value
        let table = document.getElementById("data-table")
        let tr= document.createElement("tr")
        let td = document.createElement("td")
        td.innerText=x
        tr.appendChild(td)
        table.appendChild(tr)
        alert("Submitted")    
        return true
    } 
    return false


}