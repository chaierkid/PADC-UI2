define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};
	// 图片路径转换
	Model.prototype.transUrl = function(row) {
		var url = (typeof row === "object") ? "./img/" + row.val("imageName") : row;
		return require.toUrl(url);
	};

	// 返回上一页
	Model.prototype.backBtnClick = function(event) {
		if(this.openType=='1'){
			justep.Shell.showPage("AQDCindex");
		}else{
			justep.Shell.showPage("everydayList");
		}
	};
	
	Model.prototype.open = function(event) {
		var row = event.bindingContext.$object.val("id");
		if(row=='1'){
			justep.Shell.showPage("questionManager",{createDate:createDate});
		}else if(row=='2'){
			justep.Shell.showPage("questionBManager",{createDate:createDate});
		}else if(row=='3'){
			justep.Shell.showPage("questionCManager",{createDate:createDate});
		}else if(row=='4'){
			justep.Shell.showPage("questionDManager",{createDate:createDate});
		}else if(row=='5'){
			justep.Shell.showPage("questionEManager",{createDate:createDate});
		}
		
	};
 
 
	var createDate = '';
	Model.prototype.modelParamsReceive = function(event){
		createDate = event.params.createDate;
		this.openType = event.params.type;
	};
 
 
	
	return Model;
});