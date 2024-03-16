require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://rpc.ankr.com/eth_sepolia`,
      accounts: [vars.get("WALLET_PK")],
    },
  },
};
