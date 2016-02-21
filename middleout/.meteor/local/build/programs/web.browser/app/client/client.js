(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/client.js                                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.client.contracts = function () {                              // 1
                                                                       //
	var i = 0; // This will be contract address                           // 3
	var contracts = [{ id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Advertisement in GGBrown",
		description: "Blah Blah Blah",                                       // 6
		price: "10 eth" }, { id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Advertisement in GGBrown",
		description: "Blah Blah Blah",                                       // 9
		price: "10 eth" }, { id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Advertisement in GGBrown",
		description: "Blah Blah Blah",                                       // 12
		price: "10 eth" }];                                                  // 13
	return contracts;                                                     // 15
};                                                                     //
                                                                       //
selectContract = function (contractid, price) {                        // 18
	var table = document.getElementById('contract_table');                // 19
	var form = document.getElementById('contract_detail');                // 20
	if (table.style.display !== 'none') {                                 // 21
		table.style.display = 'none';                                        // 22
		form.style.display = 'block';                                        // 23
	} else {                                                              //
		table.style.display = 'block';                                       // 26
		form.style.display = 'none';                                         // 27
	}                                                                     //
	document.getElementById('contractValue').value = price;               // 29
	document.getElementById('contractAddress').value = contractid;        // 30
};                                                                     //
                                                                       //
executeContract = function (contractid, price) {};                     // 33
                                                                       //
transaction = function () {                                            // 37
	var transactionObject = { to: "0x69a827adde364af2d35770fa89100933e1e47eae", from: web3.eth.coinbase, value: web3.toWei(.000000000001, "ether"), url: document.getElementById("url").value };
	web3.eth.sendTransaction(transactionObject);                          // 39
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
