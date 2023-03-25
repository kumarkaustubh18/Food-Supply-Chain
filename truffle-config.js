const HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "asthma author clarify arrange begin photo include kind long hobby mechanic return";

module.exports = {
  networks: {

    development: {

      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },

    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/a434a2645e754e8a898d4f32bb91e075");
      },
      network_id: 3,
      gas: 4500000,
      gasPrice: 10000000000,
    },

    live: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/a434a2645e754e8a898d4f32bb91e075");
      },
      network_id: 1,
      gas: 7500000,
      gasPrice: 10000000000,
    }

  }
};