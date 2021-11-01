const user=document.querySelector('#username')
const pass=document.querySelector('#password')

const errormsg=document.querySelector('.msg')

const login=document.querySelector('.login button')

const emailwrong=document.querySelector('.emailerror ')
const passwrong=document.querySelector('.pass ')


login.addEventListener("click",validation);
const passerror=document.createElement('p')
const error=document.createElement('h4')
const emailerror=document.createElement('p')
function validation(e){
   e.preventDefault();
   
    if(user.value===''||pass.value===''){
        
        errormsg.appendChild(error)
    error.innerHTML="*please enter details ";
    error.style=" height:100%;width:80%;color:red;  display:flex;align-items:center;justify-content:center; font-size: .9rem;"

    setTimeout(()=>
        error.remove(),1500)
    

}else if(user.value!='karrothutanesh016@gmail.com'){
    emailwrong.appendChild(emailerror)
 emailerror.innerHTML="*password is wrong"

    setTimeout(()=>
    emailerror.remove(),1500)


}
else if(pass.value!='000'){
    passwrong.appendChild(passerror)
    passerror.innerHTML="*password is wrong"

    setTimeout(()=>
    passerror.remove(),1500)


}
}