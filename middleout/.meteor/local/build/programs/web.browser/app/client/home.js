(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/home.js                                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
                                                                       //
Router.route('/', function () {                                        // 4
		if (typeof web3 === 'undefined') {                                   // 5
				web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
				console.log("aasasdfasdfdfasd");                                   // 7
				console.log(web3.eth.coinbase);                                    // 8
		}                                                                    //
		this.render('home');                                                 // 10
});                                                                    //
                                                                       //
Router.route('/home', function () {                                    // 13
		this.render('home');                                                 // 14
});                                                                    //
                                                                       //
Router.route('/client', function () {                                  // 17
		this.render('client');                                               // 18
});                                                                    //
                                                                       //
Router.route('/service', function () {                                 // 21
		this.render('service');                                              // 22
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
