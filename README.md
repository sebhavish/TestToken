# Test Token Smart Contract Using Hardhat

## Steps to deploy this contract on Sepolia testnet

- Clone this project
- Install the required dependencies using this command - `npm install`
- Set the environment variable `WALLET_PK` with deployer's private key -
  ```
  npx hardhat vars set WALLET_PK
  ```
- Deploy your contract on sepolia network -
  ```
  npx hardhat ignition deploy ./ignition/modules/TestToken.js --network sepolia
  ```

> [!NOTE]
> Your wallet account should have enough gas fee to cover deployment
