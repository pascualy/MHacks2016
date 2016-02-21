(function(){
Template.body.addContent((function() {
  var view = this;
  return "";
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("service");
Template["service"] = new Template("Template.service", (function() {
  var view = this;
  return [ HTML.Raw('<div class="col-md-2"></div>\n	'), HTML.DIV({
    "class": "col-md-8",
    id: "contract_detail"
  }, "\n		", HTML.TABLE({
    "class": "formTable contracts",
    cellspacing: "0",
    border: "0"
  }, "\n			", HTML.Comment("seller address, price int, service type (adserver), location, desc"), "\n			", HTML.TR("\n				", HTML.TD("Your node address:"), "\n				", HTML.TD(HTML.INPUT({
    id: "nodeAddress",
    type: "text",
    value: function() {
      return Spacebars.mustache(view.lookup("coinbase"));
    },
    size: "50",
    readonly: ""
  })), "\n			"), "\n			", HTML.TR("\n				", HTML.TD("Service type (adserver, webcam, etc.):"), "\n				", HTML.TD(HTML.INPUT({
    id: "serviceType",
    type: "text",
    size: "50"
  })), "\n			"), "\n			", HTML.TR("\n				", HTML.TD("Device Location"), "\n				", HTML.TD(HTML.INPUT({
    id: "deviceLocation",
    type: "text"
  })), "\n			"), "\n			", HTML.TR("\n				", HTML.TD("Device Description"), "\n				", HTML.TD(HTML.INPUT({
    id: "deviceDescription",
    type: "text"
  })), "\n			"), "\n			", HTML.TR("\n				", HTML.TD("Value of Contract"), "\n				", HTML.TD(HTML.INPUT({
    id: "valueOfContract",
    type: "text"
  })), "\n			"), "\n			", HTML.TR("\n				", HTML.TD(), "\n				", HTML.TD(HTML.BUTTON({
    "class": "btn btn-info",
    id: "createButton",
    onclick: "create()"
  }, "Create Contract!")), "\n			"), "\n		"), "\n	"), HTML.Raw('\n	<div class="col-md-2"></div>') ];
}));

}).call(this);
