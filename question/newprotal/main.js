define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
//	require("$UI/system/lib/cordova/cordova");
	var Model = function() {
		this.callParent();
	};

	Model.prototype.backBtnClick = function() {
//		justep.Portal.closeWindow();
		justep.Portal.toggleMenu();
		
	};

	Model.prototype.open = function(event) {
		var url = require.toUrl($(event.currentTarget).attr("url"));
		justep.Portal.openWindow(url);
	};

	Model.prototype.div1Click = function(event){
      var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/jinshuInventory/mainActivity.w";
      justep.Portal.openWindow(url);
       
	};

	Model.prototype.div2Click = function(event){
      var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/jidianInventory/mainActivity.w";
      justep.Portal.openWindow(url);
	};

	Model.prototype.div3Click = function(event){
	  var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/yuanqijianInventory/mainActivity.w";
      justep.Portal.openWindow(url);
	};

	Model.prototype.div4Click = function(event){
	  var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/biaozhunjianInventory/mainActivity.w";
      justep.Portal.openWindow(url);
	};

	Model.prototype.div5Click = function(event){
	  var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/chanchengpinInventory/mainActivity.w";
      justep.Portal.openWindow(url);
	};

	Model.prototype.div6Click = function(event){
	  var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/fujianInventory/mainActivity.w";
      justep.Portal.openWindow(url);
	};

	Model.prototype.div77Click = function(event){
	  var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/PTCheckRequirementList/mainActivity.w";
      justep.Portal.openWindow(url);
	};
	
	Model.prototype.div19Click = function(event){
	  var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/PTCheckRequirementListOver/mainActivity.w";
      justep.Portal.openWindow(url);
	};
	Model.prototype.saveCommit = function(event){
//		alert("保存数据成功！");
	};

	Model.prototype.button1Click = function(event){
      var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/PTCheckRequirementList/mainActivity.w";
      justep.Portal.openWindow(url);
	};
	
	Model.prototype.div20Click = function(event){
	  var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/newsbulletin/mainActivity.w";
      justep.Portal.openWindow(url);
	};
	Model.prototype.countrefresh = function(event){
		var data = this.comp("mainData");
		data.refreshData();
		var fCount = data.getCount();
		var FREQUIREMENTUNITNAME = this.getContext().getCurrentOrgName();
		if(FREQUIREMENTUNITNAME=="中航国际物流调剂部"){
			$(this.getElementByXid("badge1")).html(fCount);
			if(fCount<=0){
				$(this.getElementByXid("badge1")).hide();
			}
		}else{
			$(this.getElementByXid("button1")).hide();
			$(this.getElementByXid("button2")).hide();
		}
	};

	Model.prototype.modelLoad = function(event){
		var data = this.comp("mainData");
		data.refreshData();
		var fCount = data.getCount();
		var FREQUIREMENTUNITNAME = this.getContext().getCurrentOrgName();
		if(FREQUIREMENTUNITNAME=="中航国际物流调剂部"){
			$(this.getElementByXid("badge1")).html(fCount);
			if(fCount<=0){
				$(this.getElementByXid("badge1")).hide();
			}
		}else{
//			var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/newkhprotal/mainActivity.w";
//			justep.Portal.openWindow(url);
//			$(this.getElementByXid("button1")).hide();
//			$(this.getElementByXid("button2")).hide();
		}
//		this.countrefresh(event);
//		setInterval(function(){
//		document.location.reload();
//		window.location.href=window.location.href;//刷新不会有闪烁的现象
//		 "this.countrefresh(event)";
//		},5000);
//		
//		 setTimeout( function(){ alert("你好!"); } , 5000);
	};

	Model.prototype.modelActive = function(event){
		var data = this.comp("mainData");
		data.refreshData();
		var fCount = data.getCount();
		
		var FREQUIREMENTUNITNAME = this.getContext().getCurrentOrgName();
		if(FREQUIREMENTUNITNAME=="中航国际物流调剂部"){
			$(this.getElementByXid("badge1")).html(fCount);
		}else{
			$(this.getElementByXid("button1")).hide();
			$(this.getElementByXid("button2")).hide();
		}
	};



	Model.prototype.modelModelConstruct = function(event){
		var FREQUIREMENTUNITNAME = this.getContext().getCurrentOrgName();
		if(FREQUIREMENTUNITNAME!="中航国际物流调剂部"){
			var url = "$model/UI2/SuppliesSwap2/SuppliesSwap2/process/newkhprotal/mainActivity.w";
			justep.Portal.openWindow(url);
		}
	};
//and tabPersonConfig.fZhPersonID = :currentPersonID()


	return Model;
});