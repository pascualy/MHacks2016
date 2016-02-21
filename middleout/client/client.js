Template.client.contracts = function () {
  var i = 0; // This will be contract address
  var contracts =  [
    {id : i++, title: "Advertisement in GGBrown",
	description: "Blah Blah Blah",
	price: "10 eth"},
    {id : i++, title: "Advertisement in GGBrown",
	description: "Blah Blah Blah",
	price: "10 eth"},
	{id : i++, title: "Advertisement in GGBrown",
	description: "Blah Blah Blah",
	price: "10 eth"}
  ];

  return contracts;
};

showDetails = function(){

};

executeContract =  function(contractid){
	var div = document.getElementById('contract_table');
	if(div.style.display !== 'none'){
		div.style.display = 'none';
	}
	else{
		div.style.display = 'block';
	}

};