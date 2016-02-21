(function(){
Template.body.addContent((function() {
  var view = this;
  return "";
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("service");
Template["service"] = new Template("Template.service", (function() {
  var view = this;
  return HTML.Raw("<h1> Service </h1>");
}));

}).call(this);
