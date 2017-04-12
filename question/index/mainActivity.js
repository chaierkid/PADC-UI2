define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button2Click = function(event){
		var contents = this.comp('contents3');
		contents.to('Q11');
	};

	Model.prototype.button4Click = function(event){

	};

	return Model;
});