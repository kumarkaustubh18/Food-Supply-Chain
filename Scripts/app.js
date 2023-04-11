const Web3 = require('web3');
const abi = require('path/to/ERC20TokenABI.json');

// create a new web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/<YOUR_INFURA_PROJECT_ID>'));

// set the contract address and create a new contract instance
const contractAddress = '0x123456789abcdef';
const erc20Contract = new web3.eth.Contract(abi, contractAddress);

// get the balance of an address
erc20Contract.methods.balanceOf('0xabcde12345').call((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`The balance is ${result}`);
  }
});

// transfer tokens from one address to another
const privateKey = '0x123456789abcdef'; // private key of the sender address
const senderAddress = '0xabcde12345'; // sender address
const receiverAddress = '0xfedcba54321'; // receiver address
const amount = '100'; // amount to transfer

// create a new transaction object
const txObj = {
  from: senderAddress,
  to: contractAddress,
  gas: 100000,
  gasPrice: '5000000000', // 5 gwei
  value: 0,
  data: erc20Contract.methods.transfer(receiverAddress, amount).encodeABI()
};

// sign the transaction with the private key and send it to the network
web3.eth.accounts.signTransaction(txObj, privateKey)
  .then(signedTx => {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
      .on('receipt', receipt => {
        console.log(`Transaction receipt: ${receipt}`);
      })
      .on('error', err => {
        console.error(err);
      });
  })
  .catch(err => {
    console.error(err);
  });
