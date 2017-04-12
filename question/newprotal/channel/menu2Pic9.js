define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.backBtnClick = function(){
		justep.Portal.closeWindow();
	};

	Model.prototype.modelLoad = function(event){
		var self = this;
		
//		$(self.getElementByXid("photoDiv")).hide();
		
		// 获取url上的code参数 - 微信授权code，用于获取微信用户信息
		var weixinCode = this.getContext().getRequestParameter("code");
		alert(weixinCode)
//		// 判断运行环境是否在X5移动客户端中，如果在移动客户端中，则当deviceready后取手机设备uuid作为用户唯一标识
//		if (justep.Browser.isX5App) {
//			document.addEventListener("deviceready", function() {
//				self.loadUserData({
//					"id" : window.device.uuid,
//					"name" : "新用户（来自X5APP的用户）"
//				});
//			}, false);
//		} else if (weixinCode !== "") {
//			// 微信用户
//			$.getJSON("/baas/weixin/userinfo?code=" + weixinCode, function(weixinUser) {
//				$(self.getElementByXid("photoDiv")).show();
//				$(self.getElementByXid("photoImage")).attr("src", weixinUser.headimgurl);
//				self.loadUserData({
//					"id" : weixinUser.openid,
//					"name" : weixinUser.nickname + "（来自微信的用户）",
//					"address" : weixinUser.country + weixinUser.province + weixinUser.city
//				});
//			});
//		} else {
//			this.loadUserData({
//				"id" : "user",
//				"name" : "新用户"
//			});
//		}
	};

	return Model;
});