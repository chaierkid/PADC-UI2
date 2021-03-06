define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var comUtil = require("$UI/system/components/justep/common/common");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.backBtn = function(event) {
		justep.Portal.closeWindow();
	};

	Model.prototype.open = function(event) {
		var row = event.bindingContext.$object;
		var url = "../5/template.w";
		comUtil.openPage({url : require.toUrl(url),parent : this.getElementByXid("parent"),value : row.val('id')});
	};

	return Model;
});