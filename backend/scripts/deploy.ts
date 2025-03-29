const hre = require("hardhat");

async function main() {
  const Layer2 = await hre.ethers.getContractFactory("Layer2");
  const layer2 = await Layer2.deploy();
  await layer2.deployed();
  console.log("Layer2 deployed to:", layer2.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
