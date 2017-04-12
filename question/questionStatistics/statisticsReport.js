define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	// 返回上一页
	Model.prototype.backBtnClick = function(event) {
		justep.Shell.showPage("statisticsList");
	};

	Model.prototype.open = function(event) {
		var row = event.bindingContext.$object.val("id");
		if(row=='1'){
			justep.Shell.showPage("reportStatistics");
		}else if(row=='2'){
			justep.Shell.showPage("questionStatistics");
		}
	};

	Model.prototype.col1Click = function(event){
		justep.Shell.showPage("AQDCindex");
	};

	Model.prototype.col2Click = function(event){
		justep.Shell.showPage("about");
	};

	Model.prototype.col3Click = function(event){
		justep.Shell.showPage("case");
	};

	Model.prototype.col9Click = function(event){
		if(null === this.getParent().userName || ""===this.getParent().userName || this.getParent().userName===undefined){
			justep.Shell.showPage("login");
		}else{
			if (confirm("当前用户："+this.getParent().userName+",是否更换账号登录")) {
				justep.Shell.showPage("login");
			}
		}
	};

	Model.prototype.modelLoad = function(event){
		/*var self = this;
		justep.Baas.sendRequest({
			"url" : "/question/question",
			"action" : "statisticsReport",
			"async" : false,
			"params" : {
				 
			},
			"success" : function(resultData) {
				self.comp("output1").set({value:resultData.first});
			},
			"error":function(msg){
				justep.Util.hint("登录失败，请检查网络是否正常！", {"type" : "danger"	});
			}
		});*/
		
	};

	return Model;
});