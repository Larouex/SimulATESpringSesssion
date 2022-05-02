[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)&nbsp;<a href="https://www.open-fermentation-project.org/"><img src="https://img.shields.io/badge/OFS v1-Open%20Fermentation%20Project%20v1-yellowgreen"></a>&nbsp;<a href="https://apps.azureiotcentral.com/">
<img src="https://img.shields.io/badge/Azure IoT Central-Open%20Fermentation%20Project%20v1-blue"></a>&nbsp;<a href="https://www.saluminator.com/"></a>&nbsp;![License](https://img.shields.io/badge/Microsoft%20Public%20License-MS--PL-orange)&nbsp;![Etheruem](https://img.shields.io/badge/etheruem-V2-green)&nbsp;![Solidity](https://img.shields.io/badge/solidity-0.8.*-green)


# SimulATE Spring Sesssion
Speakers: Larry W Jordan Jr & Mark Huang

## Overview of the Smart Contract Development

# Getting Started

- Install `npm`
- Run `npm install` in `SimulATESpringSesssion\smart-contract\`
- Run `npx hardhat compile` to verify compilation of smart contracts
- Run `npx hardhat test` to run the tests

# Deploying

- Add a `.env` file to `SimulATESpringSesssion\smart-contract`
- Add this line: `META_MASK_PRIVATE_KEY=<your-private-key>`
- Run `npx hardhat deploy --network <network-name>`