define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');

	var Model = function() {
		this.callParent();
//    	var self = this;
//		this.getItems = function($object){
//			var itemData = self.comp('itemData'); 
//			var ret = [];
//			itemData.each(function(param){
//				var row = param.row;
//				if(self.getParent().userType!='访员'){
//					ret.push(row);
//				}else{
//					if(row.val('id')=='5')
//						ret.push(row);
//				}
//			});
//			return ret;
//		};
	};

	//接收登录返回用户名
	Model.prototype.modelParamsReceive = function(event){
		this.getParent().userName = event.params.userName;
		this.getParent().userType = event.params.userType;
		
        if(null !== this.getParent().userName && ""!==this.getParent().userName &&this.getParent().userName!==undefined){
        	$(this.getElementByXid("p1")).html(this.getParent().userType +":"+this.getParent().userName);
        }else{
        	$(this.getElementByXid("p1")).html("请登录...");
        }
	};

	// 图片路径转换
	Model.prototype.transUrl = function(row) {
		var url = (typeof row === "object") ? "./img/" + row.val("imageName") : row;
		return require.toUrl(url);
	};

	Model.prototype.openPageClick = function(event) {
		if(this.getParent().userName==='' || this.getParent().userName===null || this.getParent().userName ===undefined){
			alert("请登录后使用！");
			return;
		}
		var row = event.bindingContext.$object;
		var pagename = row.val("pagename");
		if (pagename=='question') {
			justep.Shell.showPage("questionABCD");
		}else if (pagename=='questionResult') {
			justep.Shell.showPage( 'statisticsList' );//,{userType:this.userType,userName:this.getParent().userName}
		}else if (pagename=='person') {
			justep.Shell.showPage( 'person' );//,{userType:this.userType,userName:this.getParent().userName}
		}  
	};

 

	Model.prototype.left1Click = function(event){
		if(null === this.getParent().userName || ""===this.getParent().userName || this.getParent().userName ===undefined){
			justep.Shell.showPage("login");
        }
	};

 

 

 

	Model.prototype.image3Click = function(event){
		if(this.getParent().userName==='' || this.getParent().userName===null || this.getParent().userName ===undefined){
			alert("请登录后使用！");
			return;
		}
		justep.Shell.showPage("questionABCD",{type:"1"});
	};

 

 

 

	Model.prototype.image4Click = function(event){
		if(this.getParent().userName==='' || this.getParent().userName===null || this.getParent().userName ===undefined){
			alert("请登录后使用！");
			return;
		}
		justep.Shell.showPage( 'statisticsList' );
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

 

 

 

	Model.prototype.image10Click = function(event){
		if(this.getParent().userName==='' || this.getParent().userName===null || this.getParent().userName ===undefined){
			alert("请登录后使用！");
			return;
		}
		justep.Shell.showPage("everydayList");
	};

 

 

 

 

 

	return Model;
});