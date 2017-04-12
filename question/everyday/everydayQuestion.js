define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	// 返回上一页
	Model.prototype.backBtnClick = function(event) {
		justep.Shell.showPage("AQDCindex");
	};

	Model.prototype.button1Click = function(event){
		justep.Shell.showPage( "questionB",{operator:"new"});	
	};
	
	Model.prototype.li1Click = function(event){
		var createDate = event.bindingContext.$object.val("createDate");
		justep.Shell.showPage( "questionABCD",{createDate:createDate});
	};
	
	Model.prototype.modelActive = function(event){
		var data = this.comp("data1");
//		var cond =  "  tabquestionb.tabIsDelete=0 ";
//		if(this.getParent().userType=='访员'){
//			cond += " and tabquestionb.fCreator='"+this.getParent().userName+"'";
//		}
//		data.setFilter("tabquestionb", cond);
		data.refreshData();
		this.comp("list1").refresh();
	};
	Model.prototype.modelLoad = function(event){
		var data = this.comp("data1");
//		var cond =  "  tabquestionb.tabIsDelete=0 ";
//		if(this.getParent().userType=='访员'){
//			cond += " and tabquestionb.fCreator='"+this.getParent().userName+"'";
//		}
//		data.setFilter("tabquestionb", cond);
		data.refreshData();
		this.comp("list1").refresh();
	};
	
	
	Model.prototype.data1CustomRefresh = function(event){
		var data = event.source;
		var append = event.options && event.options.append;
		justep.Baas.sendRequest({
				"url" : "/question/question",
				"action" : "getEveryday",
				"async" : false,
				"params" : {sName:this.sName,queryType:this.queryType },
				"success" : function(resultData) {
					data.loadData(resultData,append);
					data.doRefreshAfter(true, event.options);
				},
				"error":function(msg){
					justep.Util.hint("查询失败，请检查网络是否正常！", {"type" : "danger"	});
				}
			});
	};
	return Model;
});