const { expect } = require("chai");
const { Contract } = require("ethers");
const { ethers } = require("hardhat");

describe("SaluminatorTelemetry", function () {
    it("Should return telemetry", async function () {
        const SaluminatorTelemetry = await ethers.getContractFactory("contracts/SaluminatorTelemetry.sol:SaluminatorTelemetry");
        const saluminatorTelemetry = await SaluminatorTelemetry.deploy();
        await saluminatorTelemetry.deployed();

        let numOfBatches = 5;
        let numOfTelemetry = 10;
        // Generate telemetry for X batch with Y telemetry
        for (let i = 0; i < numOfBatches; i++) {
            let telemetry = generateTelemetry(i, numOfTelemetry);
            await saluminatorTelemetry.ingestTelemetry(telemetry, {gasLimit: 30000000});
        }

        // Makes sure that each batch has the set number of telemetry
        for (let i = 0; i < numOfBatches; i++) {
            let batch = await saluminatorTelemetry.viewTelemetryForBatch(i);
            expect(batch.length).to.equal(numOfTelemetry);
        }
    });

    it("Should return valid tokenUri", async function () {
        const SaluminatorTelemetry = await ethers.getContractFactory("contracts/SaluminatorTelemetry.sol:SaluminatorTelemetry");
        const Saluminator = await ethers.getContractFactory("contracts/Saluminator.sol:Saluminator");
        const saluminatorTelemetry = await SaluminatorTelemetry.deploy();
        const saluminator = await Saluminator.deploy(saluminatorTelemetry.address);
        const addrList = await ethers.getSigners();
        
        await saluminatorTelemetry.deployed();
        await saluminator.deployed();

        let numOfBatches = 5;
        let numOfTelemetry = 10;
        // Generate telemetry for X batch with Y telemetry
        for (let i = 0; i < numOfBatches; i++) {
            let telemetry = generateTelemetry(i, numOfTelemetry);
            await saluminatorTelemetry.ingestTelemetry(telemetry, {gasLimit: 30000000});
        }

        for (let i = 0; i < addrList.length; i++) {
            await saluminator.connect(addrList[0]).safeMint(addrList[i].address, i, "randommetadata");

            // Everyone minted one token each
            expect(await saluminator.balanceOf(addrList[i].address)).to.equal(1);

            // Make sure that they minted one token
            expect(await saluminator.ownerOf(i)).to.equal(addrList[i].address);
        }

        for (let i = 0; i < numOfBatches; i++) {
            await saluminator.tokenURI(i);
        }
    });
});

// Test helper functions
function generateTelemetry(batchNumber, numOfTelemetry) {
    let telemetry = [];
    for (let j = 0; j < numOfTelemetry; j++) {
        telemetry.push({"batch": batchNumber, "timestamp": Date.now(), "ph": getRandomInt(0, 9), "temperature": getRandomInt(0, 50), "weight": getRandomInt(0, 100), "ambientTemperature": getRandomInt(0,100), "humidity": getRandomInt(0,100), "ambientHumidity": getRandomInt(0,100)});
    }
    return telemetry;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}