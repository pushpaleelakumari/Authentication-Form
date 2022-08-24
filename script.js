////////////////////////////////// page linking and acceseries //////////////////////////////////////////

function homePage(){
    document.getElementById('sign-up').style.display = 'none'
    document.getElementById('log-in').style.display = 'none'
    document.getElementById('jumbotron-display').style.display = 'block'
    document.getElementById('home-btn').classList.add('active')
    document.getElementById('login-btn').classList.remove('active')
    document.getElementById('signup-btn').classList.remove('active')
}

function signUpPage(){
    document.getElementById('sign-up').style.display = 'block'
    document.getElementById('log-in').style.display = 'none'
    document.getElementById('jumbotron-display').style.display = 'none'
    document.getElementById('signup-btn').classList.add('active')
    document.getElementById('login-btn').classList.remove('active')
    document.getElementById('home-btn').classList.remove('active')
}

function loginPage(){
    document.getElementById('log-in').style.display = 'block'
    document.getElementById('sign-up').style.display = 'none'
    document.getElementById('jumbotron-display').style.display = 'none'
    document.getElementById('login-btn').classList.add('active')
    document.getElementById('signup-btn').classList.remove('active')
    document.getElementById('home-btn').classList.remove('active')
}



function resetSignupFields(){
    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phoneNumber').value = ''
    document.getElementById('password').value = ''
    document.getElementById('confirmPassword').value = ''
}

function resetLoginFields(){
    document.getElementById('loginEmail').value = ''
    document.getElementById('loginPassword').value = ''
}

function passwordVisibility1(){
    let password1 = document.getElementById('password')
    let checkbox1 = document.getElementById('passwordsee1')
    
    if(password1.type ==='password')
    {
        password1.type = 'text'
    }
    else{
        password1.type = 'password'
    }


}

function passwordVisibility2(){
    let password2 = document.getElementById('confirmPassword')
    let checkbox2 = document.getElementById('passwordsee2')

    if(password2.type ==='password')
     {
         password2.type = 'text'
     }
     else{
         password2.type = 'password'
     }
}

function passwordVisibility3(){
    let password3 = document.getElementById('loginPassword')
    let checkbox3 = document.getElementById('passwordsee3')

    if(password3.type ==='password')
    {
        password3.type = 'text'
    }
    else{
        password3.type = 'password'
    }
}

/////////////////////////////////////////// Actual codes ///////////////////////////////////////



let encryptionRule = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': ''
  }
  
  function validateSignup(){
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let phoneNumber = document.getElementById('phoneNumber').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value
    let tnC = document.getElementById('tnC')
    let validationString = /^[A-Za-z]+$/
    let valiationPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
    let error = false
   
    if(firstName && firstName.length <=20 && firstName.match(validationString)){
        document.getElementById('firstname-valid').style.display = 'block'
        document.getElementById('firstname-invalid').style.display = 'none'
    }
    else{
        document.getElementById('firstname-invalid').style.display = 'block'
        document.getElementById('firstname-valid').style.display = 'none'
        error = true
    }

    if(lastName && lastName.length <=20 && lastName.match(validationString)){
        document.getElementById('lastname-valid').style.display = 'block'
        document.getElementById('lastname-invalid').style.display = 'none'
    }
    else{
        document.getElementById('lastname-invalid').style.display = 'block'
        document.getElementById('lastname-valid').style.display = 'none'
        error = true
    }

    if(email && email.length >= 8 && email.includes('.') && email.includes('@') && email[email.indexOf('.')+1]!='.' && email.slice(email.lastIndexOf('.')+1).length >= 2 && (email.includes('gmail') || email.includes('email') || email.includes('mail') || email.includes('yahoo') || email.includes('hotmail')))
    {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }

    if(phoneNumber && phoneNumber.length == 10)
    {
        document.getElementById('phone-valid').style.display = 'block'
        document.getElementById('phone-invalid').style.display = 'none'
    }
    else{
        document.getElementById('phone-invalid').style.display = 'block'
        document.getElementById('phone-valid').style.display = 'none'
        error = true
    }

    if(password && password.match(valiationPassword)){
        document.getElementById('password-valid').style.display = 'block'
        document.getElementById('password-invalid').style.display = 'none'
    }
    else{
        document.getElementById('password-invalid').style.display = 'block'
        document.getElementById('password-valid').style.display = 'none'
        error = true
    }

    if(confirmPassword && confirmPassword == password){
        document.getElementById('confirm-password-valid').style.display = 'block'
        document.getElementById('confirm-password-invalid').style.display = 'none'
    }
    else{
        document.getElementById('confirm-password-invalid').style.display = 'block'
        document.getElementById('confirm-password-valid').style.display = 'none'
        error = true
    }

    if(tnC.checked){
        document.getElementById('tnC-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnC-invalid').style.display = 'block'
        error = true
    }

    if(!error)
    {
        signup()
        document.getElementById('firstName').value = ''
        document.getElementById('lastName').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phoneNumber').value = ''
        document.getElementById('password').value = ''
        document.getElementById('confirmPassword').value = ''
        document.getElementById('tnC').checked = false

        document.getElementById('firstname-valid').style.display = 'none'
        document.getElementById('lastname-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('phone-valid').style.display = 'none'
        document.getElementById('password-valid').style.display = 'none'
        document.getElementById('confirm-password-valid').style.display = 'none'
    }
    
}


  const encrypt = (password)=>{
    let encryptPassword = ''
    for (const letter of password) {
        encryptPassword = encryptPassword + encryptionRule[letter]
    }
    return encryptPassword
  }

  const decrypt = (encryptPassword)=>{
    let decryptPassword = ''
    for (const letter of encryptPassword) {
        decryptPassword = decryptPassword + encryptionRule[letter]
    }
    return decryptPassword
  }

const dbUsers = []

function signup(){
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let phoneNumber = document.getElementById('phoneNumber').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value
    let userDetails = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password:encrypt(password)
        // password
    }
    dbUsers.push(userDetails)
    resetSignupFields()
    Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: 'You signed up succesfully',
        width:400,
        timer:2000
      })

      loginPage()
    // return
}
    
