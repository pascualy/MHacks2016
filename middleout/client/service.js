Template.service.coinbase = function () {
  var coinbase =  web3.eth.coinbase;
  return coinbase;
};

create = function() {
	
	var _url = "" /* var of type string here */ ;
	var _description = document.getElementById("deviceDescription").value ;
	var _servicetype = document.getElementById("serviceType").value ;
	var _location = document.getElementById("deviceLocation").value ;
	var purchaseContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"seller","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"value","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"location","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"url","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"buyer","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[],"name":"confirmPurchase","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"servicetype","outputs":[{"name":"","type":"string"}],"type":"function"},{"inputs":[{"name":"_url","type":"string"},{"name":"_description","type":"string"},{"name":"_servicetype","type":"string"},{"name":"_location","type":"string"}],"type":"constructor"},{"anonymous":false,"inputs":[],"name":"purchaseConfirmed","type":"event"}]);
	var purchase = purchaseContract.new(
	   _url,
	   _description,
	   _servicetype,
	   _location,
	   {
	     from: web3.eth.accounts[0], 
	     data: '6060604052604051610ab8380380610ab8833981016040528080518201919060200180518201919060200180518201919060200180518201919060200150505b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508360036000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b957805160ff19168380011785556100ea565b828001600101855582156100ea579182015b828111156100e95782518260005055916020019190600101906100cb565b5b50905061011591906100f7565b8082111561011157600081815060009055506001016100f7565b5090565b50508260046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016657805160ff1916838001178555610197565b82800160010185558215610197579182015b82811115610196578251826000505591602001919060010190610178565b5b5090506101c291906101a4565b808211156101be57600081815060009055506001016101a4565b5090565b50508160066000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061021357805160ff1916838001178555610244565b82800160010185558215610244579182015b82811115610243578251826000505591602001919060010190610225565b5b50905061026f9190610251565b8082111561026b5760008181506000905550600101610251565b5090565b50508060056000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102c057805160ff19168380011785556102f1565b828001600101855582156102f1579182015b828111156102f05782518260005055916020019190600101906102d2565b5b50905061031c91906102fe565b8082111561031857600081815060009055506001016102fe565b5090565b5050346000600050819055505b5050505061077d8061033b6000396000f360606040523615610095576000357c01000000000000000000000000000000000000000000000000000000009004806308551a53146100a25780633fa4f245146100db578063516f279e146100fe5780635600f04f146101795780637150d8ae146101f45780637284e4161461022d578063c19d93fb146102a8578063d6960697146102cb578063fdcc5920146102da57610095565b6100a05b610002565b565b005b6100af600480505061035e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100e86004805050610355565b6040518082815260200191505060405180910390f35b61010b60048050506104ec565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561016b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018660048050506103aa565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102016004805050610384565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61023a600480505061044b565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561029a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102b5600480505061062e565b6040518082815260200191505060405180910390f35b6102d86004805050610641565b005b6102e7600480505061058d565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60006000505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104435780601f1061041857610100808354040283529160200191610443565b820191906000526020600020905b81548152906001019060200180831161042657829003601f168201915b505050505081565b60046000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104e45780601f106104b9576101008083540402835291602001916104e4565b820191906000526020600020905b8154815290600101906020018083116104c757829003601f168201915b505050505081565b60056000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105855780601f1061055a57610100808354040283529160200191610585565b820191906000526020600020905b81548152906001019060200180831161056857829003601f168201915b505050505081565b60066000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106265780601f106105fb57610100808354040283529160200191610626565b820191906000526020600020905b81548152906001019060200180831161060957829003601f168201915b505050505081565b600760009054906101000a900460ff1681565b7f764326667cab2f2f13cad5f7b7665c704653bd1acc250dcb7b422bce726896b460405180905060405180910390a133600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000600060005054604051809050600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660003073ffffffffffffffffffffffffffffffffffffffff1631604051809050600060405180830381858888f19350505050506002600760006101000a81548160ff021916908302179055505b56', 
	     gas: 3000000
	   }, function(e, contract){
	    console.log(e, contract);
	    if (typeof contract.address != 'undefined') {
	         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
	    }
	 });
	document.getElementById("serviceType").value = "";
	document.getElementById("deviceLocation").value = "";
	document.getElementById("deviceDescription").value = "";
	document.getElementById("valueOfContract").value = "";

	var contract = web3.eth.contract(purchase.abi).at(purchase.address);
	contract.Purchase("www", "dow", "dow", "dow");

	


}


