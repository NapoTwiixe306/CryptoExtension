# CryptoExtension

Voici le readme de CryptoExtension, ici vous y retrouverez les explication et de l'extension, et les tehcnologies utilisée

## Utilisations

pour utiliser l'extension, vous devez l'installer de puis le site,[CryptoExtension](https://cryptoextension.fr), ou bien depuis le google chrome [Chrome Store](https://chrome.google.com/webstore/detail/cryptoextension/jbmpclggkoleafimiibabhiikdfidihf/related)

## Explication du code
ici, je vais vous expliquer le code javascript utilisé pour afficher le prix des crypto choisie

```javascript
//ici je créer ma constante qui va ce nommer `button`et qui va récupérer l'id de `monBtn`
//qui ce trouve dans le code html
  const button = document.getElementById("monBtn")
//ici on va créer un eventListener qui va utilisé l'event `click`
//ceci fait office de `onCLick=()`en html
//la fonction sera en asynchrone
  button.addEventListener('click', async () => { 
//je créer ma constante qui va ce nommer `crypto`
//et qui va chercher l'id `crypto-select`qui ce trouve dans l'html
      const crypto = document.getElementById('crypto-select').value;
      //je créer ma constante `apiUrl`qui va chercher l'api de binance, idem pour les autres
      //qui elle on chaqu'une leur propres rôles
      const apiUrl = `https://api.binance.com/api/v3/ticker/price?symbol=${crypto}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const price = data.price;
      //la constance `priceEl'va chercher l'id `crypto-price`qui est dans l'html, pour afficher
      //pour aficher le prix de la crypto choisie
      const priceEl = document.getElementById('crypto-price');
      priceEl.innerHTML = `le ${crypto} est a ` +  price + '$';
  
  })
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
