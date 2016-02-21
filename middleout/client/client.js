Template.client.contracts = function () {

  var i = 0; // This will be contract address
  var contracts =  [
    {id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Advertisement in GGBrown",
	description: "Blah Blah Blah",
	price: "10 eth"},
    {id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Advertisement in GGBrown",
	description: "Blah Blah Blah",
	price: "10 eth"},
	{id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Advertisement in GGBrown",
	description: "Blah Blah Blah",
	price: "10 eth"}
  ];
  return contracts;
};

selectContract =  function(contractid, price){
	var table = document.getElementById('contract_table');
	var form = document.getElementById('contract_detail');
	if(table.style.display !== 'none'){
		table.style.display = 'none';
		form.style.display = 'block';
	}
	else{
		table.style.display = 'block';
		form.style.display = 'none';
	}
	document.getElementById('contractValue').value = price;
	document.getElementById('contractAddress').value = contractid;
};

executeContract = function(contractid, price){

}

transaction = function() {
	var transactionObject = {to:"0x9f38a38c3492ed0737c27ab7c3b52c4b2d933392", from: web3.eth.coinbase, value: web3.toWei(.000000000001, "ether")};
	try {
		web3.personal.unlockAccount(web3.eth.coinbase, "middleout");
	}
	catch(err){
		console.log("nope")
	}
	web3.eth.sendTransaction(transactionObject);
}

