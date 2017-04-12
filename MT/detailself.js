define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var SqliteUtil = require("$UI/webProblem/sqlite/sqliteUtil");
	var HollyDB = require("$UI/webProblem/sqlite/hollyDB");
	require("$UI/system/components/justep/docCommon/fileApi");
	var Utils = require("$UI/webProblem/utilJS/utils");
	var Model = function(){
		this.callParent();
		this.fID;
	};

	Model.prototype.button9Click = function(event){
		justep.Shell.showPage("main" );
	};
	Model.prototype.getImageUrl = function(value) {
		if (value) {
			try{
				var self = this;
				var json = eval(value);
				var newContent = self.getElementByXid ('col5');
				$(newContent).empty();
				for(var i=0;i<json.length;i++)
				{
					var realFileName = json[i].realFileName;
					var imgType = realFileName.substring(realFileName.lastIndexOf('.'));
					var storeFileName = json[i].storeFileName;
					var filePath =Utils.getCacheDirectoryPath(storeFileName+imgType);
		    		window.resolveLocalFileSystemURL(filePath,function(entry){
		    			var cdvFilePath = entry.toInternalURL();
		    			var newContent = self.getElementByXid ('col5');
		    		    var divimg = $('<img style ="width:50px;height:50px"   data-bind="click:div8Click" src="' + cdvFilePath + '" class="tb-img1"/>');
		    		    justep.Bind.addNodes(newContent, divimg);
					},function(){
						justep.Util.hint("路径转换失败！");
					});
				}
			} catch (e) {
				console.log(e);
			}
		}
		return "";
	};
//	Model.prototype.wc_problemCustomRefresh = function(event){
//		// 标记当前刷新是异步执行的
//		event.async = true;
//		this.hollyDB = HollyDB.getInstance();
//			// DemoDB.js中实现了自动判断并初始化数据库
//		var db = this.hollyDB.getDatabase();
//		var data = event.source;
//		var append = event.options && event.options.append; // 是否数据追加模式
//		var limit = event.limit; // 分页行数
//		var offset = event.offset; // 分页偏移
//		if(navigator.connection.type!='none'){
//			justep.Baas.sendRequest({
//				"url" : "/webproblem/problem",
//				"action" : "queryProblem",
//				"async" : false,
//				"params" : {fID : this.fID  },
//				"success" : function(resultData) {
//					data.loadData(resultData);
//					data.doRefreshAfter(true, event.options);
//				}
//			});
//		}else{
//			// 执行SQL查询
//			SqliteUtil.executeSql(db, "SELECT * FROM wc_problem where fID = '"+this.fID+"' LIMIT ? OFFSET ? ", [ limit, offset ], onSuccess, onError);
//		}
//		function onSuccess(res) {
//			// 转换返回数据结果
//			var table = SqliteUtil.rowsToTable(res.rows);
//			doRefreshData();
//			function doRefreshData() {
//				data.loadData(table, append);
//				// 异步执行模式下，加载数据后必须执行doRefreshAfter
//				data.doRefreshAfter(true, event.options);
//			}
//		}
//		function onError(msg) {
//			data.doRefreshAfter(false, event.options);
//		}
//	};

	Model.prototype.wc_problemCustomRefresh = function(event){
		// 标记当前刷新是异步执行的
		event.async = true;
		this.hollyDB = HollyDB.getInstance();
			// DemoDB.js中实现了自动判断并初始化数据库
		var db = this.hollyDB.getDatabase();
		var data = event.source;
		var append = event.options && event.options.append; // 是否数据追加模式
		var limit = event.limit; // 分页行数
		var offset = event.offset; // 分页偏移
		var self = this;
		//有网的情况直接访问后台
		if(this.getParent().lineType == "onLine"){
			justep.Baas.sendRequest({
				"url" : "/webproblem/problem",
				"action" : "queryProblem",
				"async" : false,
				"params" : {fID : this.fID,userCode:this.getParent().userID ,userName:this.getParent().userName },
				"success" : function(resultData) {
					data.loadData(resultData.table);
					data.doRefreshAfter(true, event.options);
				},
				"error":function(msg){
					justep.Util.hint("查询失败，请检查网络是否正常！", {"type" : "danger"	});
				}
			});
			if(data.val("fattached_file")!==null && data.val("fattached_file")!=='' && data.val("fattached_file")!==undefined ){
				var row2 = $(this.getElementByXid("col2"));
				row2.css('display', 'block');
				var col6row = $(this.getElementByXid("col6"));
				col6row.css('display', 'none'); 
			}
		}else{
			// 无网的情况访问sqlite数据库
			SqliteUtil.executeSql(db, "SELECT * FROM wc_problem where fID = '"+this.fID+"' LIMIT ? OFFSET ?  ", [ limit, offset ], onSuccess, onError);
		}
		function onSuccess(res) {
			// 转换返回数据结果
			var table = SqliteUtil.rowsToTable(res.rows);
			doRefreshData();
			function doRefreshData() {
				data.loadData(table, append);
				// 异步执行模式下，加载数据后必须执行doRefreshAfter
				data.doRefreshAfter(true, event.options);
			}
			if(data.val("fattached_file")!==null && data.val("fattached_file")!=='' && data.val("fattached_file")!==undefined ){
				var row2 = $(self.getElementByXid("col6"));
				row2.css('display', 'block'); 
				var col2row = $(self.getElementByXid("col2"));
				col2row.css('display', 'none'); 
				self.getImageUrl(data.val("fattached_file"));	
			}
		}
		function onError(msg) {
			data.doRefreshAfter(false, event.options);
		}
	};

	Model.prototype.button43Click = function(event){
		justep.Shell.showPage("talk",{fID:this.fID,parent:'self'} );
	};


	Model.prototype.modelParamsReceive = function(event){
		this.fID = event.params.fID;
		this.comp("wc_problem").refreshData();
		var ischeck = this.comp("wc_problem").getValue("fCheckIsOver");
		if(ischeck=='1'){
			$(this.getElementByXid("button43")).css('display', 'block');
		}else{
			$(this.getElementByXid("button43")).css('display', 'none');
		}
	};



	Model.prototype.button5Click = function(event){
		this.comp("menu").show();
	};
	

	Model.prototype.jinduBtnClick = function(event){
		justep.Shell.showPage("process",{fID:this.fID,parent:'self'} );
	};



	Model.prototype.copyBtnClick = function(event){
		justep.Shell.showPage("submit",{fID:this.fID} );
	};


	Model.prototype.image1Click = function(event){
		var value =this.comp("wc_problem").getValue("fattached_file");
		justep.Shell.showPage("img",{value:value} );
	};



	Model.prototype.div8Click = function(event){
		var wc_problemData = this.comp("wc_problem");
		var fattached_file = wc_problemData.getValue("fattached_file");
		var self = this;
		// 调用对话框新增
		this.comp("windowDialog1").open({
			"data" : {
				"fattached_file" : fattached_file,
				"lineType":self.getParent().lineType
			}
		});
	};



//	Model.prototype.modelActive = function(event){
//		if(navigator.connection.type!='none'){
//			this.getParent().synDataWithNet;
//		}
//	};



	Model.prototype.output10Render = function(event){
		if (event.value =='1') {
			return event.html = "是";
		} else {
			return event.html = "否";
		}
	};



	return Model;
});