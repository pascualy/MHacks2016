


Router.route('/', function(){
	if(typeof web3 === 'undefined'){
		web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
		console.log("aasasdfasdfdfasd");
		console.log(web3.eth.coinbase);
	}
  this.render('home');
});

Router.route('/home', function(){
  this.render('home');
});

Router.route('/client', function(){
  this.render('client');
});

Router.route('/service', function(){
  this.render('service');
});

