
let httpRequest = new XMLHttpRequest(); // asynchronous request
httpRequest.open("GET", "./abi/SaleRoyaltyAbi.json", true);
httpRequest.send();
httpRequest.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      	// when the request has completed
        saleRoyaltyabi = JSON.parse(this.response);
    }
});

let httpRequest1 = new XMLHttpRequest(); // asynchronous request
httpRequest1.open("GET", "./abi/CPNKFactoryAbi.json", true);
httpRequest1.send();
httpRequest1.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      	// when the request has completed
        mintabi = JSON.parse(this.response);
    }
});
let account=[] ;
async function mintFunction(){
  console.log(typeof window.ethereum);
  if (typeof window.ethereum === 'undefined') {
    location.href('https://metamask.io/')
    console.log('error metamask , install metamask please.');
  }else if(account.length==0){
    account = await window.ethereum.request({ method: 'eth_requestAccounts' });
  }else{
    let mint_amount = document.getElementById('mintAmount').value ;
    console.log(mint_amount);
  
    let provider = ethers.getDefaultProvider();
    let contractAddress_saleRoyalty = "" ;
    let contractAddress_mint = "" ;
    let  contract = new ethers.Contract(contractAddress_saleRoyalty, saleRoyaltyabi, provider);
    await contract.setSaleRewards() ;
    contract = new ethers.contract(contractAddress_mint , mintabi , provider ) ;
    await contract.mintCPNK(mint_amount) ;
  }
}

window.addEventListener('load', async (event) => {
  // const web3Warning = document.getElementById('web3-warning');
  console.log('fawef') ;
  if (typeof window.ethereum === 'undefined') {
    console.error('Client does not have an active Web3 provider or the example app is not being run from an HTTP server.');
    console.log('Go here to install MetaMask: https://metamask.io/');
    // web3Warning.classList.remove('hidden');
  }

  await window.ethereum.request({ method: 'eth_requestAccounts' }); // enable ethereum

});