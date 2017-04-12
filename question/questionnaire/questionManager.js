define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	// 返回上一页
	Model.prototype.backBtnClick = function(event) {
		this.comp("popOver1").show();
		
		justep.Shell.showPage("questionABCD");
	};

	Model.prototype.button1Click = function(event){
		justep.Shell.showPage( "questionA",{operator:"new"});	
	};
	
	Model.prototype.li1Click = function(event){
		var fid = event.bindingContext.$object.val("fID");
		var data = this.comp("baasData1");
		if(this.getParent().userType =='区域'){
			data.setValueByID("fStatus3", "相关区已查看", fid);
		}else if(this.getParent().userType =='督导'){
			data.setValueByID("fStatus2", "督导已复核", fid);
		}else if(this.getParent().userType =='领导'){
			data.setValueByID("fStatus", "领导已审阅", fid);
		}
		data.saveData();
		justep.Shell.showPage( "questionAShow",{operator:"query",id:fid,createDate:createDate});
	};
	
	Model.prototype.modelActive = function(event){
//		var data = this.comp("baasData1");
//		var cond =  "  tabquestiona.tabIsDelete=0 ";
//		if(this.getParent().userType=='访员'){
//			cond += " and tabquestiona.fCreator='"+this.getParent().userName+"'";
//		}
//		if(this.getParent().userType =='区域'){
//			cond += " and tabquestiona.fArea='"+this.getParent().userName+"'";
//    	} 
//		if(createDate !==null &&createDate !== '' &&createDate !==undefined){
//			cond += " and tabquestiona.fPhotoTime between  '"+createDate+" 00:00:00' and  '"+createDate+" 23:59:59'" ;
//		}
//		
//		data.setFilter("tabquestiona", cond);
//		data.refreshData();
//		this.comp("list1").refresh();
		var data1 = this.comp("data1");
		data1.newData();
		data1.setValue("type", "访员名称");
		var name = $(this.getElementByXid("name"));
		var area = $(this.getElementByXid("area"));
		var date = $(this.getElementByXid("date"));
		var status = $(this.getElementByXid("status"));
		name.css('display', 'block');
		area.css('display', 'none');
		date.css('display', 'none');
		status.css('display', 'none');
		this.comp("popOver1").hide();
//		var self = this;
//		justep.Baas.sendRequest({
//			"url" : "/question/question",
//			"action" : "getCount",
//			"async" : false,
//			"params" : {
//				tableName : "tabquestiona",
//				filter :cond
//			},
//			"success" : function(resultData) {
//				totalCount = resultData.totalCount;
//				self.comp("output7").set({value:"本列表问卷"+totalCount+"份，为您找到相关结果"+totalCount+"份"});
//			},
//			"error":function(msg){
//				justep.Util.hint("登录失败，请检查网络是否正常！", {"type" : "danger"	});
//			}
//		});
	};
	var totalCount ;
