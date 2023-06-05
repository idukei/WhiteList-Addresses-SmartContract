// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so whitelist_Contract here is a factory for instances of our Whitelist contract.
*/
  const whitelist_Contract = await ethers.getContractFactory("Whitelist");//Factory for create contract instances

  // deploy the contract
  const deployedContract = await whitelist_Contract.deploy(10);//Deploy witch max 10 Address

  // print the address of the deployed contract
  console.log("Whitelist Contract Address:", deployedContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
