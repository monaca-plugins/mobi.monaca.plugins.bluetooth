	var Bluetooth = function() {};
	
	/**
	 * Check if bluetooth API is supported on this platform
	 * @returns true if bluetooth API is supported, false otherwise
	 */
	Bluetooth.prototype.isSupported = function() {
		// Currently only supported on android
		if( device.platform.toLowerCase() == "android" ) return true;
		
		return false;
	}
	
	/**
	 * Enable bluetooth
	 * 
	 * @param successCallback function to be called when enabling of bluetooth was successfull
	 * @param errorCallback function to be called when enabling was not possible / did fail
	 */
	Bluetooth.prototype.enable = function(successCallback,failureCallback) {
	    return exec(successCallback, failureCallback, 'BluetoothPlugin', 'enable', []);
	}
	
	/**
	 * Disable bluetooth
	 * 
	 * @param successCallback function to be called when disabling of bluetooth was successfull
	 * @param errorCallback function to be called when disabling was not possible / did fail
	 */
	Bluetooth.prototype.disable = function(successCallback,failureCallback) {
	    return exec(successCallback, failureCallback, 'BluetoothPlugin', 'disable', []);
	}
	
	/**
	 * Search for devices  and list them
	 * 
	 * @param successCallback function to be called when discovery of other devices has finished. Passed parameter is a JSONArray containing JSONObjects with 'name' and 'address' property.
	 * @param errorCallback function to be called when there was a problem while discovering devices
	 */
	Bluetooth.prototype.discoverDevices = function(successCallback,failureCallback) {
	    return exec(successCallback, failureCallback, 'BluetoothPlugin', 'discoverDevices', []);
	}
	
	/**
	 * Return list of available UUIDs for a given device
	 * 
	 * @param successCallback function to be called when listing of UUIDs has finished. Passed parameter is a JSONArray containing strings which represent the UUIDs
	 * @param errorCallback function to be called when there was a problem while listing UUIDs
	 */
	Bluetooth.prototype.getUUIDs = function(successCallback,failureCallback,address) {
	    return exec(successCallback, failureCallback, 'BluetoothPlugin', 'getUUIDs', [address]);
	}
	
	/**
	 * Open an RFComm channel for a given device & uuid endpoint
	 * 
	 * @param successCallback function to be called when the connection was successfull. Passed parameter is an integer containing the socket id for the connection
	 * @param errorCallback function to be called when there was a problem while opening the connection
	 */
	Bluetooth.prototype.connect = function(successCallback,failureCallback,address,uuid) {
	    return exec(successCallback, failureCallback, 'BluetoothPlugin', 'connect', [address, uuid]);
	}
	
	/**
	 * Close a RFComm channel for a given socket-id
	 * 
	 * @param successCallback function to be called when the connection was closed successfully
	 * @param errorCallback function to be called when there was a problem while closing the connection
	 */
	Bluetooth.prototype.disconnect = function(successCallback,failureCallback,socketid) {
	    return exec(successCallback, failureCallback, 'BluetoothPlugin', 'disconnect', [socketid]);
	}
	
	/**
	 * Read from a connected socket
	 * 
	 * @param successCallback function to be called when reading was successfull. Passed parameter is a string containing the read content
	 * @param errorCallback function to be called when there was a problem while reading
	 */
	Bluetooth.prototype.read = function(successCallback,failureCallback,socketid) {
	    return exec(successCallback, failureCallback, 'BluetoothPlugin', 'read', [socketid]);
	}
	
	module.exports = new Bluetooth();