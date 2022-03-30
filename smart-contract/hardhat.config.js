require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("deploy", "Deploys the contracts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  // We get the contract to deploy
  const SaluminatorTelemetry = await hre.ethers.getContractFactory("contracts/SaluminatorTelemetry.sol:SaluminatorTelemetry");
  const saluminatorTelemetry = await SaluminatorTelemetry.deploy();

  await saluminatorTelemetry.deployed();

  console.log("SaluminatorTelemetry deployed to:", saluminatorTelemetry.address);

  const Saluminator = await hre.ethers.getContractFactory("contracts/Saluminator.sol:Saluminator");
  const saluminator = await Saluminator.deploy(saluminatorTelemetry.address);

  await saluminator.deployed();

  console.log("Saluminator deployed to:", saluminator.address);
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/IPPVhJXIYdTO8tXG0ShwZ3L6nPagifwk",
      accounts: [process.env.META_MASK_PRIVATE_KEY]
    }
  },
  solidity: "0.8.4",
};
