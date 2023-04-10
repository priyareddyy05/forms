function loginnow(){

    let username=document.getElementById('username').value
    let password=document.getElementById('password').value
    // console.log(username)
    //  console.log(password)
    if(username=='priyareddy'&& password=='priya'){
        open('fb.html')
    }
    else{
        alert('this is not your account')
    }

}