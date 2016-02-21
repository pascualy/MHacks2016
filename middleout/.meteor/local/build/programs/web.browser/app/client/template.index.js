(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default"
  }, "\n		", HTML.DIV({
    "class": "container-fluid"
  }, "\n   			", HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "bs-example-navbar-collapse-1"
  }, "\n	     		", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n	        		", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "home"
      }));
    },
    "class": "home"
  }, "Home")), "\n	        		", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "client"
      }));
    },
    "class": "client"
  }, "Client")), "\n	        		", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "service"
      }));
    },
    "class": "service"
  }, "Service")), "\n    			"), "\n    			", HTML.Raw('<ul class="nav">\n          			<li class="active trademark">middle<strong>out</strong></li>\n      			</ul>'), "\n      			"), "\n    	"), "\n	");
}));
Meteor.startup(Template.body.renderToDocument);

}).call(this);
