define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};


	Model.prototype.li2Click = function(event){
		var row = event.bindingContext.$object;
		justep.Shell.showPage(row.val("pageName"));
	};

	return Model;
});