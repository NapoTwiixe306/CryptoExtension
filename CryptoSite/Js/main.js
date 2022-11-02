//connection metamask
const loginButton = document.getElementById('loginButton')
const userWallet = document.getElementById('userWallet')

function toggleButton() {
    if (!window.ethereum) {
        loginButton.innerText = "MetaMask n'est pas installé";
        loginButton.classList.remove('bg-purple-500', 'text-white')
        loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
        return false
    }
    loginButton.addEventListener('click', loginWithMetaMask)
}

async function loginWithMetaMask() {
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
        .catch((e) => {
            console.error(e.message)

        })
    document.getElementById("test").innerHTML = window.userWalletAddress = accounts[0]
    loginButton.innerText = 'Se Deconnecter de Metamask'
    loginButton.removeEventListener('click', loginWithMetaMask)
    setTimeout(() => {
        loginButton.addEventListener('click', signOutOfMetaMask)
    })
}

function signOutOfMetaMask() {
    window.userWalletAddress = null
    userWallet.innerText = ''
    loginButton.innerText = 'Se Connecter avec MetaMask'
    document.getElementById("test").innerHTML = window.userWalletAddress = null

    loginButton.removeEventListener('click', signOutOfMetaMask)
    setTimeout(() => {
        loginButton.addEventListener('click', loginWithMetaMask)
    })
}

window.addEventListener('DOMContentLoaded', () => {
    toggleButton()
});

//Send Mail



// LIGHT-MODE
const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
    document.body.classList.toggle('light');
})
