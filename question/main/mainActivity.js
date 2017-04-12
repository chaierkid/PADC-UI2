define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');

	var Model = function() {
		this.callParent();
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"main" : {
					url : this.transUrl('./main.w')
				},
				"arrange" : {
					url : this.transUrl('./channel/product.w')
				},
				"mainQuestion" : {
					url : this.transUrl('./channel/mainQuestion.w')
				},
				"suggestion" : {
					url : this.transUrl('./channel/suggestion.w')
				},
				"base" : {
					url : this.transUrl('./channel/base.w')
				}

			}
		});
	};

	Model.prototype.modelLoad = function(event) {
		justep.Shell.showPage("main");
	};

	Model.prototype.transUrl = function(url) {
		return require.toUrl(url);
	};

	return Model;
});