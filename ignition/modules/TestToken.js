const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// ignition module to deploy TestToken contract
module.exports = buildModule("TestToken", (m) => {
  const testToken = m.contract("TestToken");
  return { testToken };
});
