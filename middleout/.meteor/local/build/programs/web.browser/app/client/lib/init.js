(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/lib/init.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
if (typeof web3 === 'undefined') {                                     // 2
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}                                                                      //
                                                                       //
try {                                                                  // 6
	web3.personal.unlockAccount(web3.eth.coinbase, "middleout");          // 7
} catch (err) {                                                        //
	console.log("nope");                                                  // 10
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
