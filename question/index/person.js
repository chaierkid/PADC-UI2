define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.saveCommit = function(event){
		alert("保存数据成功！");
	};
	
	Model.prototype.cancelEditClick = function(event){
		var data = this.comp("mainData");
		data.each(function(options){
			if (data.getValue("calcCheckBox", options.row)){
				data.setValue('calcCheckBox',false,options.row);
			}
		});
	};

	Model.prototype.saveClick = function(event){
		var data = this.comp("mainData");
		var fId = justep.UUID.createUUID();
		data.setValue("fId", fId);
		data.setValue("tabIsDelete", 0);
		data.setValue("tabIsShow", 1);
		data.saveData();
	};

	Model.prototype.button1Click = function(event){
		var data = this.comp("mainData");
		data.newData();
		var contents = this.comp('contents');
		contents.to('detail');
		var fId = justep.UUID.createUUID();
		data.setValue("fId", fId);
		data.setValue("tabIsShow", 1);
	};

	Model.prototype.button6Click = function(event){
		var data = this.comp("mainData");
		var fUserName = data.getValue("fUserName");
		var fPassword = data.getValue("fPassword");
		var fUserType = data.getValue("fUserType");
		if(fUserName==null || fUserName==""){
			alert("用户名不能为空！");
			return;
		}
		if(fPassword==null || fPassword==""){
			alert("密码不能为空！");
			return;
		}
		if(fUserType==null || fUserType==""){
			alert("用户类型不能为空！");
			return;
		}
//		justep.Baas.sendRequest({
//			"url" : "/question/Person",
//			"action" : "checkPerson",
//			"async" : false,
//			"params" : {
//				userName : fUserName,
//				password : fPassword
//			},
//			"success" : function(resultData) {
//				if(resultData.loginStatus!='1'){
//					justep.Util.hint("用户名重复，请重新录入", {
//						"type" : "danger"
//					});                      
//					return;
//				}else{
//					data.setValue("fUserName", fUserName);
//					data.setValue("fPassword", fPassword);
//					data.setValue("fUserType", fUserType);
//					data.setValue("tabIsDelete", 0);
//					data.saveData();
//					data.refreshData();
//					var contents = this.comp('contents');
//					contents.to('list');
//				}
//			},
//			"error":function(msg){
//				justep.Util.hint("登录失败，请检查网络是否正常！", {"type" : "danger"	});
//			}
//		});
//		data.setValue("TABCREATEDATE",justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT));
//		data.setValue("TABEDITDATE",justep.Date.toString(new Date(), justep.Date.STANDART_FORMAT));
		var data = this.comp("tabuser");
		data.clear();
		data.setFilter("tabuser", "tabuser.fUserName='"+fUserName+"'  "
				+ " and tabuser.tabIsDelete=0 ");
		data.refreshData();
		if(data.getCount()>0 ){
			alert("已有该用户名");
			return;
		}
		data.newData();
		data.setValue("fId", justep.UUID.createUUID());
		data.setValue("fUserName", fUserName);
		data.setValue("fPassword", fPassword);
		data.setValue("fUserType", fUserType);
		data.setValue("tabIsDelete", 0);
		data.saveData();
		data.refreshData();
		var contents = this.comp('contents');
		contents.to('list');
	};

	Model.prototype.button7Click = function(event){
		var contents = this.comp('contents');
		contents.to('list');
	};

	Model.prototype.button2Click = function(event){
		if (this.isEditable()){
			this.resetData();
		}
		this.updateEditStatus();
	};
	
	Model.prototype.isEditable = function(){
		return this.comp("controlData").getValue("edit") == 1;
	};
	Model.prototype.resetData = function(){
		var data = this.comp("mainData");
		data.each(function(options){
			data.setValue("calcCheckBox", 0, options.row);
		});
	};
	Model.prototype.button3Click = function(event){
		justep.Shell.showPage("AQDCindex");
	};
	Model.prototype.button4Click = function(event){
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
	return Model;
});