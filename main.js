/*{
    let form = document.getElementsByClassName('formCrypto');
    //form.addEventListener('submit', handleFormSubmit);


    async function handleFormSubmit(event){
        e.preventDefault();
        let nom = event.target.crypto.value;
        let names = await getData();
        buildCryptoCard(names[nom]);
        e.target.crypto.value = ''
    }

    form[0].addEventListener('submit', handleFormSubmit);

    async function getData(){
        try{
            let response = await fetch("http://api.coinlayer.com/list?access_key=628cc513f752c4e21a6b2d6d071c8e10");
            let data = await response.json();
            console.log(data.crypto);
            return data.crypto;
        } catch {
            console.error(err);
        };
    }


    function buildCryptoCard (cryptoObj) {
        // Create the card div
        const card = document.createElement('div');
        card.className = 'card';

        // Create a top image
        const image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = cryptoObj.icon_url;
        // Add image as a child to the card div
        card.append(image);

        // Create card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        //Create crypto Symbol
        const cryptoSymbol = document.createElement('h5');
        cryptoSymbol.className = 'crypto-symbol'
        cryptoSymbol.innerHTML = cryptoObj.symbol;

        // Create crypto name and population elements
        const cryptoTitle = document.createElement('h5');
        cryptoTitle.className = 'card-title'
        cryptoTitle.innerHTML = cryptoObj.name_full;

        const usdPrice = document.createElement('p');
        usdPrice.className = 'card-text'
        usdPrice.innerHTML = `${cryptoObj.max_supply} USD`;

        // Append Pricen symbol and title to card body
        cardBody.append(cryptoTitle);
        cardBody.append(usdPrice);
        cardBody.append(cryptoSymbol);

        // Add card body to card div
        card.append(cardBody);

        // Create our column for the row
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3'

        // Add the card to the column
        col.append(card)

        // Get the crypto display row
        const cryptoDisplay = document.getElementById('cryptoDisplay');

        // Add the new column to our display
        cryptoDisplay.append(col);
    }
}
*/

// Get the crypto from the form and display info on page
{
    // Grab the form
    let form = document.getElementById('formCrypto');
    // Create a function to handle submit event
    async function handleSubmit(e){
        e.preventDefault();
        // Get the input data from the form
        let nom = e.target.crypto.value;
        // Get crypto info from the input data
        let names = await getInfo();
        // Build and add crypto card to display
        buildCryptoCard(names[nom])
        e.target.crypto.value = '';
    }

    // Add handleSubmit function as listener to submit even on form
    form.addEventListener('submit', handleSubmit);


    // Function that will get the data from the crypt API
    async function getInfo () {
        try {
            let response = await fetch("http://api.coinlayer.com/list?access_key=628cc513f752c4e21a6b2d6d071c8e10");
            let data = await response.json();
            console.log(data.crypto);
            return data.crypto;
        } catch {
            console.error(err);
        }
    }    

    // Function that will create crypto card and add to country display div
    function buildCryptoCard (cryptoObj) {
        // Create the card div
        const card = document.createElement('div');
        card.className = 'card';
    
        // Create a top image
        const image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = cryptoObj.icon_url;
        // Add image as a child to the card div
        card.append(image);
    
        // Create card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
    
        //Create crypto Symbol
        const cryptoSymbol = document.createElement('h5');
        cryptoSymbol.className = 'crypto-symbol'
        cryptoSymbol.innerHTML = cryptoObj.symbol;
    
        // Create crypto name and population elements
        const cryptoTitle = document.createElement('h5');
        cryptoTitle.className = 'card-title'
        cryptoTitle.innerHTML = cryptoObj.name_full;
    
        const usdPrice = document.createElement('p');
        usdPrice.className = 'card-text'
        usdPrice.innerHTML = `${cryptoObj.max_supply} USD`;
    
        // Append Price, symbol and title to card body
        cardBody.append(cryptoTitle);
        cardBody.append(usdPrice);
        cardBody.append(cryptoSymbol);
    
        // Add card body to card div
        card.append(cardBody);
    
        // Create our column for the row
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3 mb-3'
    
        // Add the card to the column
        col.append(card)
    
        // Get the crypto display row
        const cryptoDisplay = document.getElementById('cryptoDisplay');
    
        // Add the new column to our display
        cryptoDisplay.append(col);
    }
}