/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// affichage du choix depuis la list qui est dans l'html (ligne 44)
const el = document.querySelector("#monBtn");
el.addEventListener("click", myFunc, false);

function myFunc(event){
    event.preventDefault();
    selectElement = document.querySelector('#money');
        output = selectElement.options[selectElement.selectedIndex].value;
        document.querySelector('#test').textContent = output;
}