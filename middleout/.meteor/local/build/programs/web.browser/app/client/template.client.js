(function(){
Template.body.addContent((function() {
  var view = this;
  return "";
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("client");
Template["client"] = new Template("Template.client", (function() {
  var view = this;
  return [ HTML.Raw('<div class="col-md-2"></div>\n	'), HTML.DIV({
    style: "display:block",
    "class": "col-md-8 panel panel-default"
  }, "\n		", HTML.DIV({
    id: "contract_table"
  }, "\n			", HTML.TABLE({
    "class": "table contracts"
  }, "\n				", HTML.COL({
    style: "width:30%"
  }), "\n				", HTML.COL({
    style: "width:45%"
  }), "\n				", HTML.COL({
    style: "width:13%"
  }), "\n				", HTML.COL({
    style: "width:12%"
  }), "\n		  		", HTML.THEAD("\n		        	", HTML.TR("\n		            	", HTML.TH("Available Contracts"), "\n		            	", HTML.TH("Description"), "\n		            	", HTML.TH("Price/Hr"), "\n		            	", HTML.TH("Action"), "\n		        	"), "\n		    	"), "\n		    	", HTML.TBODY("\n		    		", Blaze.Each(function() {
    return Spacebars.call(view.lookup("contracts"));
  }, function() {
    return [ "\n		    			", HTML.TR("\n	                		", Spacebars.include(view.lookupTemplate("contract")), "\n	            			", HTML.TD(" \n", HTML.Comment('<button class="btn btn-info" onclick="showDetails({{contract.id}})" type="submit">Details</button> '), "\n								", HTML.DIV({
      "class": "center"
    }, "\n								", HTML.BUTTON({
      "class": "btn btn-info",
      onclick: function() {
        return [ 'selectContract("', Spacebars.mustache(view.lookup("id")), '","', Spacebars.mustache(view.lookup("price")), '")' ];
      },
      type: "submit"
    }, "Select")), "\n	            			"), "\n	            		"), "\n	            	" ];
  }), "\n		    	"), "\n		  	"), "\n		"), "\n		", HTML.DIV({
    id: "contract_detail",
    style: "display:none;"
  }, "\n			", HTML.Raw('<a href="" onclick="selectContract(&quot;nope&quot;, &quot;nope&quot;)">&lt;- back to contract lists</a>'), "\n			", HTML.TABLE({
    "class": "formTable contracts",
    cellspacing: "0",
    border: "0"
  }, "\n				\n					", HTML.TR("\n						", HTML.TD("Your node address:"), "\n						", HTML.TD(HTML.INPUT({
    id: "senderAddress",
    type: "text",
    size: "50"
  })), "\n					"), "\n					", HTML.TR("\n						", HTML.TD("Destination node address:"), "\n						", HTML.TD(HTML.INPUT({
    "class": "read",
    id: "contractAddress",
    type: "text",
    size: "50",
    readonly: ""
  })), "\n					"), "\n					", HTML.TR("\n						", HTML.TD("Value of Contract:"), "\n						", HTML.TD(HTML.INPUT({
    "class": "read",
    id: "contractValue",
    type: "text",
    readonly: ""
  })), "\n					"), "\n					", HTML.TR("\n						", HTML.TD("URL of Desired Display"), "\n						", HTML.TD(HTML.INPUT({
    id: "url",
    type: "text",
    size: "50"
  })), "\n					"), "\n					", HTML.TR("\n						", HTML.TD(), "\n						", HTML.TD(HTML.BUTTON({
    "class": "btn btn-info",
    onclick: "transaction()",
    type: "submit"
  }, "Execute Order!")), "\n					"), "\n			\n			"), "\n		"), "\n	"), HTML.Raw('\n\n\n\n\n	<div class="col-md-2"></div>') ];
}));

Template.__checkName("contract");
Template["contract"] = new Template("Template.contract", (function() {
  var view = this;
  return [ HTML.TD(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n            ", HTML.TD(Blaze.View("lookup:description", function() {
    return Spacebars.mustache(view.lookup("description"));
  })), "\n            ", HTML.TD({
    style: "text-align:center"
  }, Blaze.View("lookup:price", function() {
    return Spacebars.mustache(view.lookup("price"));
  })) ];
}));

}).call(this);
