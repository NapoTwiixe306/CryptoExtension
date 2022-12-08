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
  const button = document.getElementById("monBtn")
  button.addEventListener('click', async () => { 
      //selectElement = document.querySelector('#crypto-select')
      const crypto = document.getElementById('crypto-select').value;
  
      // Use the Binance API to fetch the current price of the specified cryptocurrency
      const apiUrl = `https://api.binance.com/api/v3/ticker/price?symbol=${crypto}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const price = data.price;
    
      // Update the HTML element with the id "crypto-price" with the current price
      const priceEl = document.getElementById('crypto-price');
      priceEl.innerHTML = `le ${crypto} est a ` +  price + '$';
  
      //output = selectElement.options[selectElement.selectedIndex].value;
      //document.querySelector('#crypto-price').textContent = output;
  })
  