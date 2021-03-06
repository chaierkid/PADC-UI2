define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var util = require("$UI/system/components/justep/common/common");

	var Model = function() {
		this.callParent();
	};
	//加载数据
	Model.prototype.employeeDataCustomRefresh = function(event) {
		var employee = event.source;
		$.ajax({
			type : "GET",
			url : require.toUrl('./json/employee.json'),
			dataType : 'json',
			async : false,
			cache : false,
			success : function(data) {
				employee.loadData(data);// 将返回的数据加载到data组件
			},
			error : function() {
				throw justep.Error.create("加载数据失败");
			}
		});
	};
	//切换按钮
	Model.prototype.switchingClick = function(event) {
		this.comp('employGrid').hideCol("name");
		this.comp('employGrid').hideCol("sex");
		this.comp('employGrid').showCol("dept");
		this.comp('employGrid').showCol("enducation");
	};

	// js代码
	Model.prototype.jsClick = function(event) {
		util.showSource({
			self : this,
			data : "demo/pcSample/grid/switchingGrid.js"
		},true);
	};
	// 源码
	Model.prototype.sourceClick = function(event) {
		util.showSource({
			self : this,
			type : true,
			data : "demo/pcSample/grid/switchingGrid.w&xid=employGrid"
		},true);
	};

	return Model;
});