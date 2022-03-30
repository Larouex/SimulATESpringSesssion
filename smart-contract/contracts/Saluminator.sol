// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";

contract Saluminator is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    SaluminatorTelemetry saluminatorTelemetry;
    string imageUri;

    constructor(address telemetryContract) ERC721("Saluminator", "SLMNTR") {
        saluminatorTelemetry = SaluminatorTelemetry(telemetryContract);
    }

    function safeMint(address to, uint256 tokenId, string memory uri)
        public
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        SaluminatorTelemetry.Telemetry[] memory arr = saluminatorTelemetry.viewTelemetryForBatch(tokenId);
        
        require(arr.length > 0, "No telemetry for the batch");

        string memory json = string(abi.encodePacked('{"title": "Saluminator", "image": "', super.tokenURI(tokenId), '", "properties": ['));
        for (uint i = 0; i < arr.length; i++) {
            json = string(abi.encodePacked(json, '{"batch": ', Strings.toString(arr[i].batch)));
            json = string(abi.encodePacked(json, ', "timestamp": ', Strings.toString(arr[i].timestamp)));
            json = string(abi.encodePacked(json, ', "ph": ', Strings.toString(arr[i].ph)));
            json = string(abi.encodePacked(json, ', "weight": ', Strings.toString(arr[i].weight)));
            json = string(abi.encodePacked(json, ', "temperature": ', Strings.toString(arr[i].temperature)));
            json = string(abi.encodePacked(json, ', "ambientTemperature": ', Strings.toString(arr[i].ambientTemperature)));
            json = string(abi.encodePacked(json, ', "humidity": ', Strings.toString(arr[i].humidity)));
            json = string(abi.encodePacked(json, ', "ambientHumidity": ', Strings.toString(arr[i].ambientHumidity)));
        
            if (i == arr.length-1) {
                json = string(abi.encodePacked(json, '}]}'));
            } else {
                json = string(abi.encodePacked(json, '}, '));
            }
        }
        return json;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

contract SaluminatorTelemetry {
    struct Telemetry {
        uint batch;
        uint timestamp;
        uint ph;
        uint weight;
        uint temperature;
        uint ambientTemperature;
        uint humidity;
        uint ambientHumidity;
    }

    function viewTelemetryForBatch(uint batch) external view returns (Telemetry[] memory) {}  
}