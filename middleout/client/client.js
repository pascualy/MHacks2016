Template.client.contracts = function () {
  var i = 0; // This will be contract address
  var contracts =  [
    {id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Advertisement in GGBrown",
	description: "Blah Blah Blah",
	price: "10"},
    {id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Advertisement in GGBrown",
	description: "Blah Blah Blah",
	price: "10"},
	{id: "daa24d02bad7e9d6a80106db164bad9399a0423e", title: "Advertisement in GGBrown",
	description: "Blah Blah Blah",
	price: "10"}
  ];
  console.log(contracts[0].id)
  console.log(contracts[1].id)
  return contracts;
};

showDetails = function(){

};

executeContract =  function(contractid, price){
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