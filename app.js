const hamMenu = document.querySelector('#hamburgerIcon');
const backdrop = document.querySelector('.backdrop');
const navMenu = document.querySelector('#navMenu');

let mobileMenuVisible = false;
hamMenu.addEventListener('click', ()=>{
    if(mobileMenuVisible){
        backdrop.style.display = 'none';
        navMenu.style.display = 'none';
        hamMenu.src = 'images/icon-hamburger.svg';
        mobileMenuVisible = false;
    }else{
        backdrop.style.display = 'block';
        navMenu.style.display = 'block';
        hamMenu.src = 'images/icon-close.svg';
        mobileMenuVisible = true;
    }
});


function validateEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailPattern.test(email);
    
}
const subscribeButton = document.querySelector('#subscribeButton');
const invalid = document.querySelector('.invalid');
const valid = document.querySelector('.valid');

subscribeButton.addEventListener('click', ()=>{
    const inputEmail = document.querySelector('#emailInput');
    if(validateEmail(inputEmail.value)){
        console.log('successful');
        valid.style.display = 'block';
        invalid.style.display = 'none';
        inputEmail.style.color = 'hsl(228, 39%, 23%)';
    }else{
        console.log('not valid');
        valid.style.display = 'none';
        invalid.style.display = 'block';
        inputEmail.style.color = 'hsl(12, 88%, 59%)';
    }
})