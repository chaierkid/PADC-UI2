define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var fUserName ="";
	var Model = function(){
		this.callParent();
	};

	
	Model.prototype.okEditClick = function(event){
		var data = this.comp("mainData");
		data.directDeleteMode = false;
		var rows = [];
		data.each(function(options){
			if (data.getValue("calcCheckBox", options.row)){
				rows.push(options.row);
			}
		});
		if (rows.length < 0||rows.length == 0){
			alert("请选择要删除的数据");
			return;
		}
		if (rows.length > 0){
			data.setValue("tabIsDelete", 1,options.row);
		}
		data.saveData();
	};


	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
        //获取URL中的参数
        fUserName = context.getRequestParameter('fUserName');
		var tabquestion = this.comp("mainData");
		var cond = "1=1 and tabquestion.tabIsDelete = 0";
//		过滤当前人		
//		if(null!=fUserName && ""!=fUserName){
//			cond = cond + " and tabquestion.fUserName = '"+fUserName+"'";
//		}
		tabquestion.setFilter("tabquestion", cond);
        tabquestion.refreshData();
        this.comp("mainList").refresh();
	};

	Model.prototype.row2Click = function(event){
		var data = this.comp("mainData");
		var row = event.bindingContext.$object; 
		var fId = row.val("fId");
		if(null==fId||""==fId){
			alert("请获取数据");
			return;
		}
		var url = require.toUrl("./selfread.w?fUserName="+fUserName+"&fId="+fId+"");
		justep.Shell.showPage(url);
	};

	Model.prototype.backBtnClick = function(event){
		var url = require.toUrl("./index.w?fUserName="+fUserName+"");
		justep.Shell.showPage(url);
	};

	return Model;
});