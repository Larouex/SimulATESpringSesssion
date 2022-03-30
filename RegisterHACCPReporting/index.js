// DPS
const iotHubTransport = require('azure-iot-device-mqtt').Mqtt;
const Client = require('azure-iot-device').Client;
const Crypto = require('crypto');
const Message = require('azure-iot-device').Message;
const ProvisioningTransport = require('azure-iot-provisioning-device-mqtt').Mqtt;
const SymmetricKeySecurityClient = require('azure-iot-security-symmetric-key').SymmetricKeySecurityClient;
const ProvisioningDeviceClient = require('azure-iot-provisioning-device').ProvisioningDeviceClient;

module.exports = async function (context, req) {
    
    context.log('Send HACCP to IoT Central is processing a request.');
    
    // get params for iotc
    var Ph = context.req.query.Ph;
    var Weight = context.req.query.Weight;
    var ChamberTemperature = context.req.query.ChamberTemperature;
    var ChamberHumidity = context.req.query.ChamberHumidity;
    var AmbientTemperature = context.req.query.AmbientTemperature;
    var AmbientHumidity = context.req.query.AmbientHumidity;
    var TxAddress = context.req.query.TxAddress;
    
    var provisioningHost = process.env["PROVISIONING_HOST"];
    var idScope = process.env["SCOPE_ID"]
    var registrationId = process.env["HACCP_DEVICE_ID"];
    var symmetricKey = process.env["SAS_TOKEN"];
    var HACCP_DEVICE_ID = process.env["HACCP_DEVICE_ID"];
    var SCOPE_ID = process.env["SCOPE_ID"];
    var SAS_TOKEN = process.env["SAS_TOKEN"];
    
    var deviceSasKey = await getDeviceKey(context, registrationId, symmetricKey)
    var provisioningSecurityClient = new SymmetricKeySecurityClient(registrationId, deviceSasKey);
    var provisioningClient = ProvisioningDeviceClient.create(provisioningHost, idScope, new ProvisioningTransport(), provisioningSecurityClient);

    // Register the device.
    provisioningClient.setProvisioningPayload({modelId:"dtmi:saluminatorIndustrialV4:blockchainHACCP;1"});
    provisioningClient.register(function(err, result) {
        if (err) {
            console.log("error registering device: " + err);
        } else {
            console.log('registration succeeded');
            console.log('assigned hub=' + result.assignedHub);
            console.log('deviceId=' + result.deviceId);
            console.log('payload=' + JSON.stringify(result.payload));
            var connString = 'HostName=' + result.assignedHub + ';DeviceId=' + result.deviceId + ';SharedAccessKey=' + deviceSasKey;
            console.log('connectionString=' + connString);
        }

        var client = Client.fromConnectionString(connString, iotHubTransport);
        client.open(function (err) {
            if (err) {
                console.error('Could not connect: ' + err.message);
            } else {
                console.log('Client connected');
            
                client.on('error', function (err) {
                    console.error(err.message);
                    process.exit(-1);
                });
          
                // any type of data can be sent into a message: bytes, JSON...but the SDK will not take care of the serialization of objects.
                var message = new Message(JSON.stringify(
                    {
                        ph: Ph,
                        weight: Weight,
                        chamber_temperature: ChamberTemperature,
                        chamber_humidity: ChamberHumidity,
                        ambient_temperature: AmbientTemperature,
                        ambient_humidity: AmbientHumidity,
                        tx_address: TxAddress
                    }
                ));
          
                // A unique identifier can be set to easily track the message in your application
                message.messageId = 2;
          
                console.log('Sending message: ' + message.getData());
                client.sendEvent(message, function (err) {
                    if (err) {
                        console.error('Could not send: ' + err.toString());
                        process.exit(-1);
                    } else {
                        console.log('Message sent: ' + message.messageId);
                        //process.exit(0);
                    };
                });
            };
        });

    });

    context.res.json({
        connectionString: "Completed"
    });

}

/*
 * Computes a derived device key using the primary key.
 */
 async function getDeviceKey(context, deviceId, symmetricKey) {

  const key = Crypto.createHmac('SHA256', Buffer.from(symmetricKey, 'base64'))
      .update(deviceId)
      .digest()
      .toString('base64');

  return key;
}