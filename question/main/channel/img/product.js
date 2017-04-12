define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var dataUtils = require("$UI/imageAPP/js/dataUtils");
	var Model = function() {
		this.callParent();
	};

	// 返回上一页
	Model.prototype.backBtnClick = function(event) {
		justep.Shell.closePage();
	};

	Model.prototype.getImageUrl = function(row) {
		return require.toUrl(row.val('imgSrc'));
	};

	Model.prototype.open = function(event) {
		var row = event.bindingContext.$object;
		var url = "../1/template.w";
		justep.Shell.showPage(require.toUrl(url), {
			rowid : row.val("id")
		});
	};


	Model.prototype.modelActive = function(event){
		var data = this.comp("image");
		data.setFilter("sql", "tabImageAPP.fType='arrange'");
		data.refreshData();
	};

	Model.prototype.modelLoad = function(event){
		var data = this.comp("image");
		data.setFilter("sql", "tabImageAPP.fType='arrange'");
		data.refreshData();
	};

	Model.prototype.attachmentSimple2Blur = function(event){
		var data = this.comp("image");
		var data1 = this.comp("data1");
		var fattach = data1.getValue("fattach");
		data.newData();
		data.setValue("fAttachment",fattach);
		data.setValue("fType","arrange");
		var nowData ='';
		$.ajax({
			type : "OPTIONS",
			url : "/",
			complete : function(x) {
				nowData = dataUtils.format("yyyy-MM-dd hh:mm:ss",x.getResponseHeader("Date"));
				data.setValue("fCreateDate",justep.Date.toString(new Date(nowData),justep.Date.STANDART_FORMAT));
				data.saveData();
				data.refreshData();
				data1.newData();
			}
		});
	};

	Model.prototype.attachmentSimple2Click = function(event){
		alert(1);
		var uploader = this.comp("attachmentSimple2").uploader;
		var data = this.comp("image");
		var data1 = this.comp("data1");
		uploader.on('onSuccess',function(event){
			var fattach = data1.getValue("fattach");
			data.newData();
			var id = justep.UUID.createUUID();
			data.setValue("fID",id);
			data.setValue("fAttachment",fattach);
			data.setValue("fType","arrange");
			var nowData ='';
			$.ajax({
				type : "OPTIONS",
				url : "/",
				complete : function(x) {
					nowData = dataUtils.format("yyyy-MM-dd hh:mm:ss",x.getResponseHeader("Date"));
					data.setValue("fCreateDate",justep.Date.toString(new Date(nowData),justep.Date.STANDART_FORMAT));
					data.saveData();
					data.refreshData();
					data1.newData();
				}
			});
		});
	};

	return Model;
});