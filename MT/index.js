
define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');

	var Model = function() {
		this.callParent();
		this.shellImpl = new ShellImpl(this, {
			contentsXid : 'pages',
			pageMappings:{
				"main":{
					url : require.toUrl('./functionList.w')
				},
				"changeList":{
					url : require.toUrl('./changeList.w')
				},
				"detail":{
					url : require.toUrl('./detail.w')
				},
				"TCN":{
					url : require.toUrl('./TCN.w')
				},
				"tcnMain":{
					url : require.toUrl('./main.w')
				},
				"aboutUs":{
					url : require.toUrl('./channel/aboutUs.w')
				},
				"product":{
					url : require.toUrl('./channel/product.w')
				},
				"cases":{
					url : require.toUrl('./channel/cases.w')
				},
				"dynamic":{
					url : require.toUrl('./channel/dynamic.w')
				},
				"promotion":{
					url : require.toUrl('/UI2/MT/org/dept.w')
				},
				"contactUs":{
					url : require.toUrl('./channel/TCNList.w')
				},
				"cmo":{
					url : require.toUrl('./channel/CMO.w')
				},
				"dept":{
					url : require.toUrl('./org/dept.w')
				},
				"person":{
					url : require.toUrl('./org/person.w')
				}		
			}
		});
	};
 
	return Model;
});