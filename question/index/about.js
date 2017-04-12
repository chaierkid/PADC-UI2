define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.showPage("AQDCindex");
	};

	Model.prototype.button5Click = function(event){
		justep.Shell.showPage("AQDCindex");
	};
	Model.prototype.button6Click = function(event){
		justep.Shell.showPage("about");
	};
	Model.prototype.button1Click = function(event){
		justep.Shell.showPage("case");
	};
	Model.prototype.button3Click = function(event){
		if(null === this.getParent().userName || ""===this.getParent().userName || this.getParent().userName===undefined){
			justep.Shell.showPage("login");
		}else{
			if (confirm("当前用户："+this.getParent().userName+",是否更换账号登录")) {
				justep.Shell.showPage("login");
			}
		}
	};
	return Model;
});