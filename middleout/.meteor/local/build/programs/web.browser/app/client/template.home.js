(function(){
Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return [ HTML.Raw('<div class="col-md-2"></div>\n	'), HTML.DIV({
    "class": "col-md-8"
  }, "\n	", HTML.P({
    "class": "font-18"
  }, " ", HTML.Raw("<br>"), "Welcome to middle", HTML.Raw("<strong>out</strong>"), "!  We are an interface you can use to enter or host smart contracts on the Ethereum network.\n  If you are looking to rent out a device, head to our ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "client"
      }));
    }
  }, "client"), " page! \n  Otherwise, create your own smart contracts to rent out your devices at our ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "service"
      }));
    }
  }, "service"), " page!"), "\n"), HTML.Raw('\n  	<div class="col-md-2"></div>') ];
}));

}).call(this);
