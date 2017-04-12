define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Model = function(){
		this.callParent();
	};

	
	Model.prototype.okEditClick = function(event){
		var data = this.comp("mainData");
		data.directDeleteMode = true;
		var rows = [];
		data.each(function(options){
			if (data.getValue("calcCheckBox", options.row)){
			rows.push(options.row);
			data.setValue("tabIsDelete", 1,options.row);
			//alert(data.getValue("tabIsDelete", options.row))
			data.saveData();
			}
		});
		if (rows.length < 0||rows.length == 0){
			alert("请选择要删除的数据");
			return;
		}
		if (rows.length > 0){			
			data.deleteData(rows);
		}
	};


	Model.prototype.modelParamsReceive = function(event){
		var tabquestion = this.comp("mainData");
		var cond = "1=1 and tabquestion.tabIsDelete = 0";
//		if(null!=fUserName && ""!=fUserName){
//			cond = cond + " and tabquestion.fUserName = '"+fUserName+"'";
//		}
		tabquestion.setFilter("tabquestion", cond);
        tabquestion.refreshData();
        this.comp("mainList").refresh();
	};

	Model.prototype.row2Click = function(event){
		var row = event.bindingContext.$object; 
		var fId = row.val("fId");
		if(null===fId||""===fId){
			alert("请获取数据");
			return;
		}
		justep.Shell.showPage("selfread");
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.showPage("AQDCindex");
	};

	Model.prototype.row1Click = function(event){
		var row = event.bindingContext.$object; 
		var fId = row.val("fId");
		if(null===fId||""===fId){
			alert("请获取数据");
			return;
		}
		justep.Shell.showPage("selfread");
	};

	return Model;
});