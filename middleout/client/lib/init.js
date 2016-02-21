
if(typeof web3 === 'undefined'){
		web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

try {
	web3.personal.unlockAccount(web3.eth.coinbase, "middleout");
}
catch(err){
	console.log("nope")
}