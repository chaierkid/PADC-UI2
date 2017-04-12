define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.loginBtnClick = function(event){
		var tabuser = this.comp("tabuser");
		var name = this.comp("nameInput").val();
		var password = this.comp("passwordInput").val();
		if(null===name||""===name){
			alert("请填写用户名");
			return;
		}
		if(null===password||""===password){
			alert("请填写密码");
			return;
		}
		tabuser.clear();
		tabuser.setFilter("tabuser", "tabuser.fUserName='"+name+"'  "
				+ " and tabuser.tabIsDelete=0 ");
		tabuser.refreshData();
        if (tabuser.count()> 0) {
        	alert("用户名已存在！");
        	return;
        }
        var data = this.comp("main");
        data.setValue("fUserName", name);
		data.setValue("fPassword", password);
		data.setValue("tabIsDelete", 0);
		data.saveData();
		alert("注册成功，请登录！");
        var url = require.toUrl("./login.w");
		justep.Shell.showPage(url);
	};

	Model.prototype.button3Click = function(event){
		var url = require.toUrl("./AQDCindex.w");
		justep.Shell.showPage(url);
	};


	Model.prototype.modelLoad = function(event){
		var data = this.comp("main");
        data.newData();
    	var fId = justep.UUID.createUUID();
		data.setValue("fId", fId);
		data.setValue("tabIsDelete", 0);
		data.setValue("fUserType","访员");
	};

	Model.prototype.modelActive = function(event){
		var data = this.comp("main");
        data.newData();
    	var fId = justep.UUID.createUUID();
		data.setValue("fId", fId);
		data.setValue("tabIsDelete", 0);
		data.setValue("fUserType","访员");
	};

	return Model;
});