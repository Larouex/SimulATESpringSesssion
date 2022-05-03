[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)&nbsp;<a href="https://www.open-fermentation-project.org/"><img src="https://img.shields.io/badge/OFS v1-Open%20Fermentation%20Project%20v1-yellowgreen"></a>&nbsp;<a href="https://apps.azureiotcentral.com/">
<img src="https://img.shields.io/badge/Azure IoT Central-Open%20Fermentation%20Project%20v1-blue"></a>&nbsp;<a href="https://www.saluminator.com/"></a>&nbsp;![License](https://img.shields.io/badge/Microsoft%20Public%20License-MS--PL-orange)&nbsp;![Etheruem](https://img.shields.io/badge/etheruem-V2-green)&nbsp;![Solidity](https://img.shields.io/badge/solidity-0.8.*-green)


# SimulATE Spring Sesssion
**Speakers**: Larry W Jordan Jr & Mark Huang

<img src="../assets/open-fermentation-project-logo-v2-750.png" width="250"/>

## Overview of the Smart Contract Development
Solidity is the programming language for development of a Smart Contract using Ethereum. Getting started does require some knowledge of how to program software, that said using Solidity and development of Smart Contracts are not difficult to wrap your head around. 

The most important bits are to understand the Ethereum Network, Ether, Wallets and what you trying to accomplish. Basic Javascript or Python skills will have you developing in no time!

The web is full of all kinds of resources for learning the language and getting started. I highly recommend signing up for a Substack account following developers and writers there.

#### Here are some learning resources...

* [Introduction to Smart Contracts](https://docs.soliditylang.org/en/v0.8.13/introduction-to-smart-contracts.html)
* [The Solidity Programming Language](https://soliditylang.org/)

#### Write your first contract online with ReMix

[ReMix Online IDE](https://remix.ethereum.org/)

## Our bits...

### Install

- Install `npm`
- Run `npm install` in `SimulATESpringSesssion\smart-contract\`
- Run `npx hardhat compile` to verify compilation of smart contracts
- Run `npx hardhat test` to run the tests

### Deploying

- Add a `.env` file to `SimulATESpringSesssion\smart-contract`
- Add this line: `META_MASK_PRIVATE_KEY=<your-private-key>`
- Run `npx hardhat deploy --network <network-name>`