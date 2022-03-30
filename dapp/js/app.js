const saluminatorTelemetryAbi = '[{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"batch","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"ph","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"temperature","type":"uint256"},{"internalType":"uint256","name":"ambientTemperature","type":"uint256"},{"internalType":"uint256","name":"humidity","type":"uint256"},{"internalType":"uint256","name":"ambientHumidity","type":"uint256"}],"indexed":false,"internalType":"struct SaluminatorTelemetry.Telemetry","name":"saluminatorTelemetry","type":"tuple"}],"name":"HACCPEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"batchTelemetry","outputs":[{"internalType":"uint256","name":"batch","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"ph","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"temperature","type":"uint256"},{"internalType":"uint256","name":"ambientTemperature","type":"uint256"},{"internalType":"uint256","name":"humidity","type":"uint256"},{"internalType":"uint256","name":"ambientHumidity","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"batch","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"ph","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"temperature","type":"uint256"},{"internalType":"uint256","name":"ambientTemperature","type":"uint256"},{"internalType":"uint256","name":"humidity","type":"uint256"},{"internalType":"uint256","name":"ambientHumidity","type":"uint256"}],"internalType":"struct SaluminatorTelemetry.Telemetry[]","name":"telemetry","type":"tuple[]"}],"name":"ingestTelemetry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"batch","type":"uint256"}],"name":"viewTelemetryForBatch","outputs":[{"components":[{"internalType":"uint256","name":"batch","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"ph","type":"uint256"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"temperature","type":"uint256"},{"internalType":"uint256","name":"ambientTemperature","type":"uint256"},{"internalType":"uint256","name":"humidity","type":"uint256"},{"internalType":"uint256","name":"ambientHumidity","type":"uint256"}],"internalType":"struct SaluminatorTelemetry.Telemetry[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]'
const saluminatorAbi = '[{"inputs":[{"internalType":"address","name":"telemetryContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'

const telemetryContractAddress = "0xD7D24a76926cfCBa905aA2Fd4545AE57DD265483";
const saluminatorContractAddress = "0x8911Eb90182Ec47155dc6A2D6884CCCa50006A45";

let signer;
let saluminatorTelemetry;
let saluminator;

async function connectWallet() {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    let provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    signer = provider.getSigner();

    saluminatorTelemetry = new ethers.Contract(telemetryContractAddress, saluminatorTelemetryAbi, signer);
    saluminator = new ethers.Contract(saluminatorContractAddress, saluminatorAbi, signer);

    connectWalletBtn.setAttribute("disabled", true);
}

async function sendTelemetry() {
    let batch = document.getElementById("telemetry-batch").value;
    let timestamp = document.getElementById("telemetry-timestamp").value;
    let ph = document.getElementById("telemetry-ph").value;
    let temperature = document.getElementById("telemetry-temperature").value;
    let weight = document.getElementById("telemetry-weight").value;
    let ambientTemperature = document.getElementById("telemetry-ambientTemperature").value;
    let humidity = document.getElementById("telemetry-humidity").value;
    let ambientHumidity = document.getElementById("telemetry-ambientHumidity").value;
    let batchTelemetry = {batch: batch, timestamp: timestamp, ph: ph, temperature: temperature, weight: weight, ambientTemperature: ambientTemperature, humidity: humidity, ambientHumidity: ambientHumidity}
    document.getElementById("send-telemetry-output").innerHTML = "Waiting for TX";
    let tx = await saluminatorTelemetry.ingestTelemetry([batchTelemetry]);
    let txReceipt = await tx.wait();
    document.getElementById("send-telemetry-output").innerHTML = "TransactionHash: " + txReceipt.transactionHash;
    document.getElementById("iotc-Ph").value = ph;
    document.getElementById("iotc-Weight").value = weight;
    document.getElementById("iotc-ChamberTemperature").value = temperature;
    document.getElementById("iotc-ChamberHumidity").value = humidity;
    document.getElementById("iotc-AmbientTemperature").value = ambientTemperature;
    document.getElementById("iotc-AmbientHumidity").value = ambientHumidity;
    document.getElementById("iotc-TxAddress").value = txReceipt.transactionHash;

}

