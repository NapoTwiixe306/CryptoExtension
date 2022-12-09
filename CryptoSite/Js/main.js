// Check if MetaMask is installed and setup the login button
function toggleButton() {
    // Get the login button and user wallet elements
    const loginButton = document.getElementById('loginButton');
    const userWallet = document.getElementById('userWallet');
  
    if (!window.ethereum) {
      // MetaMask is not installed
      loginButton.innerText = "MetaMask n'est pas installé";
      loginButton.classList.remove('bg-purple-500', 'text-white');
      loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed');
      return false;
    }
  
    // Add an event listener to the login button to handle the login
    loginButton.addEventListener('click', loginWithMetaMask);
  }
  
  // Login to MetaMask
  async function loginWithMetaMask() {
    // Request accounts from MetaMask
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
      .catch((e) => {
        // Log any errors that occurred
        console.error(e.message);
      });
  
    // Set the user wallet address and update the UI
    document.getElementById("test").innerHTML = window.userWalletAddress = accounts[0];
    loginButton.innerText = 'Se Deconnecter de Metamask';
  
    // Remove the login event listener and add a logout event listener
    loginButton.removeEventListener('click', loginWithMetaMask);
    setTimeout(() => {
      loginButton.addEventListener('click', signOutOfMetaMask);
    });
  }
  
  // Logout from MetaMask
  function signOutOfMetaMask() {
    // Clear the user wallet address and update the UI
    window.userWalletAddress = null;
    userWallet.innerText = '';
    loginButton.innerText = 'Se Connecter avec MetaMask';
    document.getElementById("test").innerHTML = window.userWalletAddress = null;
  
    // Remove the logout event listener and add a login event listener
    loginButton.removeEventListener('click', signOutOfMetaMask);
    setTimeout(() => {
      loginButton.addEventListener('click', loginWithMetaMask);
    });
  }
  
  // Initialize the application
  window.addEventListener('DOMContentLoaded', () => {
    toggleButton();
  });
  
  // LIGHT-MODE
  const chk = document.getElementById('chk');
  chk.addEventListener('change', () => {
    document.body.classList.toggle('light');
  });