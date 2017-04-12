define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var operator  ='';
	var parentID = "";
	var Model = function(){
		this.callParent();
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

	Model.prototype.button1Click = function(event){
		var data = this.comp("tabquestion");
		if(operator=='new'){
			if(confirm("提交后将不能修改，确认提交？")){
				data.setValue("tabIsDelete", "0");
				data.setValue("fCreator", this.getParent().userName);
				data.setValue("fCreateDate", justep.Date.toString(new Date(),justep.Date.STANDART_FORMAT));
				data.saveData();
			}
		}else {
			data.setValue("fEditor", this.getParent().userName);
			data.setValue("fEditeDate", justep.Date.toString(new Date(),justep.Date.STANDART_FORMAT));
			data.saveData();
		}
		alert("问卷已提交！");
		justep.Shell.showPage("questionBManager");
	};



	Model.prototype.modelParamsReceive = function(event){
		operator = event.params.operator;
		parentID = event.params.id;
        var data = this.comp("tabquestion");
        if(operator=='new'){
        	data.newData();
        	var fId = justep.UUID.createUUID();
			data.setValue("fID", fId);
        } else {
			data.setFilter("tabquestionb", "tabquestionb.fid='"+parentID+"'  "
					+ " and tabquestionb.tabIsDelete=0 ");
			data.refreshData();
        }
		
	};


	Model.prototype.button31Click = function(event){
		justep.Shell.showPage("questionBManager");
	};


	return Model;
});