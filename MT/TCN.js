define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.li1Click = function(event){
		justep.Shell.showPage("TCNList");
	};

	return Model;
});