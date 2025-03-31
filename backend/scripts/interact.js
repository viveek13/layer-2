const hre = require("hardhat");

async function main() {
    const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
    const Layer2 = await hre.ethers.getContractFactory("Layer2");
    const layer2 = await Layer2.attach(contractAddress);

    console.log("Depositing 1 ETH...");
    let tx = await layer2.deposit({ value: hre.ethers.parseEther("1") });
    await tx.wait();
    console.log("Deposit successful!");

    console.log("Checking balance...");
    let balance = await layer2.getBalance("YOUR_WALLET_ADDRESS");
    console.log("Balance:", hre.ethers.formatEther(balance), "ETH");

    console.log("Withdrawing 0.5 ETH...");
    tx = await layer2.withdraw(hre.ethers.parseEther("0.5"));
    await tx.wait();
    console.log("Withdrawal successful!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
