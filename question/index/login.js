define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Model = function(){
		this.callParent();
	};
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";
	};
	
 
	Model.prototype.loginBtnClick = function(event){
		var fUserName = this.comp("nameInput").val();
		var fPassword = this.comp("passwordInput").val();
		if(null===fUserName||""===fUserName){
			alert("请填写用户名");
			return;
		}
		if(null===fPassword||""===fPassword){
			alert("请填写密码");
			return;
		}

		var data = this.comp("tabuser");
		data.clear();
		data.setFilter("tabuser", "tabuser.fUserName='"+fUserName+"' and tabuser.fPassWord='"+fPassword+"' "
				+ " and tabuser.tabIsDelete=0 ");
		data.refreshData();
		if(data.getCount()<0 || data.getCount()==0){
			alert("用户名或密码有误！");
			return;
		}
		var fUserType = data.getValue("fUserType");
		var url = require.toUrl("./AQDCindex.w");
		justep.Shell.showPage(url,{userName:fUserName,userType:fUserType});
	};
	//注册
	Model.prototype.registerBtnClick = function(event){
		var url = require.toUrl("./register.w");
		justep.Shell.showPage(url);
	};
	
	Model.prototype.button3Click = function(event){
		var url = require.toUrl("./AQDCindex.w");
		justep.Shell.showPage(url);	
	};
 
	return Model;
});