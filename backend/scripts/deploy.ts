import { ethers } from "hardhat";

async function main() {
    const Layer2 = await ethers.getContractFactory("Layer2");
    const layer2 = await Layer2.deploy();

    await layer2.waitForDeployment();
    console.log("Layer2 deployed to:", await layer2.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
