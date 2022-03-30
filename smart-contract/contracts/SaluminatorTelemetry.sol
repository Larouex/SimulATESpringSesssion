//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

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

    mapping(uint => Telemetry[]) public batchTelemetry;

    event HACCPEvent(Telemetry saluminatorTelemetry);

    function ingestTelemetry(Telemetry[] calldata telemetry) external {
        for(uint i = 0; i < telemetry.length; i++) {
            batchTelemetry[telemetry[i].batch].push(telemetry[i]);
            emit HACCPEvent(telemetry[i]);
        }
    }

    function viewTelemetryForBatch(uint batch) external view returns (Telemetry[] memory) {
        return batchTelemetry[batch];
    }
}
