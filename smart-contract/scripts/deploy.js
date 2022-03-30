// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
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
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