function validateLogin(){
    let loginEmail  = document.getElementById('loginEmail').value
    let loginPassword = document.getElementById('loginPassword').value
    let valiationLoginPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let tnCLogin = document.getElementById('tnC-login')
    let errorLogin = false

    if(loginEmail && loginEmail.length >= 8 && loginEmail.includes('.') && loginEmail.includes('@') && loginEmail[loginEmail.indexOf('.')+1]!='.' && loginEmail.slice(loginEmail.lastIndexOf('.')+1).length >= 2 && (loginEmail.includes('gmail') || loginEmail.includes('email') || loginEmail.includes('mail') || loginEmail.includes('yahoo') || loginEmail.includes('hotmail')))
    {
        document.getElementById('email-login-valid').style.display = 'block'
        document.getElementById('email-login-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-login-invalid').style.display = 'block'
        document.getElementById('email-login-valid').style.display = 'none'
        errorLogin = true
    }

    if(loginPassword && loginPassword.match(valiationLoginPassword)){
        document.getElementById('password-login-valid').style.display = 'block'
        document.getElementById('password-login-invalid').style.display = 'none'
    }
    else{
        document.getElementById('password-login-invalid').style.display = 'block'
        document.getElementById('password-login-valid').style.display = 'none'
        errorLogin = true
    }

    if(tnCLogin.checked)
    {
        document.getElementById('tnC-login-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnC-login-invalid').style.display = 'block' 
    }

    if(!errorLogin){
        login()
        document.getElementById('loginEmail').value = ''
        document.getElementById('loginPassword').value = ''
        document.getElementById('tnC-login').checked = false

        document.getElementById('email-login-valid').style.display = 'none'
        document.getElementById('password-login-valid').style.display = 'none'
    }
}

function login(){
    let loginEmail  = document.getElementById('loginEmail').value
    let loginPassword = document.getElementById('loginPassword').value
    let authenticateUser = dbUsers.find(function(user){
        if(user.email === loginEmail && decrypt(user.password) === loginPassword)
        return user
    })
    if(authenticateUser){
        // console.log(authenticateUser.firstName)
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You logged in succesfully',
            width:400,
            timer:2000
          })
          let loginUser = `${authenticateUser.firstName} ${authenticateUser.lastName}`
        //   console.log(loginUser)
          document.getElementById('sign-up').style.display = 'none'
          document.getElementById('log-in').style.display = 'none'
          document.getElementById('jumbotron-display').style.display = 'none'
          document.getElementById('userName').innerHTML = `Welcome , ${loginUser}`
          document.getElementById('home-btn').classList.add('active')
          document.getElementById('login-btn').classList.remove('active')
          document.getElementById('signup-btn').classList.remove('active')
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops..!',
            text: 'Please enter valid details!',
            width:400,
            timer:2000
          })
    }
    resetLoginFields()
}   