//	Model.prototype.modelLoad = function(event){
//				alert(2);
//		
//		var data = this.comp("baasData1");
//		var cond =  "   tabquestiona.tabIsDelete=0 ";
//		if(this.getParent().userType=='访员'){
//			cond += " and tabquestiona.fCreator='"+this.getParent().userName+"'";
//		}
//		if(this.getParent().userType =='区域'){
//			cond += " and tabquestiona.fArea='"+this.getParent().userName+"'";
//    	} 
//		data.setFilter("tabquestiona", cond);
//		data.refreshData();
//		
//		this.comp("list1").refresh();
//		var data1 = this.comp("data1");
//		data1.newData();
//		data1.setValue("type", "访员名称");
//		var self = this;
//		justep.Baas.sendRequest({
//			"url" : "/question/question",
//			"action" : "getCount",
//			"async" : false,
//			"params" : {
//				tableName : "tabquestiona",
//				filter :cond
//			},
//			"success" : function(resultData) {
//				totalCount = resultData.totalCount;
//				self.comp("output7").set({value:"本列表问卷"+totalCount+"份，为您找到相关结果"+totalCount+"份"});
//			},
//			"error":function(msg){
//				justep.Util.hint("登录失败，请检查网络是否正常！", {"type" : "danger"	});
//			}
//		});
//	};
//	Model.prototype.button2Click = function(event){
//		var querydata = this.comp("data1");
//		var startdate = querydata.getValue("startdate");
//		var enddate = querydata.getValue("enddate") ;
//		var cond = "1=1";
//		if(startdate!==null &&startdate!==''&& startdate!==undefined &&(enddate===null || enddate===''|| enddate===undefined) ){
//			cond += " and tabquestiona.fCreateDate between  '"+startdate+" 00:00:00' and  '"+startdate+" 23:59:59'" ;
//			
//		}else if((startdate===null || startdate===''|| startdate===undefined) &&enddate!==null &&enddate!==''&& enddate!==undefined ){
//			cond += " and tabquestiona.fCreateDate between  '"+enddate+" 00:00:00' and  '"+enddate+" 23:59:59'" ;
//		}else if(startdate!==null &&startdate!==''&& startdate!==undefined  &&enddate!==null &&enddate!==''&& enddate!==undefined){
//			cond += " and tabquestiona.fCreateDate between  '"+startdate+" 00:00:00'"+" and   '"+enddate +" 23:59:59'" ;
//		}
//		var data = this.comp("baasData1");
//		data.setFilter("tabquestiona", cond);
//		data.refreshData();
//	};
	var createDate = '';
	Model.prototype.modelParamsReceive = function(event){		
		createDate = event.params.createDate;
		var cond =  "  tabquestiona.tabIsDelete=0 ";
		var data = this.comp("baasData1");
		if(this.getParent().userType=='访员'){
			cond += " and tabquestiona.fCreator='"+this.getParent().userName+"'";
		}
		if(this.getParent().userType =='区域'){
			cond += " and tabquestiona.fArea='"+this.getParent().userName+"'";
    	} 
		if(createDate !==null &&createDate !== '' &&createDate !==undefined){
			cond += " and tabquestiona.fPhotoTime between  '"+createDate+" 00:00:00' and  '"+createDate+" 23:59:59'" ;
		}
		data.setFilter("tabquestiona", cond);
		data.refreshData();
		this.comp("list1").refresh();
		var data1 = this.comp("data1");
		data1.newData();
		data1.setValue("type", "访员名称");
		var self = this;
		justep.Baas.sendRequest({
			"url" : "/question/question",
			"action" : "getCount",
			"async" : false,
			"params" : {
				tableName : "tabquestiona",
				filter :cond
			},
			"success" : function(resultData) {
				var count = resultData.totalCount;
				totalCount = resultData.totalCount;
				self.comp("output7").set({value:"本列表问卷"+totalCount+"份，为您找到相关结果"+count+"份"});
				self.comp("popOver1").hide();
				
			},
			"error":function(msg){
				justep.Util.hint("登录失败，请检查网络是否正常！", {"type" : "danger"	});
			}
		});
	};
	
	function Trim(str,is_global){
		var result ='';
        if(str!==null && str!=='' && str!==undefined){
        	result = str.replace(/(^\s+)|(\s+$)/g,"");
	        if(is_global.toLowerCase()=="g"){
				result = result.replace(/\s/g,"");
	        }
	        result = result.replace(/\'/g,"''");
        }
        return result;
	}
	
	Model.prototype.button4Click = function(event){
		var querydata = this.comp("data1");
		var name = Trim(querydata.getValue("name"),'');
		var area = querydata.getValue("area");
		var time = querydata.getValue("time");
		var status = querydata.getValue("status");
		var type = querydata.getValue("type");
		var cond = "1=1";
		if(type==="" || type ===undefined || type === null){
			alert("请选择查询类别！");
			return ;
		}
		if(this.getParent().userType=='访员'){
			cond += " and tabquestiona.fCreator='"+this.getParent().userName+"'";
		}
		if(this.getParent().userType =='区域'){
			cond += " and tabquestiona.fArea='"+this.getParent().userName+"'";
    	} 
		
		if(type=='访员名称'){ 
			if(name!==null &&name!==''&& name!==undefined  ){
				cond+=" and tabquestiona.fCreator = '"+name+"' ";
			}
		}else if(type=='区域'){
			if(area!==null &&area!==''&& area!==undefined  ){
				cond+=" and tabquestiona.fArea = '"+area+"' ";
			}
		}else if(type=='调查时间'){
			if(time!==null &&time!==''&& time!==undefined  ){
				cond += " and tabquestiona.fCreateDate between  '"+time+" 00:00:00' and  '"+time+" 23:59:59'" ;
			}
		}else if(type=='问卷状态'){
			if(status!==null &&status!==''&& status!==undefined  ){
				cond += " and ( tabquestiona.fStatus2 ='"+status+"' or tabquestiona.fStatus3 ='"+status+"' or tabquestiona.fStatus ='"+status+"')  " ;
			}
		}
		
		
		var data = this.comp("baasData1");
		data.setFilter("tabquestiona", cond);
		data.refreshData();
		var self = this;
		justep.Baas.sendRequest({
			"url" : "/question/question",
			"action" : "getCount",
			"async" : false,
			"params" : {
				tableName : "tabquestiona",
				filter :cond
			},
			"success" : function(resultData) {
				var count = resultData.totalCount;
				self.comp("output7").set({value:"本列表问卷"+totalCount+"份，为您找到相关结果"+count+"份"});
			},
			"error":function(msg){
				justep.Util.hint("登录失败，请检查网络是否正常！", {"type" : "danger"	});
			}
		});
	};
	
	var type = '';
	Model.prototype.select1Change = function(event){
		type = event.value;
		var name = $(this.getElementByXid("name"));
		var area = $(this.getElementByXid("area"));
		var date = $(this.getElementByXid("date"));
		var status = $(this.getElementByXid("status"));
		
		if(type=='访员名称'){
			name.css('display', 'block');
			area.css('display', 'none');
			date.css('display', 'none');
			status.css('display', 'none');
		}else if(type=='区域'){
			name.css('display', 'none');
			area.css('display', 'block');
			date.css('display', 'none');
			status.css('display', 'none');
		}else if(type=='调查时间'){
			name.css('display', 'none');
			area.css('display', 'none');
			date.css('display', 'block');
			status.css('display', 'none');
		}else if(type=='问卷状态'){
			name.css('display', 'none');
			area.css('display', 'none');
			date.css('display', 'none');
			status.css('display', 'block');
		}
		var data = this.comp("data1");
		data.newData();
		data.setValue("type", type);
	};
	
	Model.prototype.button8Click = function(event){
		var data = this.comp("data1");
		data.newData();
		data.setValue("type", "访员名称");
		var name = $(this.getElementByXid("name"));
		var area = $(this.getElementByXid("area"));
		var date = $(this.getElementByXid("date"));
		var status = $(this.getElementByXid("status"));
		name.css('display', 'block');
		area.css('display', 'none');
		date.css('display', 'none');
		status.css('display', 'none');
 	};
	 
 
	 
	 
	return Model;
});