async function viewTelemetry() {
    let batch = document.getElementById("view-telemetry-batch").value;
    let telemetry = await saluminatorTelemetry.viewTelemetryForBatch(batch);
    
    document.getElementById("output-telemetry-batch").innerHTML = "Batch Number: " + batch;
    document.getElementById("output-telemetry-timestamp").innerHTML = "Timestamp: ";
    document.getElementById("output-telemetry-ph").innerHTML ="pH: ";
    document.getElementById("output-telemetry-temperature").innerHTML = "Temperature: ";
    document.getElementById("output-telemetry-weight").innerHTML = "Weight: ";
    document.getElementById("output-telemetry-ambient-temperature").innerHTML = "AmbientTemperature: ";
    document.getElementById("output-telemetry-humidity").innerHTML = "Humidity: ";
    document.getElementById("output-telemetry-ambient-humidity").innerHTML = "AmbientHumidity: ";

    for (let i = 0; i < telemetry.length; i++) {
        if (i != telemetry.length-1) {
            document.getElementById("output-telemetry-timestamp").innerHTML += telemetry[i].timestamp.toString() + ", ";
            document.getElementById("output-telemetry-ph").innerHTML += telemetry[i].ph.toString() + ", ";
            document.getElementById("output-telemetry-temperature").innerHTML += telemetry[i].temperature.toString() + ", ";
            document.getElementById("output-telemetry-weight").innerHTML += telemetry[i].weight.toString() + ", ";
            document.getElementById("output-telemetry-ambient-temperature").innerHTML += telemetry[i].ambientTemperature.toString() + ", ";
            document.getElementById("output-telemetry-humidity").innerHTML += telemetry[i].humidity.toString() + ", ";
            document.getElementById("output-telemetry-ambient-humidity").innerHTML += telemetry[i].ambientHumidity.toString() + ", ";
        } else {
            document.getElementById("output-telemetry-timestamp").innerHTML += telemetry[i].timestamp.toString();
            document.getElementById("output-telemetry-ph").innerHTML += telemetry[i].ph.toString();
            document.getElementById("output-telemetry-temperature").innerHTML += telemetry[i].temperature.toString();
            document.getElementById("output-telemetry-weight").innerHTML += telemetry[i].weight.toString();
            document.getElementById("output-telemetry-ambient-temperature").innerHTML += telemetry[i].ambientTemperature.toString();
            document.getElementById("output-telemetry-humidity").innerHTML += telemetry[i].humidity.toString();
            document.getElementById("output-telemetry-ambient-humidity").innerHTML += telemetry[i].ambientHumidity.toString();
        }
    }
}

async function mint() {
    let batch = document.getElementById("mint-token-batch").value;
    let address = await signer.getAddress();
    let token = await saluminator.safeMint(address, batch, "https://saluminator.blob.core.windows.net/saluminator/MicrosoftTeams-image%20(1).png");
    document.getElementById("mint-output").innerHTML = "Waiting for TX";
    let txReceipt = await token.wait();
    document.getElementById("mint-output").innerHTML = "TransactionHash: " + txReceipt.transactionHash;
}

async function viewToken() {
    let tokenId = document.getElementById("view-token").value;
    let token = await saluminator.tokenURI(tokenId);
    let parse = JSON.parse(token);
    document.getElementById("view-token-output").innerHTML = "<img src=\"" + parse.image + "\" class=\"img-fluid p-3\"></img>";
    document.getElementById("view-token-output").innerHTML += "<pre>" + JSON.stringify(parse, undefined, 4) + "</pre>";
}

async function initialize() {
    if (window.ethereum) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        let accounts = await provider.listAccounts();

        if (accounts.length > 0) {
            connectWalletBtn.setAttribute("disabled", true);
            // The MetaMask plugin also allows signing transactions to
            // send ether and pay to change state within the blockchain.
            // For this, you need the account signer...
            signer = provider.getSigner();
        
            saluminatorTelemetry = new ethers.Contract(telemetryContractAddress, saluminatorTelemetryAbi, signer);
            saluminator = new ethers.Contract(saluminatorContractAddress, saluminatorAbi, signer);
        }
    }
}

async function registerHACCPReporting() {
    data = {
        'Ph': document.getElementById("iotc-Ph").value,
        'Weight': document.getElementById("iotc-Weight").value,
        'ChamberTemperature': document.getElementById("iotc-ChamberTemperature").value,
        'ChamberHumidity': document.getElementById("iotc-ChamberHumidity").value,
        'AmbientTemperature': document.getElementById("iotc-AmbientTemperature").value,
        'AmbientHumidity': document.getElementById("iotc-AmbientHumidity").value,
        'TxAddress': document.getElementById("iotc-TxAddress").value
    };
    let query = ""
    for (let d in data)
        query += encodeURIComponent(d) + '=' + 
        encodeURIComponent(data[d]) + '&'
    
    let url = "/api/RegisterHACCPReporting?" + query.slice(0, -1);
    console.log(url);

    await fetch(url)
    document.querySelector("#iotCRegisterSend_area").innerHTML = "Done";
  }

initialize();
console.log("App.js Initialized");

let connectWalletBtn = document.getElementById("connect-wallet");
connectWalletBtn.addEventListener("click", connectWallet);

let iotCRegisterSendBtn = document.getElementById("iotc-register-send");
iotCRegisterSendBtn.addEventListener("click", registerHACCPReporting);

let sendTelemetryBtn = document.getElementById("send-telemetry-button");
sendTelemetryBtn.addEventListener("click", sendTelemetry);

let viewTelemetryBtn = document.getElementById("view-telemetry-button");
viewTelemetryBtn.addEventListener("click", viewTelemetry);

let mintTokenBtn = document.getElementById("mint-token-button");
mintTokenBtn.addEventListener("click", mint);

let viewTokenBtn = document.getElementById("view-token-button");
viewTokenBtn.addEventListener("click", viewToken);

console.log("Completed Button Binding");
