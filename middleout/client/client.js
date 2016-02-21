Template.client.contracts = function () {

  var i = 0; // This will be contract address
  var contracts =  [
    {id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Display in GGBrown Laboratory",
	description: "This display is located in the entrance of the GGBrown Laboratory.",
	price: "10 Wei"},
    {id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Webcam overlooking Diag from BBB",
	description: "This webcam provides pristine views of the torn up diag.",
	price: "50 eth"},
	{id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Microphone located in BBB lobby",
	description: "Hear all of the unnerving sounds produced by computer science students",
	price: "100 eth"}
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
	var transactionObject = {to:"0x69a827adde364af2d35770fa89100933e1e47eae", from: web3.eth.coinbase, value: web3.toWei(.000000000001, "ether"), url:document.getElementById("url").value};
	web3.eth.sendTransaction(transactionObject);
}

