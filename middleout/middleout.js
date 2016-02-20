
Meteor.startup(function () {

});
Router.route('/', function(){
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